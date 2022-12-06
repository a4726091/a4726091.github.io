//匯入尺寸公差RADIO的html的元素

function inputHtmlItem(inputArray, inputHtmlId, inputHtmlType, inputHtmlName,sheetStyleInput) {
	//const list = document.querySelector('.list');
	let content = '';

	for (let i = 0; i <= inputArray.length - 1; i++) {
		//const domString = `<p>這是總共${inputArray.length}中第${i}個元素</p>`;
		const domString2 = `<p><input type=${inputHtmlType} name=${inputHtmlName} value=${inputArray[i]} id="${inputHtmlId}${i}" data-sheetStyle = ${sheetStyleInput[i]}> ${inputArray[i]}</p>`;
		content += domString2;
		console.log(inputArray[i]);
	}

	return content;

}
//輸入公差類型
var inputTorTypeArray = ['一般板金公差-沖壓', '一般板金公差-成形', "一般板金公差-孔徑","長圓孔孔徑", "熔接公差","R角","倒角","焊接位置","焊道預留", "焊接長度"];
const inputTorTypeHtmlItem = document.querySelector('#' + 'inputTorTypeDivID'); //id前要加#

inputTorTypeHtmlItem.innerHTML = inputHtmlItem(inputTorTypeArray, "inputTorTypeHtmlItem", "radio", "inputTorTypeName","0");

//公差階級
var inputTorLevelArray = ['PTA、WTA', 'PTB、WTB', "PTC、WTC","自訂公差"];
const inputTorLevelHtmlItem = document.querySelector('#' + 'inputTorLevelDivID'); //id前要加#

inputTorLevelHtmlItem.innerHTML = inputHtmlItem(inputTorLevelArray, "inputTorLevelHtmlItem", "radio", "inputTorLevelName","0")//匯入選項 
                                 + `<p><textarea rows="5" cols="20">±3</textarea></p>` ;
//檢查方式
var inputInsItemArray = ['孔位置', '型長', "型交位置", "焊接位置", "孔徑", "R角", "倒角", "角度", "平面度", "垂直度", "焊道長度", "焊道位置", "焊道預留", "焊道預留(打磨要)", "焊道", "焊道(打磨要)", "托架位置", "NUT位置", "bolt位置", "外觀"];
//輸入自訂表格格式
var inputTorTypesheetStyle =['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'];
const inputInsItemHtmlItem = document.querySelector('#' + 'inputInsItemDivID'); //id前要加#

inputInsItemHtmlItem.innerHTML = inputHtmlItem(inputInsItemArray, "inputInsItemHtmlItem", "radio", "inputInsItemlName",inputTorTypesheetStyle)//匯入選項 
                                 + `<p><input type="radio" name="inputInsItemlName" id="inputInsItemCustom" data-sheetStyle = "1"> 自訂檢查項目(要翻譯)</p>`
                                 + `<p><textarea id="inputInsItemCustomTXT" rows="3" cols="20" value ="123" ></textarea></p>` 
                                 + `<p><input type="radio" name="inputInsItemlName" id="inputInsItemPartNO" data-sheetStyle = "2"> 誤欠品(件號)</p>`
                                 + `<p><textarea id="inputInsItemPartNOTXT" rows="3" cols="20" value ="123"></textarea></p>` ;

//輸入檢驗階級
var inputInsLevelArray = ["S", "A", "B"];
const inputInsLevelItem = document.querySelector('#' + 'inputInsLevelDivID'); //id前要加#

inputInsLevelItem.innerHTML = inputHtmlItem(inputInsLevelArray, "inputInsLevelItem", "radio", "inputInsLevelName","0");

//輸入拔取(抽樣)方式
var SamplingMethodArray = ["n=3，1回/6個月", "初品及必要時", "1回/12個月","全檢"];
const SamplingMethodItem = document.querySelector('#' + 'SamplingMethodDivID'); //id前要加#

SamplingMethodItem.innerHTML = inputHtmlItem(SamplingMethodArray, "SamplingMethodItem", "radio", "SamplingMethodName","0");

//輸入測定距
var CheckToolArray = ["游標卡尺", "捲尺", "高度規","目視","三次元","R規","鋼尺","分度計"];
var CheckToolArraysheetStyle =['1','1','1','1','1','1','1','1'];
const CheckToolItem = document.querySelector('#' + 'CheckToolDivID'); //id前要加#

CheckToolItem.innerHTML = inputHtmlItem(CheckToolArray, "CheckToolItem", "radio", "CheckToolName",CheckToolArraysheetStyle);

/////////////////////////////////////////////////////////////////////////////////////////
//檢查方式滾動效果
const inputInsItemRoll = document.querySelector('#inputInsItemDivID');
inputInsItemRoll.onwheel = inputInsItemRollFun;

function inputInsItemRollFun(event) {
	//取得現在的值
	var tempid2 = "";
	var nowI = 0;

	for(i=0;i<inputInsItemArray.length;i++){
		console.log("check");
		tempid2 = "inputInsItemHtmlItem"+ i.toString();
		if(document.getElementById(tempid2).checked == true){
			console.log("現在"+tempid2);
			nowI = i;
			break;
		}
	}

	//轉換event.deltaY
	var tempid;
	if(event.deltaY<0){
		tempid = "inputInsItemHtmlItem"+ (nowI-1).toString();
	}
	if(event.deltaY>0){
		tempid = "inputInsItemHtmlItem"+ (nowI+1).toString();
	}

	console.log("滑鼠滾動 : "+tempid);
	//document.getElementById('inputInsItemHtmlItem1').checked = true;
	document.getElementById(tempid).checked = true;
  }
/////////////////////////////////////////////////////////////////////////////////////////
//測定距滾動效果
const CheckToolRoll = document.querySelector('#CheckToolDivID');
CheckToolRoll.onwheel = CheckToolRollFun;

function CheckToolRollFun(event) {
	//取得現在的值
	var tempid2 = "";
	var nowI = 0;

	for(i=0;i<CheckToolArray.length;i++){
		console.log("check");
		tempid2 = "CheckToolItem"+ i.toString();
		if(document.getElementById(tempid2).checked == true){
			console.log("現在"+tempid2);
			nowI = i;
			break;
		}
	}

	//轉換event.deltaY
	var tempid;
	if(event.deltaY<0){
		tempid = "CheckToolItem"+ (nowI-1).toString();
	}
	if(event.deltaY>0){
		tempid = "CheckToolItem"+ (nowI+1).toString();
	}

	console.log("滑鼠滾動 : "+tempid);
	//document.getElementById('inputInsItemHtmlItem1').checked = true;
	document.getElementById(tempid).checked = true;
  }
/////////////////////////////////////////////////////////////////////////////////////////
//公差類型滾動效果
const inputTorTypeRoll = document.querySelector('#inputTorTypeDivID');
inputTorTypeRoll.onwheel = inputTorTypeRollFun;

function inputTorTypeRollFun(event) {
	//取得現在的值
	var tempid2 = "";
	var nowI = 0;

	for(i=0;i<inputTorTypeArray.length;i++){
		console.log("check");
		tempid2 = "inputTorTypeHtmlItem"+ i.toString();
		if(document.getElementById(tempid2).checked == true){
			console.log("現在"+tempid2);
			nowI = i;
			break;
		}
	}

	//轉換event.deltaY
	var tempid;
	if(event.deltaY<0){
		tempid = "inputTorTypeHtmlItem"+ (nowI-1).toString();
	}
	if(event.deltaY>0){
		tempid = "inputTorTypeHtmlItem"+ (nowI+1).toString();
	}

	console.log("滑鼠滾動 : "+tempid);
	//document.getElementById('inputInsItemHtmlItem1').checked = true;
	document.getElementById(tempid).checked = true;
  }