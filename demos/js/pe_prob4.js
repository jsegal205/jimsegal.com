;(function(){
	var answer = 0;
	var work = '<p>I looped through all the numbers decending from 999 to 900 and multiplied by decending numbers from 999 to 0.</p>';
	work += '<p>I will save you all the work this time as there is a ton of it.</p>';
	var isPal = false;

	for (var i=999; i>=0; i--){
		for (var j=999; j>=900; j--){
			answer = i*j;
			var reversed = answer.toString().split("").reverse().join("");
			if (answer == reversed){
				work += '<p>This is the winner: ' + i + ' * ' + j + ' = ' + answer + '</p>';
				isPal = true;
				break;
			}
		}
		if (isPal) break;
	}
	
	document.getElementById('Work').innerHTML = work;
	document.getElementById('Answer').innerHTML = answer;
})();