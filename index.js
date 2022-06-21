"use strict"

//広域変数
let tiles = [];

//初期化関数
function init() {
	//table要素への参照を取得
	let table = document.getElementById("table");
	//4行作成
	for (let i = 0; i < 5; i++) {
		//各行作成
		let tr = document.createElement("tr");
		//タイル作成
		for (let j = 0; j < 5; j++) {
			//各タイル作成
			let td = document.createElement("td");
			let index = i * 5 + j;
			td.className = "tile";
			//タイルの並び順
			td.index = index;
			//タイルに描画されている数値
			td.value = index;
			td.textContent = index == 0 ? "":index;
			td.onclick = click;
			//行に挿入
			tr.appendChild(td);
			tiles.push(td);
		}
		table.appendChild(tr);
	}
	for (let i = 0; i < 1000; i++) {
		click({
			srcElement: {
				index: Math.floor(Math.random() *16)
			}
		});
	}
}

//タイルをクリック
function click(e) {
	//クリックしたタイルのindex取得
	let i = e.srcElement.index;
	//上のタイル
	if (i - 5 >= 0 && tiles[i - 5].value == 0) {
		swap(i, i - 5);
	}
	//下のタイル
	else if (i + 5 < 26 && tiles[i + 5].value == 0) {
		swap(i, i + 5);
	}
	//左のタイル
	else if (i % 5 != 0 && tiles[i - 1].value == 0) {
		swap(i, i - 1);
	}
	//右のタイル
	else if (i % 5 != 4 && tiles[i + 1].value == 0) {
		swap(i, i + 1);
	}
}

//タイルの番号を入れ替える
function swap(i, j) {
	let tmp = tiles[i].value;
	tiles[i].textContent = tiles[j].textContent;
	tiles[i].value = tiles[j].value;
	tiles[j].textContent = tmp;
	tiles[j].value = tmp;
}