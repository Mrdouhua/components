function navSlide(){

	// curPostion和curPostion_1为所触发的li元素离其父元素左侧的距离值；thisLeft则为滑动块所在位置的left值
    var curPostion, thisLeft, curPostion_1;

    var obj = getElement('#navUl'),
        navCur = getElement('#curNav'),
        liArr = obj.querySelectorAll('li'),
        liLength = liArr.length-1,
        timer = null;

        for(var x = 0; x < liArr.length; x++) {
             // liArr[liLength].style.paddingRight = "0";
             var li = liArr[x],
                 curPostion = navCur.offsetLeft;

             if(li.className == "cur"){
                 navCur.style.left = li.offsetLeft + "px";
             }
             li.onmouseover = function(){
                clearTimeout(timer);
                thisLeft = this.offsetLeft;
                if (thisLeft > navCur.offsetLeft)
                {
                    hover();
                }
                else
                {
                    curPostion_1 = this.offsetLeft;
                    out();
                }
             };
 
             li.onmouseout = function(){
                clearTimeout(timer);
                if(curPostion < navCur.offsetLeft){
                    curPostion_1 = curPostion;
                    out();
                }
                else
                {
                    thisLeft = curPostion;
                    hover();
                }
             };
        }



        function hover(){
            if(navCur.offsetLeft <= thisLeft){
                var a = Math.max(parseInt((thisLeft - navCur.offsetLeft) / 20), 3);
                    navCur.style.left = navCur.offsetLeft + a + "px";
                    timer = setTimeout(arguments.callee, 15);
            }
            else
            {
                navCur.style.left = thisLeft + "px";
                clearTimeout(timer);
            }
        }

        function out(){
            if(navCur.offsetLeft >= curPostion_1){
                var a = Math.max(parseInt((navCur.offsetLeft - curPostion_1) / 20), 3);
                    navCur.style.left = navCur.offsetLeft - a + "px";
                    timer = setTimeout(arguments.callee, 15);
                }
            else
            {
                navCur.style.left = curPostion_1 + "px";
                clearTimeout(timer);
            }
        }

        function getElement(selector){
            return document.querySelector(selector)
        }
}

window.onload = function() {
	navSlide();
}