console.log("funONLOAD");


//創建右鍵選單按鈕
//(X,Y,寬,高,外框顏色,填充顏色,點選時使用的Function,文字內容,要放在哪一個選單)
function creatNewrightClickButton(X, Y, width, height, StrokeColor, FillColor, clickListenerFunction, textContent,inputMenu) {
    this.Shape = new createjs.Shape();
    this.Shape.graphics
            .setStrokeStyle(1)
            .beginStroke(StrokeColor)
            .beginFill(FillColor)
            .drawRect(X, Y, width, height);
//rightClickMenu.addChild(this.Shape);
    inputMenu.addChild(this.Shape);
    this.Shape.addEventListener('mouseover', handleClick);
    this.Shape.addEventListener('mouseout', handleClick123);
    this.Shape.addEventListener('click', clickListenerFunction);

    this.text = new createjs.Text(textContent, rightcheckBabblesHeight-rightcheckGap+"px Arial", "#080808");
    this.text.x = X+width/2;
    this.text.y = Y+height/2;
    this.text.textAlign = 'center';
    this.text.textBaseline = 'middle';
    inputMenu.addChild(this.text);
}

//計算右鍵選單的位置
function rightClickButtonLocation(rowType,row){
    var outputnumber
    if(rowType == "X"){
      
      outputnumber = (rightcheckBabblesWidth*(row-1))+(rightcheckGap*row);
      
      return outputnumber
      
    }
    if(rowType == "Y"){
      
      outputnumber = (rightcheckBabblesHeight*(row-1))+(rightcheckGap*row);
  
      return outputnumber
      
    }
    
  }
  
  //在觸控小鍵盤模式下更新輸入數字
  
  function changeTouchNumberTO1(){
    touchinput.text.text = touchinput.text.text+"1";
  }
  function changeTouchNumberTO2(){
    touchinput.text.text = touchinput.text.text+"2";
  }
  function changeTouchNumberTO3(){
    touchinput.text.text = touchinput.text.text+"3";
  }
  function changeTouchNumberTO4(){
    touchinput.text.text = touchinput.text.text+"4";
  }
  function changeTouchNumberTO5(){
    touchinput.text.text = touchinput.text.text+"5";
  }
  function changeTouchNumberTO6(){
    touchinput.text.text = touchinput.text.text+"6";
  }
  function changeTouchNumberTO7(){
    touchinput.text.text = touchinput.text.text+"7";
  }
  function changeTouchNumberTO8(){
    touchinput.text.text = touchinput.text.text+"8";
  }
  function changeTouchNumberTO9(){
    touchinput.text.text = touchinput.text.text+"9";
  }
  function changeTouchNumberTO0(){
    touchinput.text.text = touchinput.text.text+"0";
  }
  function changeTouchNumberBack(){
    var s
    s =  touchinput.text.text;
    s = s.substring(0,s.length-1);
    touchinput.text.text = s;
  }
  function touchDelAllButton(){
    touchinput.text.text = "";
  }

  //創建圓的function
function creatCircle(inpi) {
    //滑鼠座標轉圖面座標
    childCh = pic.globalToLocal(stage.mouseX, stage.mouseY);
    bubbleX[inpi] = childCh.x; //儲存滑鼠X座標之陣列
    bubbleY[inpi] = childCh.y; //儲存滑鼠X座標之陣列
    bubbleID[inpi] = tempID; //儲存泡泡圖的ID
    bubblenumber[inpi] = tempBubbleNumber; //儲存泡泡圖數字座標之陣列
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
    var text = new createjs.Text(tempBubbleNumber, bubbleTextData[inpi].toString() + "px Arial", bubbleTextColorData[inpi]);
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
    for (var j = 1; j < bubbleID.length; j++) {
            console.log("ID : " + bubbleID[j]);
            console.log("number : " + bubblenumber[j]);
            saveData = saveData +
                    "#bnID" + "#Fnb" + j + "#XFnb" + bubbleID[j] + "#XbnID" + "#Bnb" + j + "#XBnb" +
                    "#bn" + "#Fnb" + j + "#XFnb" + bubblenumber[j] + "#Xbn" + "#Bnb" + j + "#XBnb" +
                    "#bx" + "#Fnb" + j + "#XFnb" + parseInt(bubbleX[j]).toFixed(2) + "#XBx" + "#Bnb" + j + "#XBnb" +
                    "#by" + "#Fnb" + j + "#XFnb" + parseInt(bubbleY[j]).toFixed(2) + "#bxy" + "#Bnb" + j + "#XBnb" +
                    "#bst" + "#Fnb" + j + "#XFnb" + bubbleStroke[j] + "#Xbst" + "#Bnb" + j + "#XBnb" +
                    "#bfc" + "#Fnb" + j + "#XFnb" + bubbleFill[j] + "#Xbfc" + "#Bnb" + j + "#XBnb" +
                    "#bz" + "#Fnb" + j + "#XFnb" + bubblesize[j] + "#Xbz" + "#Bnb" + j + "#XBnb" +
                    "#bt" + "#Fnb" + j + "#XFnb" + bubbleTextData[j] + "#Xbt" + "#Bnb" + j + "#XBnb" +
                    "#btc" + "#Fnb" + j + "#XFnb" + bubbleTextColorData[j] + "#Xbtc" + "#Bnb" + j + "#XBnb";
    }
    saveData = "#all" + bubbleID.length.toString() + "#Xall" + saveData;
//saveContainToBase64() 
 saveData = saveData + "#base64#" + saveContainToBase64() + "#Xbase64#";
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
    //console.log(saveData);
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
//txt匯入教學
//https://www.delftstack.com/zh-tw/howto/javascript/read-text-file-in-javascript/ 

async function inputSaveData(file) {
    //var textbox = document.getElementById('textbox2');
    //var tempData = textbox.value;
    let tempData = await file.text();
    var a = getSaveDate("#all", "#Xall", tempData);
    inputbubbleAllNumber = a;
    //清空陣列(防誤)
    inputbubbleID.length = 0;
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
    tempBubbleNumber = 1;
    textAtMouse.text = tempBubbleNumber;

//////////////////////////
//處理圖片檔BASE64
var tempbase64 = getSaveDate("#base64#", "#Xbase64#", tempData);
image.src = tempbase64;
stage.update();
    /////////////////////
    //資料(savedata)解析並繪出泡泡圖
    for (var j = 1; j < a; j++) {
            inputbubbleID[j] = getSaveDate("#bnID" + "#Fnb" + j + "#XFnb", "#XbnID" + "#Bnb" + j + "#XBnb", tempData);
            inputbubblenumber[j] = getSaveDate("#bn" + "#Fnb" + j + "#XFnb", "#Xbn" + "#Bnb" + j + "#XBnb", tempData);
            inputbubbleX[j] = getSaveDate("#bx" + "#Fnb" + j + "#XFnb", "#XBx" + "#Bnb" + j + "#XBnb", tempData);
            inputbubbleY[j] = getSaveDate("#by" + "#Fnb" + j + "#XFnb", "#bxy" + "#Bnb" + j + "#XBnb", tempData);
            inputbubbleStroke[j] = getSaveDate("#bst" + "#Fnb" + j + "#XFnb", "#Xbst" + "#Bnb" + j + "#XBnb", tempData);
            inputbubbleFill[j] = getSaveDate("#bfc" + "#Fnb" + j + "#XFnb", "#Xbfc" + "#Bnb" + j + "#XBnb", tempData);
            inputbubblesize[j] = getSaveDate("#bz" + "#Fnb" + j + "#XFnb", "#Xbz" + "#Bnb" + j + "#XBnb", tempData);
            inputbubbleTextdata[j] = getSaveDate("#bt" + "#Fnb" + j + "#XFnb", "#Xbt" + "#Bnb" + j + "#XBnb", tempData);
            inputbubbleTextColorData[j] = getSaveDate("#btc" + "#Fnb" + j + "#XFnb", "#Xbtc" + "#Bnb" + j + "#XBnb", tempData);
            //////////////////////////////////////////
            //將通用的繪製資料對齊輸入的資料
            //用於輸入後再增加泡泡圖輸出
            bubbleID[j] = inputbubbleID[j]; //儲存泡泡圖的ID
            bubblenumber[j] = inputbubblenumber[j]; //儲存泡泡圖數字座標之陣列
            bubbleX[j] = inputbubbleX[j]; //儲存滑鼠X座標之陣列
            bubbleY[j] = inputbubbleY[j]; //儲存滑鼠X座標之陣列
            bubbleStroke[j] = inputbubbleStroke[j]; //儲存泡泡圖線顏色的資料
            bubbleFill[j] = inputbubbleFill[j]; //儲存泡泡圖顏色填滿的資料
            bubblesize[j] = inputbubblesize[j]; //儲存泡泡圖大小
            bubbleTextData[j] = inputbubbleTextdata[j];
            bubbleTextColorData[j] = inputbubbleTextColorData[j];
            tempID = tempID + 1; //更新暫存的ID順序
            /////////////////////////////////////////////
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
            bubbleCircleInPicOrder[j] = pic.numChildren;
            pic.addChild(text);
            bubbleNumberInPicOrder[j] = pic.numChildren;
            ////////////////////////////////////////
            console.log(inputbubblenumber[j] + "," + inputbubbleX[j] + "," + inputbubbleY[j] + "," + inputbubbleStroke[j] + "," + inputbubbleFill[j] + "," + inputbubblesize[j] + "," + inputbubbleTextdata[j] + "," + inputbubbleTextColorData[j]);

    }
    //console.log(tempData);
//在上傳後隱藏上傳按鈕
touchCoverground.visible = false;
touchinputSaveData.Shape.visible = false;
touchinputSaveData.text.visible = false;
uploadTXTLable3.visible = false;

}
//處理匯入存檔的資料
function getSaveDate(front, back, str) {
    var a = str.search(front);
    var b = str.search(back) + back.length;
    var c = str.slice(a, b);
    var d = c.replace(front, "");
    d = d.replace(back, "");
    return d
}

////////////////////////////////
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

function doNotThing(event) {
    console.log("doNotThing");
}

function rightClickOk(event) {
backspaceMode = true;//開啟backspace功能
    var paintColor = document.querySelector("#inputColor").value;
    bubbleTempStroke = paintColor;
    console.log("click");
    rightClickMenu.visible = false; //隱藏右鍵選單
    bubblemode = true; //開啟泡泡圖模式
    //如果是觸控模式的話，隱藏泡泡圖
    if (detectmob() == true) {
            bubbleShowMode = false;
    }
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
//變更泡泡求數字
function changeNumber() {
    //tempBubbleNumber
    var textTemp = document.getElementById("textbox2");
    var a = Number(textTemp.value);
    console.log(textTemp.value);
    tempBubbleNumber = a;
    textAtMouse.text = tempBubbleNumber;
    stage.update(event);
}

///////////////////////////////////////////////
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
    document.querySelector("#inputColor").value = "#ff1571";
    console.log("changeColor");
}

function changeButtonColorToBlue() {
    bubbleTempStroke = "#0084dd";
    document.querySelector("#inputColor").value = "#0084dd";
    console.log("changeColor");
}

function changeButtonColorToGreen() {
    bubbleTempStroke = "#0aa660";
    document.querySelector("#inputColor").value = "#0aa660";
    console.log("changeColor");
}
/////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////
//尋找泡泡球

function findbubble2(inputX,inputY) {
    //先遍歷匯入的泡泡求陣列的總數，如果要找的數字等於泡泡球的話，
    //找出預先儲存好泡泡球數字在pic這個容器下的順序(bubbleNumberInPicOrder[i])並儲存在tt下，
    //減1是因為不知道為什麼會多1->日後要查
    //然後再將此泡泡求的陣列順序儲存在tempTextSizeData下，
    //方便inputbubbleTextdata(儲存泡泡球數字大小的變數)調用
    var tempTextSizeData, tempCorrectNumber, tt;
    //var textTemp = document.getElementById("textbox2");
    
    var textTemp = document.getElementById("nextNumberTextID");
    var findNumber;

if(textTemp.value == ""){
  findNumber = touchinput.text.text;
}else{
  findNumber = textTemp.value;
}

    for (var i = 0; i < inputbubblenumber.length; i++) {
            if (inputbubblenumber[i] == findNumber) {
                    tt = bubbleNumberInPicOrder[i] - 1;
                    tempCorrectNumber = inputbubblenumber[i];
                    tempTextSizeData = i;
            }
    }


    if (tempCorrectNumber > 0) {

            //泡泡圖顏色變成紅色
            var childByPic = pic.getChildAt(tt);
            //console.log("tt : "+tt);
            childByPic.alpha = 0.7;
            childByPic.color = "red";
            childByPic.font = inputbubbleTextdata[tempTextSizeData] + "px Impact";
            var pt = pic.localToGlobal(childByPic.x, childByPic.y);
            pic.regX = childByPic.x;
            pic.regY = childByPic.y;


            //位置移動
            if(inputX == undefined || inputY == undefined){
              console.log("inputX : "+inputX);
              pic.x = windowWidth / 2;
              pic.y = windowHeight / 2;
            }else{
              pic.x = inputX;
              pic.y = inputY;
            }

            //泡泡圖顏色變成藍色
           
              var childByPicLast = pic.getChildAt(tt-2);
              childByPicLast.color = "blue";

              var childByPicLast = pic.getChildAt(tt+2);
              childByPicLast.color = "blue";

            console.log("X"+pic.x);
            console.log("Y"+pic.y);
            console.log("tt"+tt);
            
    } else {
            //alert("資料輸入有誤");
    }

}
//////////////////////////////////////////////////////////////
// 匯出oTable並轉為xlsx檔
function exportTableToExcel() {
  // 取得表格元素
  console.log("匯出oTable並轉為xlsx檔");
  const table = document.getElementById('oTable');

  // 將表格轉換為二維陣列
  const data = [];
  for (let i = 0; i < table.rows.length; i++) {
    const row = [];
    for (let j = 0; j < table.rows[i].cells.length; j++) {
      row.push(table.rows[i].cells[j].innerHTML);
    }
    data.push(row);
  }

  // 創建工作表
  const sheet = XLSX.utils.aoa_to_sheet(data);

  // 創建工作簿
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, sheet, 'Sheet1');

  // 匯出 xlsx 檔
  XLSX.writeFile(workbook, 'table.xlsx');
}