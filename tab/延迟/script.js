function $(id){
	return typeof id ==='string'?document.getElementById(id):id;
}

window.onload=function(){
	var index=0;
	var timer=null;

	var lis=$('notice-tit').getElementsByTagName('li'),
		divs=$('notice-con').getElementsByTagName('div');

	if(lis.length!=divs.length) return;

	//遍历所有的页签
	for(var i=0;i<lis.length;i++){
		lis[i].id=i;
		lis[i].onmouseover=function(){
			//用that这个变量来引用滑过的这个li
			var that=this;
			//如果存在准备执行的定时器，立即清除，只有当停留时间大于500毫秒时才执行
			if(timer){
				clearTimeout(timer);
				timer=null;
			}
			//延迟半秒执行
			timer=window.setTimeout(function(){
				for(var j=0;j<lis.length;j++){
					lis[j].className='';
					divs[j].style.display='none';
				}
				lis[that.id].className='select';
				divs[that.id].style.display='block';
			},500);
		}
	}
}