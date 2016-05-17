document.addEventListener('keyup', function(keyPress) { 

//Controls

var letter = String.fromCharCode(event.keyCode).toLowerCase();

  if (letter === 'z') {
      playerPunch("player1-arm", 0, "hookRight", "pow1", "p1-score", "skin", "fist", player1Score);
    } else if (letter === 'm') {
      playerPunch("player2-arm", 1, "hookLeft", "pow2", "p2-score", "skin2", "fist2", player2Score);
    } else {
      alert("Press 'z' to punch as Zombie or press 'm' to punch as Batman");
    }
  
});

var player1Score = 0
var player2Score = 0;

function playerPunch(player, rowNum, sound, effect, score, skin, fistType, playerScoreNum) {

	var fist = document.getElementById(player).querySelectorAll("td");
	//Create new cells to extend arm
	var row = document.querySelectorAll("tr")[rowNum];
	var extendArm = row.insertCell(-1);
	var armLength = document.getElementById(player).querySelectorAll("td").length;

	//Keep 'fist' as the last cell only, remove class for previous cell
	var arm = fist[fist.length-1];
	var punchHit = fist[fist.length-1];

	//If fist reaches face: play and show sound effect, congratulate Player X, replay?,  otherwise: Keep 'fist' as the last cell only, remove class for previous cell, keep extending arm.
	if (armLength >= 7) {

		var hook = document.getElementById(sound);
		hook.play(); 
 
		var pow = document.getElementById(effect);
		pow.style.visibility = 'visible';
		extendArm.className = "hidden"; 

		if (player === "player1-arm") { 

			alert ("Zombie, You Won!!");
			// Add count to player1Score
			player1Score += 1;
			document.getElementById(score).innerHTML = player1Score;

		} else if (player === "player2-arm") {

			alert ("Batman, You Won!!");
			// Add count to player2Score
			player2Score += 1;
			document.getElementById(score).innerHTML = player2Score;

		} else {}

		//Take out 'POW' graphic
		pow.style.visibility = 'hidden';


		playAgain();


	} else {

		arm.className = skin;
		extendArm.className = fistType;
		

	}
}



// Replay for another round
function playAgain() {

	if (confirm('Another round?')) {
		
		var parent = document.getElementById("player1-arm");

			var elementChildren = parent.children;

			for (var i = 0; elementChildren.length > 1; i++) {

				parent.removeChild(parent.firstChild);

			}

		var parent2 = document.getElementById("player2-arm");

			var elementChildren = parent2.children;

			for (var i = 0; elementChildren.length > 1; i++) {

				parent2.removeChild(parent2.firstChild);

			}
		

	}  else {}


}




		