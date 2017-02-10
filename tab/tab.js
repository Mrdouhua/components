window.onload = function(){
	tab("tab_menu","items","select");
}
// 编写可复用的tab选项卡
function tab(id,items,select){
	var oUl = document.getElementById(id);
	var oLi = oUl.getElementsByTagName('li');
	var items = document.getElementsByClassName(items);

	for(var i = 0, len = oLi.length; i < len; i++) {
		oLi[i].index = i;
		items[i].index = i;
		oLi[i].addEventListener("click", function(){
			for(var j = 0, Len = oLi.length; j < Len; j++) {
				oLi[j].className = '';
				items[j].style.display = "none";
			}
			oLi[this.index].className = select;
			items[this.index].style.display = "block";
		})
	}
}