window.onload = function(){
	var oNav = document.getElementById('nav');
	var oLi = oNav.getElementsByTagName('li');
	// var oBg = oNav.getElementsByClassName('bg');
	var oBg = oLi[oLi.length-1];
	var i=0;

	for(i=0;i<oLi.length-1;i++){
		oLi[i].onmouseover = function(){
			startMove(oBg,this.offsetLeft);
		};
		oLi[i].onmouseout = function(){
			startMove(oBg,100);
		};
	}
}
	var iSpeed = 0;
	var left = 100;
	function startMove(obj,iTarget){
		clearInterval(obj.timer);

		obj.timer = setInterval(function(){
			iSpeed += (iTarget-obj.offsetLeft)/6;
			iSpeed*=0.4;
			left+=iSpeed;
			if(Math.abs(iSpeed)<1 && Math.abs(left-iTarget)<1){
				clearInterval(obj.timer);
				obj.style.left=iTarget+'px';
			} else 
			{
				obj.style.left = left+'px';
			}
		},30)
	}