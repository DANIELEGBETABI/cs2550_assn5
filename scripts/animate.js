var cellCont;
var margin = 10;
var cellTop = 0;
function beginMove(){
	cellCont = document.getElementById("cellDiv");
	setTimeout(animate,20);
}

function animate(){
	cellTop += margin;
	cellCont.style.top = cellTop + "px";
	cellCont.style.left = cellTop + "px";

	if (cellTop < window.innerHeight - 20){
		setTimeout(animate, 20);
	}
}
