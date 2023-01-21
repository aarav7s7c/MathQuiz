function addUsers() {
          const player1 = document.getElementById("player1").value;
          console.log(player1)

          const player2 = document.getElementById("player2").value;
          console.log(player2)

          localStorage.setItem("Player 1", player1)
          localStorage.setItem("Player 2", player2)

          window.location = "game/index2.html"
}