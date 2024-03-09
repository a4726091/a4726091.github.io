//匯入尺寸公差RADIO的html的元素

function inputHtmlItem(inputArray, inputHtmlId, inputHtmlType, inputHtmlName,sheetStyleInput) {
	//const list = document.querySelector('.list');
	let content = '';

	for (let i = 0; i <= inputArray.length - 1; i++) {
		//const domString = `<p>這是總共${inputArray.length}中第${i}個元素</p>`;
		const domString2 = `<p><input type=${inputHtmlType} name=${inputHtmlName} value=${inputArray[i]} id="${inputHtmlId}${i}" data-sheetStyle = ${sheetStyleInput[i]}> <label for="${inputHtmlId}${i}" class = "labelclassAll">${inputArray[i]}</label></p>`;
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
                                 + `<p><textarea id="inputCustomToleranceTextareaID" rows="2" cols="20">±3</textarea></p>`
								 +`<p><input type="radio" name="inputTorLevelName" value="自訂上下限公差" id="inputCustomTorUPDownID" data-sheetStyle = "0"> 自訂上下限公差 </p>`
								 +  `<p><textarea id="inputCustomToleranceTextUPID" rows="1" cols="20">0.7</textarea></p>`
								 +  `<p><textarea id="inputCustomToleranceTextDOWNID" rows="1" cols="20">0</textarea></p>` ;
//檢查方式
var inputInsItemArray = ['孔位置', '型長', "型交位置", "焊接位置", "孔徑", "R角", "倒角", "角度", "平面度", "垂直度", "焊道長度", "焊道位置", "焊道預留", "焊道預留(打磨要)", "焊道", "焊道(打磨要)", "托架位置", "NUT位置", "bolt位置", "外觀"];
//輸入自訂表格格式
var inputTorTypesheetStyle =['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'];
const inputInsItemHtmlItem = document.querySelector('#' + 'inputInsItemDivID'); //id前要加#

inputInsItemHtmlItem.innerHTML = inputHtmlItem(inputInsItemArray, "inputInsItemHtmlItem", "radio", "inputInsItemlName",inputTorTypesheetStyle)//匯入選項 
                                 + `<p><input type="radio" name="inputInsItemlName" id="inputInsItemCustom" data-sheetStyle = "1"> 自訂檢查項目(要翻譯)</p>`
                                 + `<p><input id="inputInsItemCustomTXT" style="width:160px;height:40px;" value ="" ></input></p>` 
								 //<p><input id="inputNumberID" type="text" value="" style="width:80px;height:40px;"></p>
                                 + `<p><input type="radio" name="inputInsItemlName" id="inputInsItemPartNO" data-sheetStyle = "2"> 誤欠品(件號)</p>`
                                 + `<p><input id="inputInsItemPartNOTXT" style="width:160px;height:40px;" value =""></input></p>` ;



//輸入檢驗階級
var inputInsLevelArray = ["S", "A", "B"];
const inputInsLevelItem = document.querySelector('#' + 'inputInsLevelDivID'); //id前要加#

inputInsLevelItem.innerHTML = inputHtmlItem(inputInsLevelArray, "inputInsLevelItem", "radio", "inputInsLevelName","0");

//輸入拔取(抽樣)方式
var SamplingMethodArray = ["n=3，1回/6個月","n=3，每批", "初品及必要時", "1回/12個月","首件檢查","首、末件檢查","首、中末件檢查","全檢","下線時作業者全檢"];
const SamplingMethodItem = document.querySelector('#' + 'SamplingMethodDivID'); //id前要加#

SamplingMethodItem.innerHTML = inputHtmlItem(SamplingMethodArray, "SamplingMethodItem", "radio", "SamplingMethodName","0");

//輸入測定距
var CheckToolArray = ["游標卡尺", "捲尺或鋼尺", "高度規","目視","三次元","R規","分度計"];
var CheckToolArraysheetStyle =['1','1','1','1','1','1','1'];
const CheckToolItem = document.querySelector('#' + 'CheckToolDivID'); //id前要加#

CheckToolItem.innerHTML = inputHtmlItem(CheckToolArray, "CheckToolItem", "radio", "CheckToolName",CheckToolArraysheetStyle);

/////////////////////////////////////////////////////////////////////////////////////////
//公差類型滾動效果
const inputTorTypeRoll = document.querySelector('#inputTorTypeDivID');
//inputTorTypeRoll.onwheel = inputTorTypeRollFun;
inputTorTypeRoll.onwheel = function(event) {
    RollChangeRadioFun(event,inputTorTypeArray,"inputTorTypeHtmlItem");
};
boldFont("inputTorTypeName");
/////////////////////////////////////////////////////////////////////////////////////////
//公差階級滾動效果
const inputTorLevelRoll = document.querySelector('#inputTorLevelDivID');
//inputTorTypeRoll.onwheel = inputTorTypeRollFun;
inputTorLevelRoll.onwheel = function(event) {
    RollChangeRadioFun(event,inputTorLevelArray,"inputTorLevelHtmlItem");
};

boldFont("inputTorLevelName");
/////////////////////////////////////////////////////////////////////////////////////////
//檢查方式滾動效果
const inputInsItemRoll = document.querySelector('#inputInsItemDivID');
//inputInsItemRoll.onwheel = inputInsItemRollFun;
inputInsItemRoll.onwheel = function(event) {
    RollChangeRadioFun(event,inputInsItemArray,"inputInsItemHtmlItem");
};
boldFont("inputInsItemlName");
/////////////////////////////////////////////////////////////////////////////////////////
//檢驗階級滾動效果
const inputInsLevelRoll = document.querySelector('#inputInsLevelDivID');
//inputInsItemRoll.onwheel = inputInsItemRollFun;
inputInsLevelRoll.onwheel = function(event) {
    RollChangeRadioFun(event,inputInsLevelArray, "inputInsLevelItem");
};
boldFont("inputInsLevelName");
/////////////////////////////////////////////////////////////////////////////////////////
//拔取(抽樣)方式滾動效果
const SamplingMethodRoll = document.querySelector('#SamplingMethodDivID');
//inputInsItemRoll.onwheel = inputInsItemRollFun;
SamplingMethodRoll.onwheel = function(event) {
    RollChangeRadioFun(event,SamplingMethodArray, "SamplingMethodItem");
};
boldFont("SamplingMethodName");
/////////////////////////////////////////////////////////////////////////////////////////
//測定距滾動效果
const CheckToolRoll = document.querySelector('#CheckToolDivID');
//CheckToolRoll.onwheel = CheckToolRollFun;
CheckToolRoll.onwheel = function(event) {
    RollChangeRadioFun(event,CheckToolArray,"CheckToolItem");
};
boldFont("CheckToolName");


  /////////////////////////////////////////////////////////////////////////////////////////
//下一個數字輸入滾動效果
const nextNumberTextRoll = document.getElementById("nextNumberTextID");
nextNumberTextRoll.onwheel = nextNumberTextRollRollFun;

function nextNumberTextRollRollFun(event) {
	//console.log("event.deltaY"+event.deltaY);

	var tempNum =0;

	if(event.deltaY<0){
		tempNum = 1;
	}
	if(event.deltaY>0){
		tempNum = -1;
	}

	tempNum = parseInt(document.getElementById("nextNumberTextID").value,10)+tempNum;

    if(document.getElementById("nextNumberTextID").value>0){
		document.getElementById("nextNumberTextID").value = tempNum;
	}
	if(document.getElementById("nextNumberTextID").value == 0){
		document.getElementById("nextNumberTextID").value = 1;
	}

	findbubble2();//***尋找下一個泡泡求數字***
	

	console.log("tempNum"+tempNum);




  }


////////////////////////////////////////////////////////////////////////////////////////
//滾動效果的function
function RollChangeRadioFun(event,inputArray,inputHtmlId) {
	//取得現在的值
	var tempid2 = "";
	var nowI = 0;

	for(i=0;i<inputArray.length;i++){
		console.log("check");
		tempid2 = inputHtmlId.toString()+ i.toString();
		if(document.getElementById(tempid2).checked == true){
			console.log("現在"+tempid2);
			nowI = i;
			break;
		}
	}
	//轉換event.deltaY
	var tempid;
	if(event.deltaY<0){
		tempid = inputHtmlId.toString()+ (nowI-1).toString();
	}
	if(event.deltaY>0){
		tempid = inputHtmlId.toString()+ (nowI+1).toString();
	}

	console.log("滑鼠滾動 : "+tempid);
	
	document.getElementById(tempid).checked = true;
	const radios123 = document.getElementById(tempid);
	//判斷選用的RADIOBUTTION(點選檢查方式的RADIOBUTTION時會變更建議的檢驗階級、拔取(抽樣)方式、測定距function)
	checkRadioOutPutValve(radios123.value);

	//變更字體
	// 取得所有名稱為 name 的 label
	const labels = document.querySelectorAll(`.labelclassAll`);
	//將所有LEBEL便為細體
	for (let i = 0; i < labels.length; i++) {
		labels[i].style.fontWeight = "normal";
	}
	// 將選中的 radio button 對應的 label 的字體設為粗體
	document.getElementById(tempid).labels[0].style.fontWeight = "bold";
  }
///////////////////////////////////////////////
//點選radio時標籤的字體加粗的function
function boldFont(name) {
	// 取得所有名稱為 name 的 radio button
	const radios = document.getElementsByName(name);
  
	// 遍歷所有 radio button
	for (let i = 0; i < radios.length; i++) {
	  // 註冊 radio button 的 change 事件
	  radios[i].addEventListener("change", function() {
		// 取得所有名稱為 name 的 label
		const labels = document.querySelectorAll(`.labelclassAll`);
		//將所有LEBEL便為細體
		for (let i = 0; i < labels.length; i++) {
			labels[i].style.fontWeight = "normal";
		}
		// 將選中的 radio button 對應的 label 的字體設為粗體
		this.labels[0].style.fontWeight = "bold";
	  });
	}
  }
  ///////////////////////////////////////////////
  //點選檢查方式的RADIOBUTTION時會變更建議的檢驗階級、拔取(抽樣)方式、測定距function
  function changeSelectTheSuggestedRadio(){
	  // 取得所有名稱為 name 的 radio button
	const radios = document.getElementsByName("inputInsItemlName");
  
	// 遍歷所有 radio button
	for (let i = 0; i < radios.length; i++) {
	  // 註冊 radio button 的 change 事件
	  radios[i].addEventListener("change", function() {
		//判斷選用的RADIOBUTTION(點選檢查方式的RADIOBUTTION時會變更建議的檢驗階級、拔取(抽樣)方式、測定距function)
		checkRadioOutPutValve(radios[i].value);
	  });
	}

  }
  //判斷選用的RADIOBUTTION
  function checkRadioOutPutValve(radiosValue){
	if(radiosValue == "孔位置"){
		document.getElementById("inputInsLevelItem2").checked = true;
		document.getElementById("SamplingMethodItem0").checked = true;
		
		
	}
	/////////
	if(radiosValue == "型長"){
		document.getElementById("inputInsLevelItem2").checked = true;
		document.getElementById("SamplingMethodItem0").checked = true;
		document.getElementById("CheckToolItem1").checked = true;
	}
	/////////
	if(radiosValue == "型交位置"){
		document.getElementById("inputInsLevelItem2").checked = true;
		document.getElementById("SamplingMethodItem0").checked = true;
		document.getElementById("CheckToolItem1").checked = true;
	}
	/////////
	if(radiosValue == "焊接位置"){
		document.getElementById("inputInsLevelItem2").checked = true;
		document.getElementById("SamplingMethodItem0").checked = true;
		
	}
	/////////
	if(radiosValue == "孔徑"){
		document.getElementById("inputInsLevelItem2").checked = true;
		document.getElementById("SamplingMethodItem0").checked = true;
		document.getElementById("CheckToolItem0").checked = true;
	}
	/////////
	if(radiosValue == "R角"){
		document.getElementById("inputInsLevelItem2").checked = true;
		document.getElementById("SamplingMethodItem0").checked = true;
		document.getElementById("CheckToolItem5").checked = true;
	}
	/////////
	if(radiosValue == "倒角"){
		document.getElementById("inputInsLevelItem2").checked = true;
		document.getElementById("SamplingMethodItem0").checked = true;
		document.getElementById("CheckToolItem1").checked = true;
	}
	/////////
	if(radiosValue == "角度"){
		document.getElementById("inputInsLevelItem2").checked = true;
		document.getElementById("SamplingMethodItem0").checked = true;
		document.getElementById("CheckToolItem6").checked = true;
	}
	/////////
	if(radiosValue == "平面度"){
		document.getElementById("inputInsLevelItem2").checked = true;
		document.getElementById("SamplingMethodItem0").checked = true;
		document.getElementById("CheckToolItem4").checked = true;
	}
	/////////
	if(radiosValue == "垂直度"){
		document.getElementById("inputInsLevelItem2").checked = true;
		document.getElementById("SamplingMethodItem0").checked = true;
		document.getElementById("CheckToolItem4").checked = true;
	}
	/////////
	if(radiosValue == "焊道長度"){
		document.getElementById("inputInsLevelItem2").checked = true;
		document.getElementById("SamplingMethodItem8").checked = true;
		document.getElementById("CheckToolItem1").checked = true;
	}
	/////////
	if(radiosValue == "焊道位置"){
		document.getElementById("inputInsLevelItem2").checked = true;
		document.getElementById("SamplingMethodItem8").checked = true;
		document.getElementById("CheckToolItem1").checked = true;
	}
	/////////
	if(radiosValue == "焊道預留"){
		document.getElementById("inputInsLevelItem2").checked = true;
		document.getElementById("SamplingMethodItem8").checked = true;
		document.getElementById("CheckToolItem1").checked = true;
	}
	/////////
	if(radiosValue == "焊道預留(打磨要)"){
		document.getElementById("inputInsLevelItem2").checked = true;
		document.getElementById("SamplingMethodItem8").checked = true;
		document.getElementById("CheckToolItem1").checked = true;
	}
	/////////
	if(radiosValue == "焊道"){
		document.getElementById("inputInsLevelItem2").checked = true;
		document.getElementById("SamplingMethodItem7").checked = true;
		document.getElementById("CheckToolItem3").checked = true;
	}
	/////////
	if(radiosValue == "焊道(打磨要)"){
		document.getElementById("inputInsLevelItem2").checked = true;
		document.getElementById("SamplingMethodItem7").checked = true;
		document.getElementById("CheckToolItem3").checked = true;
	}
	/////////
	if(radiosValue == "托架位置"){
		document.getElementById("inputInsLevelItem2").checked = true;
		document.getElementById("SamplingMethodItem0").checked = true;
		
	}
	/////////
	if(radiosValue == "NUT位置"){
		document.getElementById("inputInsLevelItem2").checked = true;
		document.getElementById("SamplingMethodItem0").checked = true;
		
	}
	/////////
	if(radiosValue == "bolt位置"){
		document.getElementById("inputInsLevelItem2").checked = true;
		document.getElementById("SamplingMethodItem0").checked = true;
		
	}
	/////////
	if(radiosValue == "外觀"){
		document.getElementById("inputInsLevelItem2").checked = true;
		document.getElementById("SamplingMethodItem7").checked = true;
		document.getElementById("CheckToolItem3").checked = true;
	}


  }
  changeSelectTheSuggestedRadio();
//選取表格的function
  function selectTable() {
	const table = document.getElementById('oTable');
	const range = document.createRange();
	range.selectNodeContents(table);
	const selection = window.getSelection();
	selection.removeAllRanges();
	selection.addRange(range);
  }
  