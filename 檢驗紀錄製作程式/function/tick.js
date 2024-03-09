console.log("tickFunONLOAD");

function tick(event) {
    //滑鼠座標轉圖面座標
    childCh = pic.globalToLocal(stage.mouseX, stage.mouseY);
    ///////////////////////////////////////////////////////////
    //圖面拖曳效果 -> 滑鼠
    if (initDrag == false && dragType == "mouse") {
            //此方法對齊圖片中心和滑鼠位置

            //定位圖片中心至滑鼠位置
            pic.regX = childCh.x;
            pic.regY = childCh.y;
            //圖片位移至滑鼠位置
            pic.x = stage.mouseX;
            pic.y = stage.mouseY;
    }
    if (initDrag == true && dragType == "mouse") {
            pic.x = stage.mouseX;
            pic.y = stage.mouseY;

            console.log("X:" + pic.x);
            console.log("Y:" + pic.y);
    }

    //圖面拖曳效果 -> 觸控
    if (initDrag == false && dragType == "touch") {
            if (touchType == "panstart" || touchType == "panend") {
                    //在滑動開始即結束時對齊圖片中心和滑鼠位置
                    //定位圖片中心至滑鼠位置
                    pic.regX = childCh.x;
                    pic.regY = childCh.y;
                    //圖片位移至滑鼠位置
                    pic.x = stage.mouseX;
                    pic.y = stage.mouseY;
            }

    }
    if (initDrag == true && dragType == "touch") {
            pic.x = stage.mouseX;
            pic.y = stage.mouseY;
    }
    ///////////////////////////////////////////////////
    //泡泡球位置對齊滑鼠
    circleAtMouse.x = childCh.x;
    circleAtMouse.y = childCh.y;
    textAtMouse.x = circleAtMouse.x;
    textAtMouse.y = circleAtMouse.y;
    //每禎檢查是否為在泡泡圖模式
    if (bubbleShowMode == false) {
            circleAtMouse.visible = false;
            textAtMouse.visible = false;
    }else{
        circleAtMouse.visible = true;
        textAtMouse.visible = true;
    }

    ///////////////////////////////////////////////////
    //表單拖曳模式
    if(controlFormLocationMode == true){

        //controlFormLocation.regX = stage.mouseX;
        //controlFormLocation.regY = stage.mouseY;
        controlFormLocation.x = stage.mouseX;
        controlFormLocation.y = stage.mouseY

        InputDimTor.x = stage.mouseX;
	InputDimTor.y = stage.mouseY;



    }


    //////////////////////////////////////////////////
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