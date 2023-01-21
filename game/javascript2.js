player1 = localStorage.getItem("Player 1");
player2 = localStorage.getItem("Player 2");

questioner = player1;
answerer = player2;

player1score = 0;
player2score = 0;


function positionElements() {
  document.getElementById("player1").innerHTML =
    localStorage.getItem("Player 1");
  document.getElementById("player2").innerHTML =
    localStorage.getItem("Player 2");
  document.getElementById("nameinpu").value = "";
  document.getElementById("ansinpug").value = "";
  document.getElementById("QpayerName").innerHTML = player1;
  document.getElementById("ApayerName").innerHTML = player2;
document.getElementById("p1score").innerHTML = player1score;
document.getElementById("p2score").innerHTML = player2score;
}
// <-------------------------------------------------->
function checkValue() {
  var inputname = document.getElementById("nameinpu");
  if (document.getElementById("nameinpu").value.length > 0) {
    // Btn Glow Effect Code.
    document.getElementById("ubmi").classList.add("submit");
  }
}
// <----------------------------------------------------------------->
function displayyy() {
  questione = document.getElementById("nameinpu").value;
  console.log("Hi");
  const glow = document.getElementById("answer");
  glow.classList.add("active");

  document.getElementById("question").classList.add("disable");

  console.log(questione);

  document.getElementById("queDisplay").innerHTML = questione;

  correctAns = eval(questione);
  console.log(correctAns);

  document.getElementById("ansinpug").value = "";

  document.getElementById("enr").classList.add("endlvlup");

  if (questioner == player1) {
    answerer = player2;
  }
  if (questioner == player2) {
    answerer = player1;
  }
}

function submitAnsByUser() {
  document.getElementById("queDisplay").innerHTML = "";
  document.getElementById("enr").classList.remove("endlvlup");
  if (document.getElementById("ansinpug").value == correctAns) {
    // console.log("Hop!");
    document.getElementById("ansinpug").value = "";
    document.getElementById("nameinpu").value = "";
    document.getElementById("answer").classList.remove("active");
    document.getElementById("question").classList.remove("disable");
    window.alert("Your Answer Is Correct!, You Won A Point");
    console.log("Your Answer Is Correct! ");

    if (questioner == player1) {
      questioner = player2;
      player2score = player2score + 1;
      document.getElementById("p2score").innerHTML = player2score;
      document.getElementById("QpayerName").innerHTML = player2;
      document.getElementById("ApayerName").innerHTML = player1;
    } else {
      questioner = player1;
      player1score = player1score + 1;
      document.getElementById("p1score").innerHTML = player1score;
      document.getElementById("QpayerName").innerHTML = player1;
      document.getElementById("ApayerName").innerHTML = player2;
    }
  } else {
    document.getElementById("ansinpug").value = "";
    document.getElementById("nameinpu").value = "";
    document.getElementById("answer").classList.remove("active");
    document.getElementById("question").classList.remove("disable");
    window.alert(
      "Your Answer Is Inorrect!, Question Turn Goes To " +
        questioner 
    );
    console.log(
      "Your Answer Is Not correct! Question Turn Goes To " + questioner
    );
  }
}

function EndtheGame() {
  document.getElementById("nameinpu").value = "";
  document.getElementById("queDisplay").innerHTML = "";
  document.getElementById("enr").classList.remove("endlvlup");
  const glow = document.getElementById("answer");
  glow.classList.remove("active");
  document.getElementById("question").classList.remove("disable");
  document.getElementById("p1score").innerHTML = 0;
  document.getElementById("p2score").innerHTML = 0;

  if (answerer == player1) {
    questioner = player1;
    window.alert(player1 + " Surrenders,  " + player2 + " Wins!, Cheers !");
  }
  if (answerer == player2) {
    questioner = player2;
    window.alert(player2 + " Surrenders,  " + player1 + " Wins!, Cheers !");
  }
}