function $(id){
	return typeof id ==='string'?document.getElementById(id):id;
}

window.onload=tab;

function tab(){
	//当前高亮显示页签的索引
	var index=0;
	var timer=null;

	//获取所有的页签和药切的内容
	var lis=$('notice-tit').getElementsByTagName('li');
	var divs=$('notice-con').getElementsByTagName('div');
	//添加定时器，改变索引
	timer=setInterval(function(){
		index++;
		if(index>=lis.length){
			index=0;
		}
		for(var j=0;j<lis.length;j++){
			lis[j].className='';
			divs[j].style.display='none';
		}
		//高亮显示当前页签
		lis[index].className='select';
		divs[index].style.display='block';
	},2000);
}