var players = ["Player 1", "Player 2"];
var arr = ["heads", "tails"];
var call = "";
var characterImage = document.getElementById("characterImage");
var currentPlayerIndex = 0;

function submitPlayers() {
    players[0] = document.getElementById("player1").value || "Player 1";
    players[1] = document.getElementById("player2").value || "Player 2";
    document.getElementById("callDisplay").textContent = players[currentPlayerIndex] + " to Call";
}

function makeCall(selectedCall) {
    call = selectedCall;
    document.getElementById("callDisplay").textContent = players[currentPlayerIndex] + " has called " + call.toUpperCase();
}

function tossCoin() {
    var tossResult = arr[Math.round(Math.random())];
    characterImage.src = "giphy.gif";

    setTimeout(function() {
        var resultMessage;
        
        if (tossResult === call) {
            resultMessage = players[currentPlayerIndex] + " wins! The coin landed on " + tossResult.toUpperCase() + ".";
        } else {
            resultMessage = players[1 - currentPlayerIndex] + " wins! The coin landed on " + tossResult.toUpperCase() + ".";
        }

        Swal.fire({
            title: "Coin Toss Result",
            text: resultMessage,
            icon: "success",
            confirmButtonText: "OK"
        }).then(function() {
            characterImage.src = "istockphoto-1185219157-612x612-removebg-preview.png";
        });

        currentPlayerIndex = 1 - currentPlayerIndex;
        document.getElementById("callDisplay").textContent = players[currentPlayerIndex] + " to Call";
    }, 3000);
}
