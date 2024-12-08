///window.onload = function() { /// to call the function on load
///    refreshDice();
///  };

if (performance.navigation.type === 1) { ///to call the function when the page is reloaded
    refreshDice(); 
}

function randomNumber(){
    let num = Math.ceil(Math.random() * 6); ///rng
    return num;
}

function refreshDice(){

    let num1 = randomNumber();
    document.querySelector(".img1").setAttribute("src", "./images/dice" + num1 + ".png");

    let num2 = randomNumber();
    document.querySelector(".img2").setAttribute("src", "./images/dice" + num2 + ".png");

    if (num1 > num2) {
        document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
      }
      else if (num1 < num2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
      }
      else {
        document.querySelector("h1").innerHTML = "Draw!";
      }
}