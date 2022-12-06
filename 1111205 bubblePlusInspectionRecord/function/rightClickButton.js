console.log("function\rightClickButton.js");

//創建右鍵選單的背景
var rightClickMenuBackground = new createjs.Shape();
rightClickMenuBackground.graphics
		.setStrokeStyle(2)
		.beginStroke("#000000")
		.beginFill("DeepSkyBlue")
		.drawRect(0, 0, rightcheckBabblesWidth*3+rightcheckGap*4, rightcheckBabblesHeight*6+rightcheckGap*7);
rightClickMenuBackground.alpha = 0.7;
rightClickMenu.addChild(rightClickMenuBackground);
//創建右鍵選單的按鈕

var rightClickFirstButton = new creatNewrightClickButton(rightClickButtonLocation("X",1), rightClickButtonLocation("Y",1), rightcheckBabblesWidth, rightcheckBabblesHeight, "#000000", "Lightyellow", bubbleBigger, "放大",rightClickMenu);
var rightClickSecondButton = new creatNewrightClickButton(rightClickButtonLocation("X",1), rightClickButtonLocation("Y",2), rightcheckBabblesWidth, rightcheckBabblesHeight, "#000000", "Lightyellow", bubbleSmaller, "縮小",rightClickMenu);
var rightClickthirdButton = new creatNewrightClickButton(rightClickButtonLocation("X",1), rightClickButtonLocation("Y",3),rightcheckBabblesWidth, rightcheckBabblesHeight, "#000000", "Lightyellow", changeButtonColorToRed, "紅色",rightClickMenu);
var rightClickfourthButton = new creatNewrightClickButton(rightClickButtonLocation("X",1), rightClickButtonLocation("Y",4), rightcheckBabblesWidth, rightcheckBabblesHeight, "#000000", "Lightyellow", changeButtonColorToBlue, "藍色",rightClickMenu);
var rightClickfifthButton = new creatNewrightClickButton(rightClickButtonLocation("X",1), rightClickButtonLocation("Y",5), rightcheckBabblesWidth, rightcheckBabblesHeight, "#000000", "Lightyellow", changeButtonColorToGreen, "綠色",rightClickMenu);
var rightClickInPutButton = new creatNewrightClickButton(rightClickButtonLocation("X",2), rightClickButtonLocation("Y",1), rightcheckBabblesWidth, rightcheckBabblesHeight, "#000000", "Lightyellow", inputSaveData, "匯入存檔",rightClickMenu);
var rightClickOutPutButton = new creatNewrightClickButton(rightClickButtonLocation("X",2), rightClickButtonLocation("Y",2), rightcheckBabblesWidth, rightcheckBabblesHeight, "#000000", "Lightyellow", outputSaveData, "匯出存檔",rightClickMenu);
var inputImgBitton = new creatNewrightClickButton(rightClickButtonLocation("X",2), rightClickButtonLocation("Y",3), rightcheckBabblesWidth, rightcheckBabblesHeight, "#000000", "Lightyellow", doNotThing, "匯入圖片",rightClickMenu);
var rightClickfindBubble = new creatNewrightClickButton(rightClickButtonLocation("X",2), rightClickButtonLocation("Y",4), rightcheckBabblesWidth, rightcheckBabblesHeight, "#000000", "Lightyellow", findbubble2, "尋找泡泡球",rightClickMenu);
var outputImg = new creatNewrightClickButton(rightClickButtonLocation("X",2), rightClickButtonLocation("Y",5), rightcheckBabblesWidth, rightcheckBabblesHeight, "#000000", "Lightyellow", outputContainToImage, "匯出成圖片",rightClickMenu);
var rightClickOkButton = new creatNewrightClickButton(rightClickButtonLocation("X",3), rightClickButtonLocation("Y",6), rightcheckBabblesWidth, rightcheckBabblesHeight, "#000000", "#ff1571", rightClickOk, "確定",rightClickMenu);
var rightClickfindBubble = new creatNewrightClickButton(rightClickButtonLocation("X",2), rightClickButtonLocation("Y",6), rightcheckBabblesWidth, rightcheckBabblesHeight, "#000000", "Lightyellow", changeNumber, "數字變更",rightClickMenu);
// 新建的domelment的座標會位於本身在html的位置上，所以一開始要設定在左上角與canvas切齊
var textarea2 = new createjs.DOMElement("textbox2");
textarea2.x = rightClickButtonLocation("X",3);
textarea2.y = rightClickButtonLocation("Y",1);
textarea2.scaleX = rightcheckBabblesWidth/80;
textarea2.scaleY = (rightcheckBabblesHeight *2 + rightcheckGap )/20;


var inputColor2 = new createjs.DOMElement("inputColor");
inputColor2.x = rightClickButtonLocation("X",1);
inputColor2.y = rightClickButtonLocation("Y",6);
inputColor2.scaleX = rightcheckBabblesWidth/80;
inputColor2.scaleY = rightcheckBabblesHeight/20;

var uploadImgLable2 = new createjs.DOMElement("uploadImgLable");
uploadImgLable2.x = rightClickButtonLocation("X",2);
uploadImgLable2.y = rightClickButtonLocation("Y",3);
uploadImgLable2.scaleX = rightcheckBabblesWidth/80;
uploadImgLable2.scaleY = rightcheckBabblesHeight/20;

var uploadTXTLable2 = new createjs.DOMElement("uploadTXTLable");
uploadTXTLable2.x = rightClickButtonLocation("X",2);
uploadTXTLable2.y = rightClickButtonLocation("Y",1);
uploadTXTLable2.scaleX = rightcheckBabblesWidth/80;
uploadTXTLable2.scaleY = rightcheckBabblesHeight/20;

rightClickMenu.addChild(textarea2);
rightClickMenu.addChild(inputColor2);
rightClickMenu.addChild(uploadImgLable2);
rightClickMenu.addChild(uploadTXTLable2);

rightClickMenu.visible = false;
stage.update();
///////////////////////////////////////////
//觸控模式下右鍵選單

var touchMenu = new createjs.Container(); //右鍵選單
stage.addChild(touchMenu);

var touchMenuBackground = new createjs.Shape();
touchMenuBackground.graphics
		.setStrokeStyle(2)
		.beginStroke("#000000")
		.beginFill("DeepSkyBlue")
		.drawRect(0, 0, rightcheckBabblesWidth*3+rightcheckGap*4, rightcheckBabblesHeight*5+rightcheckGap*6);
touchMenuBackground.alpha = 0.7;
touchMenu.addChild(touchMenuBackground);

touchMenu.x = 100;
touchMenu.y = 100;

var touchinput = new creatNewrightClickButton(rightClickButtonLocation("X",1), rightClickButtonLocation("Y",1), rightcheckBabblesWidth*3+rightcheckGap*2, rightcheckBabblesHeight, "#000000", "Lightyellow", findbubble2, "",touchMenu);

var touch9 = new creatNewrightClickButton(rightClickButtonLocation("X",3), rightClickButtonLocation("Y",2), rightcheckBabblesWidth, rightcheckBabblesHeight, "#000000", "Lightyellow", changeTouchNumberTO9, "9",touchMenu);

var touch8 = new creatNewrightClickButton(rightClickButtonLocation("X",2), rightClickButtonLocation("Y",2), rightcheckBabblesWidth, rightcheckBabblesHeight, "#000000", "Lightyellow", changeTouchNumberTO8, "8",touchMenu);

var touch7 = new creatNewrightClickButton(rightClickButtonLocation("X",1), rightClickButtonLocation("Y",2), rightcheckBabblesWidth, rightcheckBabblesHeight, "#000000", "Lightyellow", changeTouchNumberTO7, "7",touchMenu);

var touch6 = new creatNewrightClickButton(rightClickButtonLocation("X",3), rightClickButtonLocation("Y",3), rightcheckBabblesWidth, rightcheckBabblesHeight, "#000000", "Lightyellow", changeTouchNumberTO6, "6",touchMenu);

var touch5 = new creatNewrightClickButton(rightClickButtonLocation("X",2), rightClickButtonLocation("Y",3), rightcheckBabblesWidth, rightcheckBabblesHeight, "#000000", "Lightyellow", changeTouchNumberTO5, "5",touchMenu);

var touch4 = new creatNewrightClickButton(rightClickButtonLocation("X",1), rightClickButtonLocation("Y",3), rightcheckBabblesWidth, rightcheckBabblesHeight, "#000000", "Lightyellow", changeTouchNumberTO4, "4",touchMenu);

var touch3 = new creatNewrightClickButton(rightClickButtonLocation("X",3), rightClickButtonLocation("Y",4), rightcheckBabblesWidth, rightcheckBabblesHeight, "#000000", "Lightyellow", changeTouchNumberTO3, "3",touchMenu);

var touch2 = new creatNewrightClickButton(rightClickButtonLocation("X",2), rightClickButtonLocation("Y",4), rightcheckBabblesWidth, rightcheckBabblesHeight, "#000000", "Lightyellow", changeTouchNumberTO2, "2",touchMenu);

var touch1 = new creatNewrightClickButton(rightClickButtonLocation("X",1), rightClickButtonLocation("Y",4), rightcheckBabblesWidth, rightcheckBabblesHeight, "#000000", "Lightyellow", changeTouchNumberTO1, "1",touchMenu);

var touch0 = new creatNewrightClickButton(rightClickButtonLocation("X",1), rightClickButtonLocation("Y",5), rightcheckBabblesWidth, rightcheckBabblesHeight, "#000000", "Lightyellow", changeTouchNumberTO0, "0",touchMenu);

var touchback = new creatNewrightClickButton(rightClickButtonLocation("X",2), rightClickButtonLocation("Y",5), rightcheckBabblesWidth, rightcheckBabblesHeight, "#000000", "Lightyellow", changeTouchNumberBack, "<-",touchMenu);

var touchDelAll = new creatNewrightClickButton(rightClickButtonLocation("X",3), rightClickButtonLocation("Y",5), rightcheckBabblesWidth, rightcheckBabblesHeight, "#000000", "Lightyellow", touchDelAllButton, "C",touchMenu);

var touchCoverground = new createjs.Shape();
touchCoverground.graphics
		.beginStroke("#000000")
		.beginFill("DeepSkyBlue")
		.drawRect(rightClickButtonLocation("X",1), rightClickButtonLocation("Y",1), rightcheckBabblesWidth*3+rightcheckGap*2, rightcheckBabblesHeight*5+rightcheckGap*4);
touchMenu.addChild(touchCoverground);

var touchinputSaveData = new creatNewrightClickButton(rightClickButtonLocation("X",1), rightClickButtonLocation("Y",1), rightcheckBabblesWidth*3+rightcheckGap*2, rightcheckBabblesHeight*5+rightcheckGap*4, "#000000", "Lightyellow", touchDelAllButton, "上傳資料",touchMenu);

var uploadTXTLable3 = new createjs.DOMElement("uploadTXTLable2");
uploadTXTLable3.x = rightClickButtonLocation("X",1);
uploadTXTLable3.y = rightClickButtonLocation("Y",1);
uploadTXTLable3.scaleX = rightcheckBabblesWidth*3+rightcheckGap*2/80;
uploadTXTLable3.scaleY =rightcheckBabblesHeight*5+rightcheckGap*4/20;
touchMenu.addChild(uploadTXTLable3);

//隱藏選單
touchMenu.visible = false;

stage.update();