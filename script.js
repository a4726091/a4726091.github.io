var windowWidth  = window.innerWidth - 35 ||
		document.documentElement.clientWidth ||
		document.body.clientWidth;

var windowHeight = window.innerHeight - 50 ||
		document.documentElement.clientHeight ||
		document.body.clientHeight;

var canvas2 = document.getElementById("testCanvas");
canvas2.width = windowWidth;
canvas2.height = windowHeight;
/////////////////////////////////////////////////////
// 禁止双击放大
    var lastTouchEnd = 0;
    document.documentElement.addEventListener('touchend', function (event) {
        var now = Date.now();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    // 禁止双指放大
    document.documentElement.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, false);

///////////////////////////////////////////////////
var world, worldWidth, worldHeight;
var stage = new createjs.Stage("testCanvas");
var pic = new createjs.Container();
var rightClickMenu = new createjs.Container(); //右鍵選單
// load the source image:
var image = new Image();
image.crossOrigin = "Anonymous";
image.src = "https://i.imgur.com/kKa6xj6.png";

var stageWidth = windowWidth;
var stageHeight = windowHeight;

/////////////////////////////////////////////
stage.addChild(pic);
stage.addChild(rightClickMenu);
stage.enableMouseOver(); //重要開啟stage的MouseOver監聽器
//參考https://createjs.com/docs/easeljs/classes/DisplayObject.html
///////////////////////////////////////
bitmap = new createjs.Bitmap(image);
pic.addChild(bitmap);
pic.x = 250;
pic.y = 250;
pic.regX = 1050; //定義中心位置(X)
pic.regY = 1080; //定義中心位置(Y)
pic.scaleX = pic.scaleY = 0.2;
stage.update();
///////////////////////////////////////////


//創建右鍵選單的背景
var rightClickMenuBackground = new createjs.Shape();
rightClickMenuBackground.graphics
		.setStrokeStyle(2)
		.beginStroke("#000000")
		.beginFill("DeepSkyBlue")
		.drawRect(0, 0, 190, 200);
rightClickMenuBackground.alpha = 0.7;
rightClickMenu.addChild(rightClickMenuBackground);
//創建右鍵選單的按鈕

var rightClickFirstButton = new creatNewrightClickButton(10, 10, 80, 20, "#000000", "Lightyellow", bubbleBigger, "放大");
var rightClickSecondButton = new creatNewrightClickButton(10, 40, 80, 20, "#000000", "Lightyellow", bubbleSmaller, "縮小");
var rightClickthirdButton = new creatNewrightClickButton(10, 70, 80, 20, "#000000", "Lightyellow", changeButtonColorToRed, "紅色");
var rightClickfourthButton = new creatNewrightClickButton(10, 100, 80, 20, "#000000", "Lightyellow", changeButtonColorToBlue, "藍色");
var rightClickfifthButton = new creatNewrightClickButton(10, 130, 80, 20, "#000000", "Lightyellow", changeButtonColorToGreen, "綠色");
var rightClickOkButton = new creatNewrightClickButton(10, 160, 80, 20, "#000000", "#ff1571", rightClickOk, "確定");
var rightClickOutPutButton = new creatNewrightClickButton(100, 10, 80, 20, "#000000", "Lightyellow", outputSaveData, "匯出存檔");
var rightClickInPutButton = new creatNewrightClickButton(100, 40, 80, 20, "#000000", "Lightyellow", inputSaveData, "匯入存檔");
var rightClickfindBubble = new creatNewrightClickButton(100, 70, 80, 20, "#000000", "Lightyellow", findbubble, "尋找泡泡球");
// 新建的domelment的座標會位於本身在html的位置上，所以一開始要設定在左上角與canvas切齊
 var textarea2 = new createjs.DOMElement("textbox2");
textarea2.x = 100;
textarea2.y = 100;

rightClickMenu.addChild(textarea2);

stage.update();

//(X,Y,寬,高,外框顏色,填充顏色,點選時使用的Function,文字內容)
function creatNewrightClickButton(X, Y, width, height, StrokeColor, FillColor, clickListenerFunction, textContent) {
		this.Shape = new createjs.Shape();
		this.Shape.graphics
				.setStrokeStyle(1)
				.beginStroke(StrokeColor)
				.beginFill(FillColor)
				.drawRect(X, Y, width, height);
		rightClickMenu.addChild(this.Shape);
		this.Shape.addEventListener('mouseover', handleClick);
		this.Shape.addEventListener('mouseout', handleClick123);
		this.Shape.addEventListener('click', clickListenerFunction);

		this.text = new createjs.Text(textContent, "17px Arial", "#080808");
		this.text.x = X + 40;
		this.text.y = Y + 10 + 1;
		this.text.textAlign = 'center';
		this.text.textBaseline = 'middle';
		rightClickMenu.addChild(this.text);
}

rightClickMenu.visible = false;
stage.update();
///////////////////////////////////////////
var bubblemode = true; //泡泡圖點選模式(默認開啟)
var bubbleX = []; //儲存滑鼠X座標之陣列
var bubbleY = []; //儲存滑鼠X座標之陣列
var bubblenumber = []; //儲存泡泡圖數字座標之陣列
var bubbleStroke = []; //儲存泡泡圖線的資料
var bubbleFill = []; //儲存泡泡圖顏色填滿的資料
var bubblesize = []; //儲存泡泡圖大小
var coordinateNumber = 1; //暫存現在存到第幾個數字
var bubbleTempFill = "#ffffff"; //暫存現在的顏色
var bubbleTempStroke = "#000000"; //暫存現在描邊的顏色
var bubbleTempStrokeStyle = 3; //暫存現在描邊的寬度
var bubbleTempSize = 50; //暫存現在泡泡圖大小

var bubbleTextTempSize = 50; //暫存文字大小
var bubbleTextTempColor = "#080808"; //暫存文字顏色

var bubbleTextData = [];
var bubbleTextColorData = [];


var circleAtMouse = new createjs.Shape();
circleAtMouse.graphics
		.setStrokeStyle(5)
		.beginStroke("#fe2712")
		.beginFill("DeepSkyBlue")
		.drawCircle(0, 0, bubbleTempSize);
/*
circle.graphics.drawCircle(0, 0, 50);
circle.Fill("red");
 circle.Stroke("#000000");
 */
circleAtMouse.x = 100;
circleAtMouse.y = 100;

var textAtMouse = new createjs.Text(coordinateNumber, "50px Arial", bubbleTextTempColor);
textAtMouse.x = 100;
textAtMouse.y = 100;
textAtMouse.textAlign = 'center';
textAtMouse.textBaseline = 'middle';

//textAtMouse.textBaseline = "alphabetic";

pic.addChild(circleAtMouse);
pic.addChild(textAtMouse);
/*
for (var i = 0; i < 225; i++) {
		creatCircle(i);
	}
*/
//創建圓的function
function creatCircle(inpi) {
		//滑鼠座標轉圖面座標
		childCh = pic.globalToLocal(stage.mouseX, stage.mouseY);
		bubbleX[inpi] = childCh.x; //儲存滑鼠X座標之陣列
		bubbleY[inpi] = childCh.y; //儲存滑鼠X座標之陣列
		bubblenumber[inpi] = coordinateNumber; //儲存泡泡圖數字座標之陣列
		bubbleStroke[inpi] = bubbleTempStroke; //儲存泡泡圖線顏色的資料
		bubbleFill[inpi] = bubbleTempFill; //儲存泡泡圖顏色填滿的資料
		bubblesize[inpi] = bubbleTempSize; //儲存泡泡圖大小
		bubbleTextData[inpi] = bubbleTextTempSize;
		bubbleTextColorData[inpi] = bubbleTextTempColor;

		var shape = new createjs.Shape();
		shape.graphics.setStrokeStyle(2)
				.beginFill(bubbleFill[inpi])
				.beginStroke(bubbleStroke[inpi]);
		shape.graphics.drawCircle(bubbleX[inpi], bubbleY[inpi], bubblesize[inpi]);

		//shape.x = shapeX[inpi];
		//shape.y = shapeY[inpi];
		////////////////////////////////////////////////////////////
		var text = new createjs.Text(coordinateNumber, bubbleTextData[inpi].toString() + "px Arial", bubbleTextColorData[inpi]);
		text.x = bubbleX[inpi];
		text.y = bubbleY[inpi];
		text.textAlign = 'center';
		text.textBaseline = 'middle';
		/////////////////////////////////////////////////////////
		pic.addChild(shape);
		pic.addChild(text);
}
/////////////////////////////////////////////
//匯出存檔
function outputSaveData() {
		var saveData = "";
		var textFile = null;
		for (var j = 1; j < bubblenumber.length; j++) {
				saveData = saveData 
          + "#bn" +"#Fnb" + j +"#XFnb"+ bubblenumber[j] + "#Xbn" + "#Bnb" + j + "#XBnb"
          + "#bx" +"#Fnb" + j +"#XFnb" + bubbleX[j].toFixed(2) + "#XBx" + "#Bnb" + j + "#XBnb"
          + "#by" +"#Fnb" + j +"#XFnb" + bubbleY[j].toFixed(2) + "#bxy" + "#Bnb" + j + "#XBnb"
          + "#bst" +"#Fnb" + j +"#XFnb" + bubbleStroke[j] + "#Xbst" + "#Bnb" + j + "#XBnb"
          + "#bfc" +"#Fnb" + j +"#XFnb" + bubbleFill[j] + "#Xbfc" + "#Bnb" + j + "#XBnb"
          + "#bz"+"#Fnb" + j +"#XFnb"  + bubblesize[j] + "#Xbz" + "#Bnb" + j + "#XBnb"
          +"#bt" +"#Fnb" + j +"#XFnb" + bubbleTextData[j] + "#Xbt" + "#Bnb" + j + "#XBnb"
          + "#btc" +"#Fnb" + j +"#XFnb" + bubbleTextColorData[j] + "#Xbtc" + "#Bnb" + j + "#XBnb";
		}
    saveData = "#all"+bubblenumber.length.toString() + "#Xall"+ saveData   ;
		/////////////////////////////////
		//匯出TXT，參考https://stackoverflow.com/questions/21012580/is-it-possible-to-write-data-to-file-using-only-javascript
		var link = document.createElement('a');
		link.setAttribute('download', 'info.txt');
		link.href = makeTextFile(saveData);
		document.body.appendChild(link);

		// wait for the link to be added to the document
		window.requestAnimationFrame(function() {
				var event = new MouseEvent('click');
				link.dispatchEvent(event);
				document.body.removeChild(link);
		});
		////////////////////////////////
		console.log(saveData);
}
//匯出TXT，參考https://stackoverflow.com/questions/21012580/is-it-possible-to-write-data-to-file-using-only-javascript
function makeTextFile(text) {
		var textFile = null;
		var data = new Blob([text], {
				type: 'text/plain'
		});

		// If we are replacing a previously generated file we need to
		// manually revoke the object URL to avoid memory leaks.
		if (textFile !== null) {
				window.URL.revokeObjectURL(textFile);
		}

		textFile = window.URL.createObjectURL(data);

		return textFile;
}
/////////////////////////////
//匯入savedata
var inputbubblenumber = [],
    inputbubbleX = [],
    inputbubbleY = [],
    inputbubbleStroke = [],
    inputbubbleFill = [],
    inputbubblesize = [],
    inputbubbleTextdata = [],
    inputbubbleTextColorData = [];

function inputSaveData() {
		var textbox = document.getElementById('textbox');
		var tempData = textbox.value;
    var a = getSaveDate("#all","#Xall",tempData);
    //清空陣列(防誤)
    inputbubblenumber.length = 0;
    inputbubbleX.length = 0;
    inputbubbleY.length = 0;
    inputbubbleStroke.length = 0;
    inputbubbleFill.length = 0;
    inputbubblesize.length = 0;
    inputbubbleTextdata.length = 0;
    inputbubbleTextColorData.length = 0;
    //清空畫布上的泡泡圖(防誤)
     pic.removeAllChildren();
     pic.addChild(bitmap);
     pic.addChild(circleAtMouse);
     pic.addChild(textAtMouse);
    
    //跟隨的泡泡球變回1(防誤)
    coordinateNumber = 1;
		textAtMouse.text = coordinateNumber;
    /////////////////////
   //資料(savedata)解析並繪出泡泡圖
    for (var j = 1; j < a; j++) {
				inputbubblenumber[j] = getSaveDate( "#bn" +"#Fnb" + j +"#XFnb","#Xbn" + "#Bnb" + j + "#XBnb",tempData);
        inputbubbleX[j] = getSaveDate("#bx" +"#Fnb" + j +"#XFnb","#XBx" + "#Bnb" + j + "#XBnb",tempData);
        inputbubbleY[j] = getSaveDate("#by" +"#Fnb" + j +"#XFnb","#bxy" + "#Bnb" + j + "#XBnb",tempData);
        inputbubbleStroke[j] = getSaveDate("#bst" +"#Fnb" + j +"#XFnb","#Xbst" + "#Bnb" + j + "#XBnb",tempData);
        inputbubbleFill[j] = getSaveDate("#bfc" +"#Fnb" + j +"#XFnb","#Xbfc" + "#Bnb" + j + "#XBnb",tempData);
        inputbubblesize[j] = getSaveDate("#bz"+"#Fnb" + j +"#XFnb","#Xbz" + "#Bnb" + j + "#XBnb",tempData);
        inputbubbleTextdata[j] = getSaveDate("#bt" +"#Fnb" + j +"#XFnb","#Xbt" + "#Bnb" + j + "#XBnb",tempData);
        inputbubbleTextColorData[j] = getSaveDate("#btc" +"#Fnb" + j +"#XFnb","#Xbtc" + "#Bnb" + j + "#XBnb",tempData);
      //////////////////////////////////////////
      var shape = new createjs.Shape();
      		shape.graphics.setStrokeStyle(2)
      				.beginFill(inputbubbleFill[j])
      				.beginStroke(inputbubbleStroke[j]);
      		shape.graphics.drawCircle(inputbubbleX[j], inputbubbleY[j], inputbubblesize[j]);

		//shape.x = shapeX[inpi];
		//shape.y = shapeY[inpi];
		////////////////////////////////////////////////////////////
      		var text = new createjs.Text(inputbubblenumber[j], inputbubbleTextdata[j].toString() + "px Arial", inputbubbleTextColorData[j]);
      		text.x = inputbubbleX[j];
      		text.y = inputbubbleY[j];
      		text.textAlign = 'center';
      		text.textBaseline = 'middle';
		/////////////////////////////////////////////////////////
      		pic.addChild(shape);
      		pic.addChild(text);
      ////////////////////////////////////////
        console.log (inputbubblenumber[j]+","+inputbubbleX[j]+","+inputbubbleY[j]+","+inputbubbleStroke[j]+","+inputbubbleFill[j]+","+inputbubblesize[j]+","+inputbubbleTextdata[j]+","+inputbubbleTextColorData[j]);
      
		  }
		//console.log(tempData);
}
function getSaveDate(front,back,str){
    var a = str.search(front);
    var b = str.search(back)+back.length;
    var c = str.slice(a,b);
    var d = c.replace(front,"");
        d = d.replace(back,"");
    return d
}
//inputSaveData();
///////////////////////////////////////////
//相容性寫法，該函式也是網上別人寫的，不過找不到出處了，蠻好的，所有我也沒有必要修改了
//判斷滑鼠滾輪滾動方向
if (testCanvas.addEventListener) //FF,火狐瀏覽器會識別該方法
		testCanvas.addEventListener('DOMMouseScroll', wheel, false);
testCanvas.onmousewheel = testCanvas.onmousewheel = wheel; //W3C
//統一處理滾輪滾動事件
function wheel(event) {
		var delta = 0;
		if (!event) event = testCanvas.event;
		if (event.wheelDelta) { //IE、chrome瀏覽器使用的是wheelDelta，並且值為“正負120”
				delta = event.wheelDelta / 120;
				if (testCanvas.opera) delta = -delta; //因為IE、chrome等向下滾動是負值，FF是正值，為了處理一致性，在此取反處理
		} else if (event.detail) { //FF瀏覽器使用的是detail,其值為“正負3”
				delta = -event.detail / 3;
		}
		if (delta)
				handle(delta);
}
//上下滾動時的具體處理函式
function handle(delta) {

		if (delta < 0) { //向下滾動
				scalePicture(-0.05, pic);
				//pic.mouseWheel(e => Controls.zoom(controls).worldZoom(e));
		} else { //向上滾動
				scalePicture(0.05, pic);
				//pic.mouseWheel(e => Controls.zoom(controls).worldZoom(e));
		}
}
//圖片的放大縮小
function scalePicture(scaleNunber, container) {
		//儲存現在縮放量
		let nowX = container.scaleX + scaleNunber;
		let nowY = container.scaleY + scaleNunber;

		if (nowX < 0 || nowY < 0) {
				nowX = container.scaleX - scaleNunber;
				nowY = container.scaleY - scaleNunber;
		} else {
				container.scaleX = nowX;
				container.scaleY = nowY;

				childCh = container.globalToLocal(stage.mouseX, stage.mouseY);

				if (childCh.x > 0 && childCh.x < 2100 && childCh.y > 0 && childCh.y < 2160) {
						//定位圖片中心至滑鼠位置
						container.regX = childCh.x;
						container.regY = childCh.y;
						//圖片位移至滑鼠位置
						container.x = stage.mouseX;
						container.y = stage.mouseY;
				}
		}
		stage.update();
}
/////////////////////////////////////
const canvas = document.getElementById('testCanvas');
//禁用右鍵
canvas.oncontextmenu = function(e) {
		return false;
}

//禁止Canvas上滾動
document.addEventListener("mousewheel", (e) => {
		if (e.target === canvas) {
				e.preventDefault()
						//canvas.zoom(/*do smth with e*/)
				console.log('not scrolling')
		} else {
				console.log('scrolling')
		}
}, {
		passive: false
});


/////////////////////////////////////
var initDrag = false;
//滑鼠按下事件

function whichButton(event) {
		var btnNum = event.button;
		if (btnNum == 2) { //2為右鍵
				console.log("您點擊了滑鼠右鍵！");

		} else if (btnNum == 0) { //0為左鍵
				console.log("您點擊了滑鼠左鍵！");

		} else if (btnNum == 1) { //1為中鍵
				console.log("您點擊了滑鼠中鍵！");
				initDrag = true; //拖曳模式開啟
		} else {
				console.log("您點擊了" + btnNum + "號鍵，我不能確定它的名稱。！");
		}
}

function clickup(event) {
		console.log("clickup");
		var btnNum = event.button;
		if (btnNum == 2) { //2為右鍵
				console.log("您放開了滑鼠右鍵！");
				//childCh = pic.globalToLocal(stage.mouseX, stage.mouseY);
				rightClickMenu.x = stage.mouseX;
				rightClickMenu.y = stage.mouseY;
				rightClickMenu.visible = true;
				bubblemode = false;
				stage.update();
		} else if (btnNum == 0) { //0為左鍵
				console.log("您放開了滑鼠左鍵！");
				//console.log(circleAtMouse.Graphics.Fill);
				if (bubblemode == true) {
						//泡泡球位置對其滑鼠 
						creatCircle(coordinateNumber);
						//outputArray(coordinateNumber);
						//AddTable2(coordinateNumber);
						coordinateNumber = coordinateNumber + 1;
						textAtMouse.text = coordinateNumber;

				} else {

				}
		} else if (btnNum == 1) { //1為中鍵
				console.log("您放開了滑鼠中鍵！");
				initDrag = false; //拖曳模式關閉
		} else {
				console.log("您放開了" + btnNum + "號鍵，我不能確定它的名稱。！");
		}

}

///////////////////////////////////
//螢幕上的鍵盤監聽器
window.addEventListener('keydown', showKey);

function showKey(e) {
		console.log(e.keyCode);
		switch (e.keyCode) {
				//按下backspace鍵
				case 8:
        if(coordinateNumber>1){
          console.log("backspace");
						console.log(coordinateNumber);
						var l = pic.numChildren;
						bubbleChild = pic.getChildAt(l - 1);
						bubbleChild2 = pic.getChildAt(l - 2);
						pic.removeChild(bubbleChild);
						pic.removeChild(bubbleChild2);
						//text.removeChild(bubbleChildText);
						coordinateNumber = coordinateNumber - 1;
						textAtMouse.text = coordinateNumber;
						//去除最後一個元素
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
						break;
						//按下空白建
				case 32:
						console.log("空白建");
						bubblemode = true; //開啟泡泡圖模式
						break;
		}
}
//////////////////////////////////////
//右鍵選單的function


//滑鼠在按鈕上時變更顏色(變淡)
function handleClick(event) {
		console.log("evt.target: " + event.target + ", evt.type: " + event.type);
		//筆記:如果要用event調用選取元素要用.targe
		event.target.alpha = 0.5;
		console.log("mouseover");
}
//滑鼠離開按鈕時變更顏色(回復)
function handleClick123(event) {
		event.target.alpha = 1;
		console.log("mouseout");
}

function handleClick456(event) {
		console.log("click");
}

function rightClickOk(event) {
		console.log("click");
		rightClickMenu.visible = false; //隱藏右鍵選單
		bubblemode = true; //開啟泡泡圖模式
}

function bubbleBigger() {
		bubbleTempSize = bubbleTempSize + 3;
		circleAtMouse.scaleX = dimToScale(50, bubbleTempSize);
		circleAtMouse.scaleY = dimToScale(50, bubbleTempSize);

		bubbleTextTempSize = bubbleTextTempSize + 3;
		textAtMouse.scaleX = dimToScale(50, bubbleTempSize);
		textAtMouse.scaleY = dimToScale(50, bubbleTempSize);

		console.log(circleAtMouse.scaleX);
		stage.update(event);
}

function bubbleSmaller() {
		bubbleTempSize = bubbleTempSize - 3;
		circleAtMouse.scaleX = dimToScale(50, bubbleTempSize);
		circleAtMouse.scaleY = dimToScale(50, bubbleTempSize);

		bubbleTextTempSize = bubbleTextTempSize - 3;
		textAtMouse.scaleX = dimToScale(50, bubbleTempSize);
		textAtMouse.scaleY = dimToScale(50, bubbleTempSize);
		stage.update(event);
}
/////////////////////////////////////
createjs.Ticker.on("tick", tick);
createjs.Ticker.setFPS(30);

function tick(event) {
		//滑鼠座標轉圖面座標
		childCh = pic.globalToLocal(stage.mouseX, stage.mouseY);
		///////////////////////////////////////////////////////////
		//圖面拖曳效果
		if (initDrag == false) {
				//此方法對齊圖片中心和滑鼠位置

				//定位圖片中心至滑鼠位置
				pic.regX = childCh.x;
				pic.regY = childCh.y;
				//圖片位移至滑鼠位置
				pic.x = stage.mouseX;
				pic.y = stage.mouseY;
		}
		if (initDrag == true) {
				pic.x = stage.mouseX;
				pic.y = stage.mouseY;

				console.log("X:" + pic.x);
				console.log("Y:" + pic.y);
		}
		///////////////////////////////////////////////////
		//每禎檢查是否為在泡泡圖模式
		if (bubblemode == true) {
				//泡泡球位置對其滑鼠
				circleAtMouse.x = childCh.x;
				circleAtMouse.y = childCh.y;
				textAtMouse.x = circleAtMouse.x;
				textAtMouse.y = circleAtMouse.y;
				circleAtMouse.visible = true;
				textAtMouse.visible = true;
		} else {

				circleAtMouse.x = childCh.x;
				circleAtMouse.y = childCh.y;
				textAtMouse.x = circleAtMouse.x;
				textAtMouse.y = circleAtMouse.y;
				/*
		circleAtMouse.visible = false;
		textAtMouse.visible = false;
    */
		}

		///////////////////////////////////////////////////
		//舞台更新
		stage.update(event);
		/*
    //console.log(pic.scaleX.toFixed(2));
		//console.log(pic.scaleY.toFixed(2));
		//console.log("X:"+pic.x);
		//console.log("Y:"+pic.y);
		//console.log("regX:"+pic.regX);
		//console.log("regY:"+pic.regY);
		//console.log("childCh.x:"+childCh.x);
		//console.log("childCh.y:"+childCh.y);
		//console.log("滑鼠X:"+stage.mouseX);
		//console.log("滑鼠Y:"+stage.mouseY);
    */
    //console.log("滑鼠X:"+stage.mouseX);
		//console.log("滑鼠Y:"+stage.mouseY);
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
}
/////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////
//暫存pic並轉存為另一張圖
function outputContainToImage() {
		//隱藏滑鼠泡泡球
		circleAtMouse.visible = false;
		textAtMouse.visible = false;
		// Update the stage once to show the loaded image (at its native size)
		stage.update();

		// Cache the bitmap. This is necessary to create the cache-canvas.
		pic.cache(0, 0, image.width, image.height);
		console.log(image.width + "," + image.height)
				// Note that if you update again, it will show the canvas image as blurred.
				//stage.update();

		// Get the cache-canvas's data url.
		var url = pic.getCacheDataURL();

		// Create a new image with the data url, and add it to the body.
		var img2 = new Image();
		img2.onload = function() {

		}
		img2.src = url;
		//console.log(img2.src);
		//
		//img2.download = 'download.png';
		document.body.appendChild(img2);
}

///////////////////////////////////
//計算圖片大小

function dimToScale(origDim, desiredDim) {
		return desiredDim / origDim;
}

function scaleToDim(origDim, scale) {
		return scale * origDim;
}
/////////////////////////////////////////
//變更泡泡求描邊的顏色

function changeButtonColorToRed() {
		bubbleTempStroke = "#ff1571";
		console.log("changeColor");
}

function changeButtonColorToBlue() {
		bubbleTempStroke = "#0084dd";
		console.log("changeColor");
}

function changeButtonColorToGreen() {
		bubbleTempStroke = "#0aa660";
		console.log("changeColor");
}
/////////////////////////////////////////
function outputArray(i) {
		//參考:https://www.minwt.com/pc/22105.html
		console.log(bubblenumber[i]);
		console.log(bubbleX[i]);
		console.log(bubbleY[i]);
		console.log(bubbleStroke[i]);
		console.log(bubbleFill[i]);
		console.log(bubblesize[i]);
		console.log(bubbleTextData[i]);
		console.log(bubbleTextColorData[i]);

		var outputbubblenumber = bubblenumber[i];
		var outputbubbleX = bubbleX[i];
		var outputbubbleY = bubbleY[i];
		var outputbubbleStroke = bubbleStroke[i];
		var outputbubbleFill = bubbleFill[i];
		var outputbubblesize = bubblesize[i];
		var outputbubbleTextData = bubbleTextData[i];
		var outputbubbleTextColorData = bubbleTextColorData[i];

		///////////////////////////////////////////////////
		var $a1 = outputbubblenumber,
				$a2 = outputbubbleX,
				$a3 = outputbubbleY,
				$a4 = outputbubbleStroke,
				$a5 = outputbubbleFill,
				$a6 = outputbubblesize,
				$a7 = outputbubbleTextData,
				$a8 = outputbubbleTextColorData,
				a = {};

		a = {
				data: $a1 + ',' + $a2 + ',' + $a3 + ',' + $a4 + ',' + $a5 + ',' + $a6 + ',' + $a7 + ',' + $a8,
				sheetUrl: 'https://docs.google.com/spreadsheets/d/1hGY7UzLhyNACuuBLsU3OXpTbjEimD5m9B-G7TzD3Fms/edit#gid=0',
				sheetTag: 'TEST1'
		}

		console.log(a);
		$.get('https://script.google.com/macros/s/AKfycbyzK8wIcewH_3Q9nvLFql8n3rSHrt-GqPnqJkyJdTHqdIFwf4dIaN3sz2UV0IYZn61RYQ/exec', a);

}
/////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////
/*
function addTable() {
  var myTableDiv = document.getElementById("myDynamicTable");

  var table2 = document.createElement('TABLE');
  table2.border = '1';
  table2.id = "table2Id";

  var tableBody = document.createElement('TBODY');
  table2.appendChild(tableBody);

  for (var i = 0; i < 1; i++) {
  var row = table2.insertRow(0);
  var cell0 = row.insertCell(0);
  var cell1 = row.insertCell(1);
  var cell2 = row.insertCell(2);
  var cell3 = row.insertCell(3);
  var cell4 = row.insertCell(4);
  var cell5 = row.insertCell(5);
  var cell6 = row.insertCell(6);
  var cell7 = row.insertCell(7);

  cell0.innerHTML = "bubblenumber";
  cell1.innerHTML = "bubbleX";
  cell2.innerHTML = "bubbleY";
  cell3.innerHTML = "bubbleStrokeColor";
  cell4.innerHTML = "bubbleFillColor";
  cell5.innerHTML = "bubblesize";
  cell6.innerHTML = "bubbleTextSizeData";
  cell7.innerHTML = "bubbleTextColorData";

  }
  myTableDiv.appendChild(table2);
}
addTable();
/////////////////////////////////////////////////
function AddTable2(i) {
  var table = document.getElementById("table2Id");
  
  var row = table.insertRow(i);
  var cell0 = row.insertCell(0);
  var cell1 = row.insertCell(1);
  var cell2 = row.insertCell(2);
  var cell3 = row.insertCell(3);
  var cell4 = row.insertCell(4);
  var cell5 = row.insertCell(5);
  var cell6 = row.insertCell(6);
  var cell7 = row.insertCell(7);
  
  cell0.innerHTML = bubblenumber[i];
  cell1.innerHTML = bubbleX[i].toFixed(2);
  cell2.innerHTML = bubbleY[i].toFixed(2);
  cell3.innerHTML = bubbleStroke[i];
  cell4.innerHTML = bubbleFill[i];
  cell5.innerHTML = bubblesize[i];
  cell6.innerHTML = bubbleTextData[i];
  cell7.innerHTML = bubbleTextColorData[i];
}
*/

//////////////////////////////////////////////
function findbubble(){
  //inputbubblenumber[8]
  var textTemp = document.getElementById ("textbox2");
  
  console.log(pic.numChildren);
  
  var tt = (pic.numChildren-3)/2;
  if(textTemp.value <= tt && textTemp.value > 0){
    var childByPic = pic.getChildAt(countPicChild(textTemp.value));
    childByPic.alpha = 0.7;
    childByPic.color = "red";
    childByPic.font = inputbubbleTextdata[textTemp.value] + "px Impact";
    var pt = pic.localToGlobal(childByPic.x, childByPic.y);
    pic.regX = childByPic.x;
    pic.regY = childByPic.y;
    pic.x = windowWidth / 2;
    pic.y = windowHeight / 2;
  }else{
    alert("資料輸入有誤");
  }
  //console.log("childByPic"+childByPic.x+","+childByPic.y);
  //console.log("pt"+pt.x+","+pt.y);
}
function countPicChild(i){
  var tempI ;
  //tempI = 3 + ( (i-1) * 2 ) + 1 ;
  tempI = 3 + ( (i-1) * 2 )+1  ;
  return tempI
}
