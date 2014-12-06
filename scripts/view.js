function showView(size) {
	var grid = document.getElementById("gridDiv");
	var size = document.getElementById("gridSize").value;
	var color = document.getElementById("cardColor").value;
	grid.innerHTML = genView(size, color);
	addClickHandlers();
	return false;
}
function genView(x, y) {
	var html = '';
	if (x > 0){
		var boardObj = new Board(x);
		board = boardObj.getBoard();
		html = html + "<table id='gridTable'>";
		for(var i = 0; i < x; i++){
			html = html + "<tr>";
			for (var j=0; j<x; j++){
				html = html + "<td id='"+y+"'></td>";
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

function addClickHandlers() {
	var cardDiv = document.getElementById("gridDiv");
	var cells = cardDiv.getElementsByTagName("td");

	for (var i = 0; i < cells.length; i++){
		cells[i].onclick = showBackGround;
	}
}
function showBackGround() {
	var gridTable = document.getElementById("gridTable");
	var col = this.cellIndex;
	var row = this.parentNode.rowIndex;
	var cell = gridTable.rows[row].cells[col];
	cell.innerHTML = board[col][row].toString();
	cell.style.background = "#fff";
	var message = document.getElementById("cellOut");
	message.innerHTML = row.toString() + "X" + col.toString();
}
