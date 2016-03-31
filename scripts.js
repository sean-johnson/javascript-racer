document.addEventListener('keyup', function(keyPress) { 

//Controls
var letter = String.fromCharCode(event.keyCode).toLowerCase();

  if (letter === 'z') {
      player1Punch();
    } else if (letter === 'm') {
      player2Punch();
    } else {
      alert("Press 'z' to punch as Zombie or press 'm' to punch as Batman");
    }
  
});

// Replay
function playAgain() {

	if (confirm('Care for another smack?')) {
	window.location.reload(); 
	}  

}

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
		playAgain();
	} else {
		extendArm.className = " " + "fist";
		arm.className = "skin";
	}
    
}

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
		playAgain();
	} else {
		extendArm.className = " " + "fist2";
		arm.className = "skin2";
	}
    
}