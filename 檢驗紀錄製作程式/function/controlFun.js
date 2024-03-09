console.log("controlFunONLOAD");

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
            //scalePicture(-0.05, pic);
            scalePicture(countPicSacle(pic, "smaller"), pic);
            //pic.mouseWheel(e => Controls.zoom(controls).worldZoom(e));
    } else { //向上滾動
            //scalePicture(0.05, pic);
            scalePicture(countPicSacle(pic, "bigger"), pic);
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

//計算圖片放大倍率
function countPicSacle(container, type) {
    /*
    container.scaleX
    container.scaleY
    canvas2.width 
    canvas2.height 
    */
    //let picwidth = container.scaleX;
    //let picheight = container.scaleY;
    let picwidth = container.scaleX * image.width;
    let picheight = container.scaleY * image.height;

    let basicPicSize = 0,
            basicStageSize = 0,
            SacleSize = 0,
            basicImageSize = 0;
    //選定基準數=>以圖片長邊為準
    //if(picwidth > picheight){}
    if (image.width > image.height) {
            basicPicSize = picwidth;
            basicImageSize = image.width;
            basicStageSize = windowWidth;
    } else {
            basicPicSize = picheight;
            basicImageSize = image.height;
            basicStageSize = windowHeight;
    }


    if (type == "bigger") {
            SacleSize = (basicImageSize * 0.05) / basicImageSize;
            //SacleSize = 0.05;
    }
    if (type == "smaller") {
            SacleSize = -((basicImageSize * 0.05) / basicImageSize);
            //SacleSize = -0.05;
    }

    if (basicPicSize < basicStageSize) {
            container.regX = image.width / 2;
            container.regY = image.height / 2;
            container.x = windowWidth / 2;
            container.y = windowHeight / 2;

            container.scaleX = basicStageSize / basicImageSize;
            container.scaleY = basicStageSize / basicImageSize;
    }
    //console.log("picwidth"+picwidth);
    //console.log("picheight"+picheight);
    //console.log("basicPicSize"+basicPicSize);
    //console.log("basicStageSize"+basicStageSize);
    //console.log("scaleX"+container.scaleY);
    console.log("image.width : " + image.width);
    console.log("image.height : " + image.height);
    console.log("basicImageSize : " + basicImageSize);
    return SacleSize
}

/////////////////////////////////////

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
            /*
            backspaceMode = false;
            rightClickMenu.x = stage.mouseX;
            rightClickMenu.y = stage.mouseY;
    if(stage.mouseX + (rightcheckBabblesWidth*3+rightcheckGap*4) > windowWidth){
      rightClickMenu.x = stage.mouseX - (rightcheckBabblesWidth*3+rightcheckGap*4);
    }
    if(stage.mouseY + (rightcheckBabblesHeight*6+rightcheckGap*7) > windowHeight){
      rightClickMenu.y = stage.mouseY - (rightcheckBabblesHeight*6+rightcheckGap*7);
    }
            rightClickMenu.visible = true;
            bubblemode = false;
            stage.update();
            */
    } else if (btnNum == 0) { //0為左鍵
            console.log("您放開了滑鼠左鍵！");
            //console.log(circleAtMouse.Graphics.Fill);
            if (bubblemode == true) {
                    //泡泡球位置對其滑鼠 
                    creatCircle(tempID);
                    //outputArray(tempBubbleNumber);
                    //AddTable2(tempBubbleNumber);
                    tempBubbleNumber = tempBubbleNumber + 1;
                    tempID = tempID + 1;
                    textAtMouse.text = tempBubbleNumber;
                    console.log("tempid : " + tempID);
            }
    } else if (btnNum == 1) { //1為中鍵
            console.log("您放開了滑鼠中鍵！");
            initDrag = false; //拖曳模式關閉
    } else {
            console.log("您放開了" + btnNum + "號鍵，我不能確定它的名稱。！");
    }

}

///////////////////////////////////