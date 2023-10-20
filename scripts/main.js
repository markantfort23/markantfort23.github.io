var correctPassword = "anna";

function showPasswordPrompt() {
    var password = prompt("Enter the Password to Access the Secret Page:");

    if (password === correctPassword) {
        window.location.href = "secret.html";
    } else {
        alert("Incorrect password!");
    }
}

const theWords = ["Leetcoding 💻", "playing pickup basketball with friends 🏀",
                  "studying at the local coffee shop ☕️", "reading a fantasy novel 📖", "cooking a new dish 🍳",
                  "jogging down Northwestern's Lakefill 🏃", "walking my dog Toby 🐶",
                  "thrifting around Chicago neighborhoods 🧥", "eating Chipotle 🌯",
                  "spending time with family back home in Albany, NY 🍎"];
const theBox = document.getElementById("word");
let idx = 0;

const writeBox = (word) => {
  const pieces = word.split("");
  let letterIndex = 0;
  const writeLetters = () => {
    if (letterIndex===pieces.length+1) {
      setTimeout(switchWord, 1500);
    }
    else {
      theBox.innerHTML = pieces.slice(0,letterIndex).join("");
      letterIndex++;
      setTimeout(writeLetters,50);
    }
  }
  writeLetters();
};
const switchWord = () => {
  idx = idx >= theWords.length - 1 ? 0 : idx + 1;
  writeBox(theWords[idx]);
};

document.getElementById('logo').onclick = changeColor;   

    function changeColor() {
      document.getElementById('logo').style.color = "red";
      setTimeout(function() {
        document.getElementById('logo').style.color = '#323684';
      }, 2000);
    }
    

switchWord();

function checkAnswers(event) {
  event.preventDefault();

  var q1 = document.getElementById("q1").value.toLowerCase();
  var q2 = document.getElementById("q2").value.toLowerCase();
  var q4 = document.getElementById("q4").value.toLowerCase();
  var q5 = document.getElementById("q5").value.toLowerCase();
  var q6 = document.getElementById("q6").value.toLowerCase();

  if (q1 === "katsudon" && q2 === "mark" && q4 === "anna" && q5 === "where you are" && q6 === "love you") {
      window.location.href = "success.html";
  } else {
      alert("Some answers are incorrect. Please try again.");
  }
}

function allowDrop(ev) {                
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("Text",ev.target.id);
}

function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("Text");
    var dragged = document.getElementById(data);    
    if(ev.target.tagName == "IMG") {       
       var parent = ev.target.parentElement || ev.target.parentNode;
       dragged.parentElement.appendChild(ev.target);
       parent.appendChild(dragged);
    } else {
        //check if the div already has some img, 
        //swap the 2 images
        if(ev.target.children.length > 0) {
            dragged.parentElement.appendChild(ev.target.children[0]);
        }
        ev.target.appendChild(dragged);
    }
}

    function check() {
		var i = 1;
		var correct = true;
		var numImages = 5;
		
		while ( correct && i <= numImages ) {
			node = document.getElementById( "drag1"+i );
			correct = ( node.parentNode.id == ( "div2"+i ) );
			i++;
		}
		
		if ( correct ) {
		
			window.location.href = "winner.html";
		}	
		else alert ('Wrong');
	}

const animal = document.getElementById('animal');

animal.addEventListener('mouseover', () => {
  animal.classList.add('rotate');
});

animal.addEventListener('mouseout', () => {
  animal.classList.remove('rotate');
});