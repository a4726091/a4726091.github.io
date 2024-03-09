/*
目標1:存檔連同圖面一起匯入匯出->base64 >OK
目標2:TXT檔案的直接匯入 >OK
目標3:觸控模式下，右鍵選單重新設計->只需要圖片和找泡泡求功能
目標4:手勢操作->放大縮小 ->hammerJS>OK
目標5:整個程式碼重新整理
目標6:匯出存檔壓縮 -> http://ms2.ctjh.ntpc.edu.tw/~luti/105data-compress5.htm
目標7:尋照泡泡求重寫->以尋找BubbleNumber為主
目標8:尋照泡泡求有滑動效果->使用TWEEMJS
目標9:有托曳功能
*/

//windowWidth = windowWidth/2;

function addScript(url) {
	document.write("<script language=javascript src=" + url + "></script>");
}
addScript("../function/test.js");


//../function/test.js function\test.js
//////////////////////////////////////////////////
canvas2.width = windowWidth;
canvas2.height = windowHeight;

///////////////////////////////////////////////////

image.crossOrigin = "Anonymous";
image.src = "https://i.imgur.com/aS4FwAB.png";
//https://i.imgur.com/kKa6xj6.png
/////////////////////////////////////////////
//stage.addChild(pic);
//stage.addChild(rightClickMenu);
stage.enableMouseOver(); //重要開啟stage的MouseOver監聽器
// enable touch interactions if supported on the current device:
////////////////////////////////////////////////
//匯入表格
var oTable1 = new createjs.DOMElement("style-3");
oTable1.x = 0;
oTable1.y = windowHeight - 200;
stage.addChild(oTable1);

var oTable = document.getElementById("oTable");

for (i = 1; i < 500; i++) {
	var tBodies = oTable.tBodies;
	var tbody = tBodies[0];
	var tr = tbody.insertRow(tbody.rows.length);
	var td_1 = tr.insertCell(0);
	td_1.innerHTML = `<div contenteditable='true' id="oTableIDRow${i}Cells0" )></div>`;
	document.getElementById('oTable').rows[i].cells[0].textContent = i;
	//td_1.contenteditable = true;

	var td_2 = tr.insertCell(1);
	td_2.innerHTML = `<div contenteditable='true' id="oTableIDRow${i}Cells1")></div>`;
	var td_3 = tr.insertCell(2);
	td_3.innerHTML = `<div contenteditable='true' id="oTableIDRow${i}Cells2")></div>`;
	var td_4 = tr.insertCell(3);
	td_4.innerHTML = `<div contenteditable='true' id="oTableIDRow${i}Cells3")></div>`;
	var td_5 = tr.insertCell(4);
	td_5.innerHTML = `<div contenteditable='true' id="oTableIDRow${i}Cells4")></div>`;
	var td_6 = tr.insertCell(5);
	td_6.innerHTML = `<div contenteditable='true' id="oTableIDRow${i}Cells5")></div>`;
	var td_7 = tr.insertCell(6);
	td_7.innerHTML = `<div contenteditable='true' id="oTableIDRow${i}Cells6")></div>`;
	var td_8 = tr.insertCell(7);
	td_8.innerHTML = `<div contenteditable='true' id="oTableIDRow${i}Cells7")></div>`;
	var td_9 = tr.insertCell(8);
	td_9.innerHTML = `<div contenteditable='true' id="oTableIDRow${i}Cells8")></div>`;
	var td_10 = tr.insertCell(9);
	td_10.innerHTML = `<div contenteditable='true' id="oTableIDRow${i}Cells9")></div>`;

}
///////////////////////////////////////
bitmap = new createjs.Bitmap(image);
pic.addChild(bitmap);
///////////////////////////////////////
pic.regX = 278; //定義中心位置(X)
pic.regY = 277.5; //定義中心位置(Y)
pic.x = windowWidth / 2;
pic.y = windowHeight / 2;
pic.scaleX = pic.scaleY = 1.2;
stage.update();
///////////////////////////////////////////
//創建跟隨滑鼠的泡泡圖
var circleAtMouse = new createjs.Shape();
circleAtMouse.graphics
	.setStrokeStyle(5)
	.beginStroke("#fe2712")
	.beginFill("DeepSkyBlue")
	.drawCircle(0, 0, bubbleTempSize);

var textAtMouse = new createjs.Text(tempBubbleNumber, "50px Arial", bubbleTextTempColor);

textAtMouse.textAlign = 'center';
textAtMouse.textBaseline = 'middle';

pic.addChild(circleAtMouse);
pic.addChild(textAtMouse);


createjs.Ticker.on("tick", tick);
createjs.Ticker.setFPS(30);

/////////////////////////////////////
//禁用右鍵
canvas2.oncontextmenu = function(e) {
		return false;
	}
	//禁止Canvas上滾動
document.addEventListener("mousewheel", (e) => {
	if (e.target === canvas2) {
		e.preventDefault()
			//canvas.zoom(/*do smth with e*/)
		console.log('not scrolling')
	} else {
		console.log('scrolling')
	}
}, {
	passive: false
});

//螢幕上的鍵盤監聽器
window.addEventListener('keydown', showKey);

function showKey(e) {
	console.log(e.keyCode);
	switch (e.keyCode) {
		//按下backspace鍵
		case 8:
			if (tempBubbleNumber > 1 && backspaceMode == true) {
				console.log("backspace");
				console.log(tempBubbleNumber);
				var l = pic.numChildren;
				bubbleChild = pic.getChildAt(l - 1);
				bubbleChild2 = pic.getChildAt(l - 2);
				pic.removeChild(bubbleChild);
				pic.removeChild(bubbleChild2);
				//text.removeChild(bubbleChildText);
				tempBubbleNumber = tempBubbleNumber - 1;
				textAtMouse.text = tempBubbleNumber;
				tempID = tempID - 1;

				//去除最後一個元素
				bubbleID.pop();
				bubblenumber.pop();
				bubbleX.pop();
				bubbleY.pop();
				bubbleStroke.pop();
				bubbleFill.pop();
				bubblesize.pop();
				bubbleTextData.pop();
				bubbleTextColorData.pop();

				stage.update();
			}
			break;
			//按下enter
		case 13:
			console.log("enter");
			inputDATAonCheck();
			document.getElementById('inputInsItemCustomTXT').value = "";
			document.getElementById('inputInsItemPartNOTXT').value ="";
			break;
			//按下空白建
		case 32:
			console.log("空白建");
			bubblemode = true; //開啟泡泡圖模式
			bubbleShowMode = true; //開啟泡泡圖模式
			break;
		

	}
	if (event.ctrlKey && event.key === 'g') {
		//選取整個oTable
		selectTable();
	  }
	  if (event.ctrlKey && event.key === 'q') {
		console.log("L建");
		changeNotNumberValve('欠不可');
	  }
	  if (event.ctrlKey && event.key === 'y') {
		console.log("k建");
		changeNotNumberValve('焊渣不可');
	  }
}

//////////////////////////////////////
//觸控模式
var longTouchMode = false;
var touchTime = 0;
var touchType = "";

if (detectmob() == true) {
	//開啟觸控模式
	createjs.Touch.enable(stage);
	bubbleShowMode = false;
	dragType = "touch";
	document.getElementById("consoleLog").textContent = "開啟觸控模式";
	//參考https://createjs.com/docs/easeljs/classes/DisplayObject.html
	var hammer = Hammer(canvas, {
		prevent_default: true
	});
	/*
	    hammer.on("touch", startTouches);
	    hammer.on("pinch", processPinch);
	    hammer.on("drag", processDrag);
	    hammer.on("release", clearTouches);
	*/
	let pan = new Hammer.Pan();
	let pinch = new Hammer.Pinch();



	hammer.add([pan, pinch])
	hammer.get('pinch').set({
		enable: true
	})
	hammer.get('pan').set({
		enable: true
	})

	hammer.on("tap", (e) => {
		document.getElementById("consoleLog").textContent = "tap";
		touchType = "tap";
	})

	hammer.on("press", (e) => {
		document.getElementById("consoleLog").textContent = "press,長按";
		touchType = "press";
		//rightClickMenu.x = 10;
		//rightClickMenu.y = 10;
		//rightClickMenu.visible = true;
		touchMenu.x = 10;
		touchMenu.y = 10;
		touchMenu.visible = true;
		bubblemode = false;
		stage.update();

	})

	hammer.on("panstart", (e) => {
		document.getElementById("consoleLog").textContent = "panstart";
		//longTouchMode = true;
		touchType = "panstart";
		initDrag = false;
	})


	hammer.on("panmove", (e) => {
		document.getElementById("consoleLog").textContent = "panmove,移動";
		touchType = "panmove";
		initDrag = true;
		console.log("panmove");
	})

	hammer.on("panend", (e) => {
			document.getElementById("consoleLog").textContent = "panend,結束";
			touchType = "panend";
			initDrag = false;
			console.log("panmove");
		})
		/*
		pinchstart: 多点触控开始
		pinchmove: 多点触控过程
		pinchend: 多点触控结束
		pinchcancel: 多点触控取消
		pinchin: 多点触控时两手指越来越近
		pinchout: 多点触控时两手指越来越远
		*/

	hammer.on("pinchstart", (e) => {
		document.getElementById("consoleLog").textContent = "pinchstart";
		touchType = "pinchstart";
		//計算中心位置
		var point = pic.globalToLocal(e.center.x, e.center.y);
		pic.regX = point.x;
		pic.regY = point.y;
		pic.x = e.center.x;
		pic.y = e.center.y;
	})

	hammer.on("pinchin", (e) => {
		touchType = "pinchin";
		document.getElementById("consoleLog").textContent = "pinchin,縮小 : " + e.center.x + "," + e.center.y;
		//以中心位置縮小
		scalePicture(countPicSacle(pic, "smaller"), pic);
		/*
  //定位圖片中心至縮放中心
	pic.regX = e.center.x;
	pic.regY = e.center.y;
  scalePicture(-0.01, pic);
  */
	})

	hammer.on("pinchout", (e) => {
			touchType = "pinchout";
			document.getElementById("consoleLog").textContent = "pinchout,放大 : " + e.center.x + "," + e.center.y;
			//以中心位置放大
			scalePicture(countPicSacle(pic, "bigger"), pic);
			//scalePicture(0.01, pic);
			/*
  //定位圖片中心至縮放中心
	pic.regX = e.center.x;
	pic.regY = e.center.y;
  scalePicture(0.01, pic);
  */
		})
		/*
		stage.on("mousedown", function(evt) {
				longTouchMode = true;
				initDrag = false;
				document.getElementById("consoleLog").textContent = "mousedown";
		});
		stage.on("pressmove", function(evt) {
				initDrag = true;
				touchTime = 0;
				//initDrag = false;
				document.getElementById("consoleLog").textContent = "pressmove";
		});
		stage.on("pressup", function(evt) {
				longTouchMode = false;
				touchTime = 0;
				initDrag = false;
				document.getElementById("consoleLog").textContent = "pressup";
		});
    */


}
//偵測使用者的裝置是否為行動裝置
//https://tso1158687.github.io/blog/2019/03/10/detect-mobile-device/
function detectmob() {
	if (navigator.userAgent.match(/Android/i) ||
		navigator.userAgent.match(/webOS/i) ||
		navigator.userAgent.match(/iPhone/i) ||
		navigator.userAgent.match(/iPad/i) ||
		navigator.userAgent.match(/iPod/i) ||
		navigator.userAgent.match(/BlackBerry/i) ||
		navigator.userAgent.match(/Windows Phone/i)
	) {
		return true;
	} else {
		return false;
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////
//上傳圖片作為canvas地背景
var form = new FormData(); //通過HTML表單建立FormData物件
var url = '127.0.0.1:8080/'

function selectFile() {
	var files = document.getElementById('ppic').files;
	//console.log(files[0]);
	if (files.length == 0) {
		return;
	}
	var file = files[0];
	//把上傳的圖片顯示出來
	var reader = new FileReader();
	// 將檔案以Data URL形式進行讀入頁面
	//console.log(reader);
	reader.readAsBinaryString(file);
	reader.onload = function(f) {
			var result = document.getElementById("result");
			var src = "data:" + file.type + ";base64," + window.btoa(this.result);
			image.src = src;

		}
		////////////////////
	image.onload = function() {
		//圖片對齊中間
		pic.x = windowWidth / 2;
		pic.y = windowHeight / 2;
		pic.regX = image.width / 2;
		pic.regY = image.height / 2;
		pic.scaleX = stageWidth / image.width;
		pic.scaleY = pic.scaleX;
		console.log("X:" + pic.x);
		console.log("Y:" + pic.y);
		console.log("regX:" + pic.regX);
		console.log("regY:" + pic.regY);
		stage.update();
		//document.body.appendChild(image);
	}

	////////////////////
	//console.log('file',file);
	///////////////////
	form.append('file', file);
	//console.log(form.get('file'));
	if (detectmob() == true) {
		bubbleShowMode = false;
	}
}

/////////////////////////////
//圖片匯出功能
//暫存pic並轉存為Base64
function saveContainToBase64() {
	//隱藏滑鼠泡泡球
	circleAtMouse.visible = false;
	textAtMouse.visible = false;
	// Update the stage once to show the loaded image (at its native size)
	stage.update();

	// Cache the bitmap. This is necessary to create the cache-canvas.
	pic.cache(0, 0, image.width, image.height);
	//console.log(image.width + "," + image.height)
	// Note that if you update again, it will show the canvas image as blurred.
	//stage.update();

	// Get the cache-canvas's data url.
	var url = pic.getCacheDataURL();

	return url
}
//將BASE64轉圖片
function outputContainToImage() {
	// Create a new image with the data url, and add it to the body.
	//var img2 = new Image();
	//img2.src = saveContainToBase64();
	//document.body.appendChild(img2);
	var tempfileName = document.getElementById("textbox2");
	if (tempfileName.value == "") {
		tempfileName.value = "未命名";
	} else {
		tempfileName.value = tempfileName.value + " 泡泡圖"
	}
	downloadimage(saveContainToBase64(), tempfileName.value);
}

var saveFile = function(data, filename) {
	//创建一个具有指定的命名空间URI和限定名称的元素。
	var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
	save_link.href = data;
	save_link.download = filename;

	var event = document.createEvent('MouseEvents');
	event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	save_link.dispatchEvent(event);
};

var _fixType = function(type) {
	type = type.toLowerCase().replace(/jpg/i, 'jpeg');
	var r = type.match(/png|jpeg|bmp|gif/)[0];
	return 'image/' + r;
};

function downloadimage(inputBase64Data, outputFileName) {
	var type = 'png';
	// 返回一個包含JPG圖片的<img>元素
	var img_png_src = inputBase64Data; //將畫板儲存為圖片格式的函式
	// 加工image data，替換mime type
	imgData = img_png_src.replace(_fixType(type), 'image/octet-stream');
	// 下載後的問題名
	saveFile(imgData, outputFileName + "." + type);
}
/////////////////////////////////////////////