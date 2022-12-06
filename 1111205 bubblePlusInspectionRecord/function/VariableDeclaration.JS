console.log("function\VariableDeclaration.JS");

var windowWidth = window.innerWidth ||
		document.documentElement.clientWidth ||
		document.body.clientWidth;

var windowHeight = window.innerHeight ||
		document.documentElement.clientHeight ||
		document.body.clientHeight;

var canvas2 = document.getElementById("testCanvas");

var rightcheckBabblesWidth = windowWidth/10;
var rightcheckBabblesHeight = windowHeight/30;
var rightcheckGap = windowHeight/60;//按鈕與按鈕間隙
var world, worldWidth, worldHeight;
var stage = new createjs.Stage("testCanvas");

var pic = new createjs.Container();
var rightClickMenu = new createjs.Container(); //右鍵選單
var InputDimTor = new createjs.Container(); //輸入尺寸公差
InputDimTor.regX = 230;
InputDimTor.regY = 0;
InputDimTor.x = 230;
var InputDimTorMode = "number";//輸入尺寸的模式
//儲存儲存格的資料
var inputInspectionValve =[],
     inputTorTypeValve = [],
	 inputTorLevelValve = [],
	 inputInsItemValve = [],
	 inputInsLevelValve = [],
	 SamplingMethodValve = [],
	 CheckToolValve = [];
var inputInspectNownumber = 1;
var inputInspectNumber = [];//儲存個數字有無資料

stage.addChild(pic);
stage.addChild(rightClickMenu);
stage.addChild(InputDimTor);

// load the source image:
var image = new Image();

var stageWidth = windowWidth;
var stageHeight = windowHeight;

var dragType = "mouse"; //圖片滑動方式 ->預設為mouse

var backspaceMode = true;


//////////////////////////////////////////////////
// 儲存匯入的savedata資料
var inputbubbleID = [],
		inputbubblenumber = [],
		inputbubbleX = [],
		inputbubbleY = [],
		inputbubbleStroke = [],
		inputbubbleFill = [],
		inputbubblesize = [],
		inputbubbleTextdata = [],
		inputbubbleTextColorData = [],
		inputbubbleAllNumber;
var bubbleCircleInPicOrder = [],
		bubbleNumberInPicOrder = [];

///////////////////////////////////////////
var bubblemode = false; //泡泡圖點選模式(默認開啟)
var bubbleShowMode = false; //泡泡跟隨模式(默認開啟)
var bubbleX = []; //儲存滑鼠X座標之陣列
var bubbleY = []; //儲存滑鼠X座標之陣列
var bubbleID = []; //儲存泡泡圖數字座標之陣列
var bubblenumber = []; //儲存泡泡圖數字座標之陣列
var bubbleStroke = []; //儲存泡泡圖線的資料
var bubbleFill = []; //儲存泡泡圖顏色填滿的資料
var bubblesize = []; //儲存泡泡圖大小
var tempID = 1; //暫存現在按排序到第幾個數字
var tempBubbleNumber = 1; //暫存現在存到第幾個數字
var bubbleTempFill = "#ffffff"; //暫存現在的顏色
var bubbleTempStroke = "#000000"; //暫存現在描邊的顏色
var bubbleTempStrokeStyle = 3; //暫存現在描邊的寬度
var bubbleTempSize = 50; //暫存現在泡泡圖大小

var bubbleTextTempSize = 50; //暫存文字大小
var bubbleTextTempColor = "#080808"; //暫存文字顏色

var bubbleTextData = [];
var bubbleTextColorData = [];

var initDrag = false;//判定是否在拖曳模式(按下滑鼠中鍵變更)