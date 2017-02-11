window.onload = function(){
	tab("tab_menu","items","select","click");
}

/*
* tab函数接受四个参数
* 标题ul的id，内容部分盒子的class，标题高亮显示的class，添加的事件
*/
function tab(id,items,select,ev){
	var oUl = document.getElementById(id);
	var oLi = oUl.getElementsByTagName('li');
	var items = document.getElementsByClassName(items);

	for(var i = 0, len = oLi.length; i < len; i++) {
		oLi[i].index = i;
		items[i].index = i;
		oLi[i].addEventListener(ev, function(){
			for(var j = 0, Len = oLi.length; j < Len; j++) {
				oLi[j].className = '';
				items[j].style.display = "none";
			}
			oLi[this.index].className = select;
			items[this.index].style.display = "block";
		})
	}
}