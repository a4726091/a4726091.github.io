//輸入尺寸公差

// 新建的domelment的座標會位於本身在html的位置上，所以一開始要設定在左上角與canvas切齊
//匯入規格
var inputInspection = new createjs.DOMElement("inputInspection");
inputInspection.x = 0;
inputInspection.y = 0;
InputDimTor.addChild(inputInspection);

//匯入公差類型
var inputTorType = new createjs.DOMElement("inputTorTypeDivID");
inputTorType.x = 30000;
inputTorType.y = 0;
InputDimTor.addChild(inputTorType);


var inputTorLevel = new createjs.DOMElement("inputTorLevelDivID");
inputTorLevel.x = 30000;
inputTorLevel.y = 0;
inputTorLevel.Visible = true;

InputDimTor.addChild(inputTorLevel);

//匯入其他類型
var inputInsItem = new createjs.DOMElement("inputInsItemDivID");
inputInsItem.x = 30000;
inputInsItem.y = 0;
InputDimTor.addChild(inputInsItem);

var inputInsLevel = new createjs.DOMElement("inputInsLevelDivID");
inputInsLevel.x = 30000;
inputInsLevel.y = 0;
InputDimTor.addChild(inputInsLevel);

var SamplingMethod = new createjs.DOMElement("SamplingMethodDivID");
SamplingMethod.x = 30000;
SamplingMethod.y = 300;
InputDimTor.addChild(SamplingMethod);

var CheckTool = new createjs.DOMElement("CheckToolDivID");
CheckTool.x = 30000;
CheckTool.y = 900;
InputDimTor.addChild(CheckTool);

var checkButtonItem = new createjs.DOMElement("checkButtonDivID");
checkButtonItem.x = 230;
checkButtonItem.y = 200;
InputDimTor.addChild(checkButtonItem);

var nextNumber = new createjs.DOMElement("nextNumberID");
nextNumber.x = 230;
nextNumber.y = 250;
InputDimTor.addChild(nextNumber);

var inputSaveDATA = new createjs.DOMElement("ppicTXT3");
inputSaveDATA.x = 230;
inputSaveDATA.y = 300;
InputDimTor.addChild(inputSaveDATA);




//移動表單按鈕
var controlFormLocation = new createjs.DOMElement("controlFormLocationDiv");
var controlFormLocationStyle = document.querySelector('.color-lump');
controlFormLocation.x = 230;
controlFormLocation.y = 0;
stage.addChild(controlFormLocation);

//切換為數字輸入按鈕
var changeToinputInspection = new createjs.DOMElement("changeToinputInspectionDivID");
var changeToinputInspectionStyle = document.querySelector('.color-lump');
changeToinputInspection.x = 230;
changeToinputInspection.y = 50;
InputDimTor.addChild(changeToinputInspection);

//切換為公差輸入按鈕
var changeToinputTor = new createjs.DOMElement("changeToinputTorDivID");
var changeToinputTorStyle = document.querySelector('.color-lump');
changeToinputTor.x = 230;
changeToinputTor.y = 100;
InputDimTor.addChild(changeToinputTor);

//切換為其他項輸入按鈕
var changeToinputIns = new createjs.DOMElement("changeToinputInsDivID");
var changeToinputInsStyle = document.querySelector('.color-lump');
changeToinputIns.x = 230;
changeToinputIns.y = 150;
InputDimTor.addChild(changeToinputIns);








//DOMElement 實例不是完整的 EaselJS 顯示對象，
//不參與 EaselJS 鼠標事件或支持 hitTest 等方法。要從 DOMElement 獲取鼠標事件，
//您必須向 htmlElement 添加處理程序（注意，這不支持 EventDispatcher）

//按下移動表單按鈕
var controlFormLocationMode = false; //設定表單移動模式
controlFormLocation.htmlElement.onclick = function() {
	console.log("onclick");
	if (controlFormLocationMode == true) {
		controlFormLocationMode = false;
		controlFormLocationStyle.style.border = "5px solid green";
		console.log("green");
	} else { //開啟表單移動模式
		controlFormLocationMode = true;
		controlFormLocationStyle.style.border = "5px solid red";
		/*
		InputDimTor.regX = 230;
		InputDimTor.regY = 0;
		*/

		controlFormLocation.regX = 15;
		controlFormLocation.regY = 15;
		console.log("red");
	}
}

//按下數字輸入按鈕
changeToinputInspection.htmlElement.onclick = function() {
	InputDimTorMode = "number";
	console.log("數字輸入");
	///////////////////////////////////
	InputDimTor.regX = 230;
	InputDimTor.regY = 0;


	/////////////////////////////////

	inputInspection.x = 0;
	inputInspection.y = 0;
	/////////////////////////
	inputTorType.x = 30000;
	inputTorType.y = 0;

	inputTorLevel.x = 30000;
	inputTorLevel.y = 300;
	/////////////////////////

	inputInsItem.x = 30000;
	inputInsItem.y = 30000;

	inputInsLevel.x = 30000;
	inputInsLevel.y = 30000;

	SamplingMethod.x = 30000;
	SamplingMethod.y = 30000;

	CheckTool.x = 30000;
	CheckTool.y = 30000;
	/////////////////////////
	//移動按鈕
	checkButtonItem.x = 230;
	controlFormLocation.regX = 0;
	controlFormLocation.regY = 0;
	controlFormLocation.x = InputDimTor.x;

	changeToinputInspection.x = 230;
	changeToinputTor.x = 230;
	changeToinputIns.x = 230;
	nextNumber.x = 230;
	inputSaveDATA.x = 230;

}

//按下公差輸入按鈕
changeToinputTor.htmlElement.onclick = function() {
	InputDimTorMode = "Tor";
	console.log("公差輸入");
	///////////////////////////////////
	InputDimTor.regX = 230;
	InputDimTor.regY = 0;


	/////////////////////////////////

	inputInspection.x = 30000;
	inputInspection.y = 0;
	/////////////////////////
	inputTorType.x = 0;
	inputTorType.y = 0;

	inputTorLevel.x = 0;
	inputTorLevel.y = 250;
	/////////////////////////
	inputInsItem.x = 30000;
	inputInsItem.y = 30000;

	inputInsLevel.x = 30000;
	inputInsLevel.y = 30000;

	SamplingMethod.x = 30000;
	SamplingMethod.y = 30000;

	CheckTool.x = 30000;
	CheckTool.y = 30000;
	/////////////////////////
	//移動按鈕
	checkButtonItem.x = 230;
	controlFormLocation.regX = 0;
	controlFormLocation.regY = 0;
	controlFormLocation.x = InputDimTor.x;

	changeToinputInspection.x = 230;
	changeToinputTor.x = 230;
	changeToinputIns.x = 230;
	nextNumber.x = 230;
	inputSaveDATA.x = 230;



}

//按下其他項輸入按鈕
changeToinputIns.htmlElement.onclick = function() {
	InputDimTorMode = "other";
	console.log("其他項輸入");
	///////////////////////////////////
	InputDimTor.regX = 500;
	InputDimTor.regY = 0;


	/////////////////////////////////
	inputInspection.x = 30000;
	inputInspection.y = 0;
	/////////////////////////
	inputTorType.x = 30000;
	inputTorType.y = 0;

	inputTorLevel.x = 30000;
	inputTorLevel.y = 150;
	/////////////////////////
	inputInsItem.x = 0;
	inputInsItem.y = 0;

	inputInsLevel.x = 250;
	inputInsLevel.y = 0;

	SamplingMethod.x = 250;
	SamplingMethod.y = 80;

	CheckTool.x = 250;
	CheckTool.y = 300;

	////////////////////////////////////
	//移動按鈕
	checkButtonItem.x = 500;
	controlFormLocation.regX = 0;
	controlFormLocation.regY = 0;
	controlFormLocation.x = InputDimTor.x;

	changeToinputInspection.x = 500;
	changeToinputTor.x = 500;
	changeToinputIns.x = 500;
	nextNumber.x = 500;
	inputSaveDATA.x = 500;

}

//按下確認按鈕
checkButtonItem.htmlElement.onclick = function() {
	inputDATAonCheck();
}

function inputDATAonCheck(){
	inputInspectNownumber = parseInt(document.getElementById("nextNumberTextID").value,10);
	//移動表格到輸入的位置
	var rowNumber = inputInspectNownumber - 1; // 輸入的行數要減1才對應到tbody中的行索引
    var tbody = document.querySelector("#oTable tbody");
    var row = tbody.rows[rowNumber];
    row.scrollIntoView({
		behavior: "smooth",
		block: "end",
		inline: "nearest",
	  });
	
	console.log(inputInspectNumber[inputInspectNownumber]);
	
	//數字輸入
	if (InputDimTorMode == "number") {
		if(document.getElementById("inputNovalHoleid").value != ""){
			document.getElementById('oTable').rows[inputInspectNownumber].cells[3].innerText = document.getElementById("inputNovalHoleid").value;
			inputInspectionValve[inputInspectNownumber] = document.getElementById("inputNovalHoleid").value;//儲存數字資料
			document.getElementById('oTable').rows[inputInspectNownumber].cells[9].innerText = "1";
		}
		if(document.getElementById("inputNumberID").value != ""){
			document.getElementById('oTable').rows[inputInspectNownumber].cells[3].innerText = document.getElementById("inputNumberID").value;
			inputInspectionValve[inputInspectNownumber] = document.getElementById("inputNumberID").value;//儲存數字資料
			document.getElementById('oTable').rows[inputInspectNownumber].cells[9].innerText = "1";
		}
		if(document.getElementById("inputNotNumber").value != ""){
			document.getElementById('oTable').rows[inputInspectNownumber].cells[3].innerText = document.getElementById("inputNotNumber").value;
			inputInspectionValve[inputInspectNownumber] = document.getElementById("inputNotNumber").value;//儲存數字資料
			document.getElementById('oTable').rows[inputInspectNownumber].cells[9].innerText = "2";
		}

		

		document.getElementById("inputNovalHoleid").value ="";
		document.getElementById("inputNumberID").value ="";
		document.getElementById("inputNotNumber").value ="";

		//document.getElementById("inputNumberID").focus = true;
		const inputNumberFocus = document.getElementById("inputNumberID");
        inputNumberFocus.focus();
		   


	}
	//公差輸入
	if (InputDimTorMode == "Tor") {

		//公差的設定要正規化
		//分界
		//公差數=分界數-1
		//設定公差界線，Stamp沖壓公差，Form成型公差
		var torSheetMetalDivide = [0,6,30,120,400,1000,2000];
		var torStampPTA=["±0.05","±0.1","±0.15","±0.2","±0.3","±0.5"],
		    torStampPTB=["±0.1","±0.2","±0.3","±0.5","±0.8","±1.2"],
			torStampPTC=["±0.3","±0.5","±0.8","±1.2","±2","±3"],
			torFormPTA=["±0.1","±0.2","±0.3","±0.5","±0.8","±1.2"],
		    torFormPTB=["±0.3","±0.5","±0.8","±1.2","±2","±3"],
			torFormPTC=["±0.5","±1","±1.5","±2.5","±4","±6"];
		//設定熔接公差
		var torWeldingLengthlDivide = [3,30,120,400,1000,2000,4000,8000];
			var torWeldingLengthWTA=["±0.5","±0.5","±0.7","±1","±1.5","±2","±2.5"],
				torWeldingLengthWTB=["±1","±1","±1.5","±2","±3","±4","±5"],
				torWeldingLengthWTC=["±1","±2","±2","±3","±4","±5","±8"];
	    //設定熔接公差
		var torWeldAnglelDivide = [400,1000];
		var torWeldAngleWTA=["±0°20'","±0°15'","±0°10'"],
			torWeldAngleWTB=["±0°45'","±0°30'","±0°20'"],
			torWeldAngleWTC=["±1'","±0°45'","±0°30'"];

		//設定孔徑公差
		var torholeSizeDivide = [3,6,30,120,400];
		var torholeSizePTA=['="+0.15"&CHAR(10)&"-0"','="+0.3"&CHAR(10)&"-0"',"'±0.15","±0.2"],
			torholeSizePTB=['="+0.3"&CHAR(10)&"-0"','="+0.5"&CHAR(10)&"-0"',"±0.5"],
			torholeSizePTC=['="+0.5"&CHAR(10)&"-0"','="+0.7"&CHAR(10)&"-0"',"±0.8","±1.2"];

		//設定R角公差
		var torRSizeDivide = [0,10,3000];
		var torRSizePTA=['="+2"&CHAR(10)&"-1"',"±2"];

		var tempOutputTor="";

		if(getRadioVavle("inputTorTypeName").value == '一般板金公差-沖壓'){
			if(getRadioVavle("inputTorLevelName").value == 'PTA、WTA'){
				console.log("一般板金公差-沖壓 : PTA、WTA");
				
				tempOutputTor = CalculationTolerance(inputInspectionValve[inputInspectNownumber],torSheetMetalDivide,torStampPTA);
				document.getElementById('oTable').rows[inputInspectNownumber].cells[4].innerText = tempOutputTor;

			}
			if(getRadioVavle("inputTorLevelName").value == 'PTB、WTB'){
				console.log("一般板金公差-沖壓 : PTB、WTB");

				tempOutputTor = CalculationTolerance(inputInspectionValve[inputInspectNownumber],torSheetMetalDivide,torStampPTB);
				document.getElementById('oTable').rows[inputInspectNownumber].cells[4].innerText = tempOutputTor;

			}
			if(getRadioVavle("inputTorLevelName").value == 'PTC、WTC'){
				console.log("一般板金公差-沖壓 : PTC、WTC");

				tempOutputTor = CalculationTolerance(inputInspectionValve[inputInspectNownumber],torSheetMetalDivide,torStampPTC);
				document.getElementById('oTable').rows[inputInspectNownumber].cells[4].innerText = tempOutputTor;

			}
		}

		if(getRadioVavle("inputTorTypeName").value == '一般板金公差-成形'){
			if(getRadioVavle("inputTorLevelName").value == 'PTA、WTA'){
				console.log("一般板金公差-成形 : PTA、WTA");

				tempOutputTor = CalculationTolerance(inputInspectionValve[inputInspectNownumber],torSheetMetalDivide,torFormPTA);
				document.getElementById('oTable').rows[inputInspectNownumber].cells[4].innerText = tempOutputTor;

			}
			if(getRadioVavle("inputTorLevelName").value == 'PTB、WTB'){
				console.log("一般板金公差-成形 : PTB、WTB");

				tempOutputTor = CalculationTolerance(inputInspectionValve[inputInspectNownumber],torSheetMetalDivide,torFormPTB);
				document.getElementById('oTable').rows[inputInspectNownumber].cells[4].innerText = tempOutputTor;

			}
			if(getRadioVavle("inputTorLevelName").value == 'PTC、WTC'){
				console.log("一般板金公差-成形 : PTC、WTC");

				tempOutputTor = CalculationTolerance(inputInspectionValve[inputInspectNownumber],torSheetMetalDivide,torFormPTC);
				document.getElementById('oTable').rows[inputInspectNownumber].cells[4].innerText = tempOutputTor;

			}
		}

		if(getRadioVavle("inputTorTypeName").value == '一般板金公差-孔徑'){
			if(getRadioVavle("inputTorLevelName").value == 'PTA、WTA'){
				tempOutputTor = CalculationTolerance(inputInspectionValve[inputInspectNownumber],torholeSizeDivide,torholeSizePTA);
				document.getElementById('oTable').rows[inputInspectNownumber].cells[4].innerText = tempOutputTor;
				console.log("一般板金公差-孔徑 : PTA、WTA");

			}
			if(getRadioVavle("inputTorLevelName").value == 'PTB、WTB'){
				tempOutputTor = CalculationTolerance(inputInspectionValve[inputInspectNownumber],torholeSizeDivide,torholeSizePTB);
				document.getElementById('oTable').rows[inputInspectNownumber].cells[4].innerText = tempOutputTor;
				console.log("一般板金公差-孔徑 : PTB、WTB");

			}
			if(getRadioVavle("inputTorLevelName").value == 'PTC、WTC'){
				tempOutputTor = CalculationTolerance(inputInspectionValve[inputInspectNownumber],torholeSizeDivide,torholeSizePTC);
				document.getElementById('oTable').rows[inputInspectNownumber].cells[4].innerText = tempOutputTor;
				console.log("一般板金公差-孔徑 : PTC、WTC");

			}
		}

		if(getRadioVavle("inputTorTypeName").value == '長圓孔孔徑'){
			if(getRadioVavle("inputTorLevelName").value == 'PTA、WTA'){
				console.log("長圓孔孔徑 : PTA、WTA");
				document.getElementById('oTable').rows[inputInspectNownumber].cells[4].innerText = '="+0.3"&CHAR(10)&"-0"';

			}
			if(getRadioVavle("inputTorLevelName").value == 'PTB、WTB'){
				console.log("長圓孔孔徑 : PTB、WTB");
				document.getElementById('oTable').rows[inputInspectNownumber].cells[4].innerText = '="+0.5"&CHAR(10)&"-0"';

			}
			if(getRadioVavle("inputTorLevelName").value == 'PTC、WTC'){
				console.log("長圓孔孔徑 : PTC、WTC");
				document.getElementById('oTable').rows[inputInspectNownumber].cells[4].innerText = '="+0.7"&CHAR(10)&"-0"';

			}
		}

		if(getRadioVavle("inputTorTypeName").value == '熔接公差'){
			if(getRadioVavle("inputTorLevelName").value == 'PTA、WTA'){
				console.log("熔接公差 : PTA、WTA");

				tempOutputTor = CalculationTolerance(inputInspectionValve[inputInspectNownumber],torWeldingLengthlDivide,torWeldingLengthWTA);
				document.getElementById('oTable').rows[inputInspectNownumber].cells[4].innerText = tempOutputTor;

			}
			if(getRadioVavle("inputTorLevelName").value == 'PTB、WTB'){
				console.log("熔接公差 : PTB、WTB");

				tempOutputTor = CalculationTolerance(inputInspectionValve[inputInspectNownumber],torWeldingLengthlDivide,torWeldingLengthWTB);
				document.getElementById('oTable').rows[inputInspectNownumber].cells[4].innerText = tempOutputTor;

			}
			if(getRadioVavle("inputTorLevelName").value == 'PTC、WTC'){
				console.log("熔接公差 : PTC、WTC");

				tempOutputTor = CalculationTolerance(inputInspectionValve[inputInspectNownumber],torWeldingLengthlDivide,torWeldingLengthWTC);
				document.getElementById('oTable').rows[inputInspectNownumber].cells[4].innerText = tempOutputTor;

			}
		}

		if(getRadioVavle("inputTorTypeName").value == 'R角'){
			console.log("R角");

			tempOutputTor = CalculationTolerance(inputInspectionValve[inputInspectNownumber],torRSizeDivide,torRSizePTA);
			document.getElementById('oTable').rows[inputInspectNownumber].cells[4].innerText = tempOutputTor;
			
		}

		if(getRadioVavle("inputTorTypeName").value == '倒角'){
			console.log("倒角");
			document.getElementById('oTable').rows[inputInspectNownumber].cells[4].innerText = "±3";
			
		}

		if(getRadioVavle("inputTorTypeName").value == '焊接位置'){
			console.log("焊接位置");
			var tempAA = (parseInt(inputInspectionValve[inputInspectNownumber],10)*0.20).toFixed(1);
			document.getElementById('oTable').rows[inputInspectNownumber].cells[4].innerText = "±"+tempAA;			
		}

		if(getRadioVavle("inputTorTypeName").value == '焊道預留'){
			console.log("焊道預留");
			document.getElementById('oTable').rows[inputInspectNownumber].cells[4].innerText = "±3";
			
		}

		if(getRadioVavle("inputTorTypeName").value == '焊接長度'){
			console.log("焊接長度");
			console.log("焊接位置");
			var tempAA = (parseInt(inputInspectionValve[inputInspectNownumber],10)*0.20).toFixed(1);
			document.getElementById('oTable').rows[inputInspectNownumber].cells[4].innerText = '="+'+tempAA+'"&CHAR(10)&"-0"';	
			
		}
		if(getRadioVavle("inputTorLevelName").value == '自訂公差'){
			
			document.getElementById('oTable').rows[inputInspectNownumber].cells[4].innerText = document.getElementById('inputCustomToleranceTextareaID').value;
		}
		if(getRadioVavle("inputTorLevelName").value == '自訂上下限公差'){

			document.getElementById('oTable').rows[inputInspectNownumber].cells[4].innerText = `="+${document.getElementById('inputCustomToleranceTextUPID').value}"&CHAR(10)&"-${document.getElementById('inputCustomToleranceTextDOWNID').value}"`;
		}
		
	}
	//其他項輸入
	if (InputDimTorMode == "other") {

			document.getElementById('oTable').rows[inputInspectNownumber].cells[1].innerText = getRadioVavle("inputInsItemlName").value;
			document.getElementById('oTable').rows[inputInspectNownumber].cells[2].innerText = getRadioVavle("CheckToolName").value;
			document.getElementById('oTable').rows[inputInspectNownumber].cells[5].innerText = getRadioVavle("inputInsLevelName").value;
			document.getElementById('oTable').rows[inputInspectNownumber].cells[6].innerText = getRadioVavle("SamplingMethodName").value;

			if(getRadioVavle("inputInsItemlName").id == "inputInsItemCustom"){
				document.getElementById('oTable').rows[inputInspectNownumber].cells[1].innerText = document.getElementById('inputInsItemCustomTXT').value;
			}
			if(getRadioVavle("inputInsItemlName").id == "inputInsItemPartNO"){
				document.getElementById('oTable').rows[inputInspectNownumber].cells[1].innerText =document.getElementById('inputInsItemPartNOTXT').value;
			}






			//var data123 = document.querySelector('#inputInsItemHtmlItem2').dataset;
			var outputStyle2 = getRadioVavle("inputInsItemlName").dataset;
			var outputStyle3 = getRadioVavle("CheckToolName").dataset;
			//console.log(data123);
            //console.log(data123.sheetstyle);
			document.getElementById('oTable').rows[inputInspectNownumber].cells[7].innerText = outputStyle2.sheetstyle;
			document.getElementById('oTable').rows[inputInspectNownumber].cells[8].innerText = outputStyle3.sheetstyle;
			//console.log(document.getElementById("inputInsItemHtmlItem2").sheetStyle)

			console.log(getRadioVavle("inputInsItemlName").value);
	        console.log(getRadioVavle("inputInsLevelName").value);
	        console.log(getRadioVavle("SamplingMethodName").value);
	        console.log(getRadioVavle("CheckToolName").value);
			document.getElementById('inputInsItemCustomTXT').value = "";
			document.getElementById('inputInsItemPartNOTXT').value ="";

	}


    

	inputInspectNumber[inputInspectNownumber] = parseInt(document.getElementById("nextNumberTextID").value,10);

	inputInspectNownumber = inputInspectNownumber + 1;
	document.getElementById("nextNumberTextID").value = inputInspectNownumber;
	
	findbubble2();//***尋找下一個泡泡求數字***

}


//取得RADIO的值的FUNCTION
function getRadioVavle(radioName) {
	var Total_Obj = document.getElementsByName(radioName);
	var Str = "";
	for (var i = 0; i < Total_Obj.length; i++) {

		//console.log(Total_Obj[i].value);
		if (Total_Obj[i].checked) {
			if (Str == "") {
				Str = Total_Obj[i];
			} else {
				Str += Total_Obj[i];
			}
		}

	}
	return Str;

};


function changeNotNumberValve(inputidVavle){

	document.getElementById("inputNotNumber").value = inputidVavle;
	document.getElementById("inputNumberID").value ="";
	//console.log(this);
}

//計算公差
function CalculationTolerance(inputNumber,inputTorDivideArrary,inputTorArrary){
	inputTorDivideArrary.length
	for(i=1;i<=inputTorDivideArrary.length;i++){
		
		if( parseInt(inputNumber,10)>=inputTorDivideArrary[i-1] && parseInt(inputNumber,10)<inputTorDivideArrary[i]){
			console.log(parseInt(inputNumber,10)+" : "+inputTorArrary[i]);
			return (inputTorArrary[i-1]);
		}

	}
}



  

stage.update();