document.addEventListener('keyup', function(keyPress) { 

//Controls

var letter = String.fromCharCode(event.keyCode).toLowerCase();

  if (letter === 'z') {
      player1Punch();
    } else if (letter === 'm') {
      playerPunch("player2-arm", 1, "hookLeft", "pow2", "p2-score", "skin2", "fist2");
    } else {
      alert("Press 'z' to punch as Zombie or press 'm' to punch as Batman");
    }
  
});

var playerScore = 0;

// Player One Punch Function
function player1Punch(){

	var fist = document.getElementById("player1-arm").querySelectorAll("td");
	
	//Variables for new cells that extend arm
	var row = document.querySelectorAll("tr")[0];
	var extendArm = row.insertCell(-1);
	var armLength = document.getElementById("player1-arm").querySelectorAll("td").length;

	//Keep 'fist' as the last cell only, remove class for previous cell
	var arm = fist[fist.length-1];
	var punchHit = fist[fist.length];


	//If fist reaches face: play and show sound effect, congratulate Player One, replay?,  otherwise: Keep 'fist' as the last cell only, remove class for previous cell, keep extending arm.
	if (armLength >= 7) {

		var rightHook = document.getElementById("hookRight");
		rightHook.play(); 

		var pow1 = document.getElementById("pow1");
		pow1.style.visibility = 'visible';
		extendArm.className = "hidden";

		alert("Batman got knocked Dafuqout!!");

		// Add count to playerOneScore
		playerOneScore += 1;
		document.getElementById("p1-score").innerHTML = playerOneScore;

		// Replay for another round
		function playAgain1() {

			if (confirm('Another round?')) {

				for (var i = 0; i < 6; i++) {
					extendArm = row.deleteCell(0);
					arm = fist[fist.length-1];
					punchHit = fist[fist.length];
				}

				//Take out POW effect
				pow1.style.visibility = 'hidden';

				//Important reset in next line
				player1Punch();
			}  
		}

		playAgain1();

	} else {
		extendArm.className = " " + "fist";
		arm.className = "skin";
	}
    
}

function playerPunch(player, rowNum, sound, effect, score, skin, fist) {

	var fist = document.getElementById(player).querySelectorAll("td");
	//Create new cells to extend arm
	var row = document.querySelectorAll("tr")[rowNum];
	var extendArm = row.insertCell(-1);
	var armLength = document.getElementById(player).querySelectorAll("td").length;

	//Keep 'fist' as the last cell only, remove class for previous cell
	var arm = fist[fist.length-1];
	var punchHit = fist[fist.length-1];

	//If fist reaches face: play and show sound effect, congratulate Player Two, replay?,  otherwise: Keep 'fist' as the last cell only, remove class for previous cell, keep extending arm.
	if (armLength >= 7) {

		var hook = document.getElementById(sound);
		hook.play(); 
 
		var pow = document.getElementById(effect);
		pow.style.visibility = 'visible';
		extendArm.className = "hidden"; 
		alert("You Won!!");

		// Add count to playerOneScore
		playerScore += 1;
		document.getElementById(score).innerHTML = playerScore;

		// Replay for another round
		function playAgain() {

			if (confirm('Another round?')) {

				for (var i = 0; i < 6; i++) {
					extendArm = row.deleteCell(0);
					arm = fist[fist.length-1];
					punchHit = fist[fist.length];
				}

				//Take out POW effect
				pow.style.visibility = 'hidden';

				//Important reset in next line
				playerPunch();
			}  
		}

		playAgain();

	} else {
		extendArm.className = " " + "fist2";
		arm.className = skin;
	}
}

/*

// Player Two Punch Function
function player2Punch(){

	var fist = document.getElementById("player2-arm").querySelectorAll("td");
	
	//Create new cells to extend arm
	var row = document.querySelectorAll("tr")[1];
	var extendArm = row.insertCell(-1);
	var armLength = document.getElementById("player2-arm").querySelectorAll("td").length;

	//Keep 'fist' as the last cell only, remove class for previous cell
	var arm = fist[fist.length-1];
	var punchHit = fist[fist.length-1];


	//If fist reaches face: play and show sound effect, congratulate Player Two, replay?,  otherwise: Keep 'fist' as the last cell only, remove class for previous cell, keep extending arm.
	if (armLength >= 7) {

		var leftHook = document.getElementById("hookLeft");
		leftHook.play(); 
 
		var pow2 = document.getElementById("pow2");
		pow2.style.visibility = 'visible';
		extendArm.className = "hidden"; 
		alert("Zombie ded!! NanananananaBatman!");

		// Add count to playerOneScore
		playerTwoScore += 1;
		document.getElementById("p2-score").innerHTML = playerTwoScore;

		// Replay for another round
		function playAgain2() {

			if (confirm('Another round?')) {

				for (var i = 0; i < 6; i++) {
					extendArm = row.deleteCell(0);
					arm = fist[fist.length-1];
					punchHit = fist[fist.length];
				}

				//Take out POW effect
				pow2.style.visibility = 'hidden';

				//Important reset in next line
				player2Punch();
			}  
		}

		playAgain2();
	} else {
		extendArm.className = " " + "fist2";
		arm.className = "skin2";
	}
    
}

*/


