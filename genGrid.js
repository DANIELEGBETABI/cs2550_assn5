function showGrid() {
	var grid = document.getElementById("gridDiv");
	var size = document.getElementById("gridSize").value;
	grid.innerHTML = genGrid(size);
	return false;
}
function genGrid(x) {
	var html = '';
	var offset = 0;
	if (x > 0){
		html = html + "<table>";
		for(var i = 0; i < x; i++){
			html = html + "<tr>";
			for(var j = 0; j < x; j++){
				if(offset == 0){
					html = html + "<td class='cell1'></td>";
					offset = 1;
				}else{
					html = html + "<td class='cell2'></td>";
					offset = 0;
				}
			}
			html = html + "</tr>";
		}
		html = html + "</table>";
		return html;
	}else{
		alert('No size value given');
		return '';
	}
}
