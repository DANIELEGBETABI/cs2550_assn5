function Board(size) {
	this.size = size;
	this.boardArray = Array();
	this.initBoard();
}
Board.prototype.initBoard = function() {
	var tmpArray = Array();
	var input = 1;
	var arrSize = this.size * this.size;
	for (i = 0; i<arrSize; i++){
		tmpArray[i] = input;
		if (i % 2 != 0){
			input++;
		}
	}
	this.shuffleBoard(tmpArray);
	var count = 0;
	for (i = 0; i<this.size; i++){
		this.boardArray[i] = new Array();
		for (j=0; j<this.size; j++){
			this.boardArray[i][j]= tmpArray[count];
			count++;
		}
	}

}

Board.prototype.shuffleBoard = function(o){
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
}

Board.prototype.getBoard = function (){
	return this.boardArray;
}

function User(){
	var turns;
	var pairs;
	var startDate = new Date();
}

User.prototype.incTurn = function() {
	this.turns++;
}

User.prototype.incPair = function(){
	this.pairs++;
}

User.prototype.getPair = function(){
	return this.pairs;
}

User.prototype.getTurn = function() {
	return this.turns;
}

User.prototype.getTimer = function(){
	var newTime = Date();
	return newTime - this.startDate;
}
