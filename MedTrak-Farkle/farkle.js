// To keep track of each individual player
class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.turn = false;
  }
}
let round = 0;
let playersArray = [];
let test = document.querySelector(".row");
console.log(test);
let numberPlayers;
let numberPlayersForm;
numberPlayersForm = document.querySelector(".form");
console.log(numberPlayersForm);
// On Submit event to create each player
function setNumberPlayers(e) {
  e.preventDefault();
  if (playersArray.length) {
    return;
  }
  numberPlayers = e.target.elements[0].value;
  console.log(numberPlayers);
  for (let i = 0; i < numberPlayers; i++) {
    let newPlayer = new Player(i + 1);
    playersArray.push(newPlayer);
  }
  console.log(playersArray);
  for (let i = 0; i < playersArray.length; i++) {
    let newPlayer = document.createElement("div");
    newPlayer.setAttribute("id", playersArray[i].name + "score");
    newPlayer.innerHTML =
      "Player " + playersArray[i].name + ": " + playersArray[i].score;
    console.log(newPlayer);
    document.querySelector(".scoreRow").appendChild(newPlayer);
  }
}
numberPlayersForm.addEventListener("submit", setNumberPlayers);

var diceArr = [];

function initializeDice() {
  for (i = 0; i < 6; i++) {
    diceArr[i] = {};
    diceArr[i].id = "die" + (i + 1);
    diceArr[i].value = i + 1;
    diceArr[i].clicked = 0;
    diceArr[i].used = false;
  }
}

/*Rolling dice values*/
function rollDice() {
  for (var i = 0; i < 6; i++) {
    if (diceArr[i].clicked === 0) {
      diceArr[i].value = Math.floor(Math.random() * 6 + 1);
    }
  }
  updateDiceImg();
}

/*Updating images of dice given values of rollDice*/
function updateDiceImg() {
  var diceImage;
  for (var i = 0; i < 6; i++) {
    diceImage = "images/" + diceArr[i].value + ".png";
    console.log(diceArr[i].id);
    console.log(diceArr[i].value);
    console.log(diceImage);
    console.log(document.getElementById(diceArr[i].id));
    document.getElementById(diceArr[i].id).setAttribute("src", diceImage);
  }
}

function diceClick(img) {
  var i = img.getAttribute("data-number");

  img.classList.toggle("transparent");
  if (diceArr[i].clicked === 0) {
    // Changed loose comparison to assignment operator
    diceArr[i].clicked = 1;
  } else {
    diceArr[i].clicked = 0;
  }
}
let currentPlayer;
// To add current score to player's score
function bankScore() {
  let bankedScore = 0;

  let scoreText = document.querySelector(".score");
  for (let i = 0; i < playersArray.length; i++) {
    if (playersArray[i].turn == true) {
      currentPlayer = playersArray[i];
      console.log(playersArray[i].score);
    }
  }
  //To keep track of how many of each die value
  let object = [
    { number: 0, name: 1 },
    { number: 0, name: 2 },
    { number: 0, name: 3 },
    { number: 0, name: 4 },
    { number: 0, name: 5 },
    { number: 0, name: 6 },
  ];
  for (let j = 0; j < object.length; j++) {
    for (let i = 0; i < diceArr.length; i++) {
      if (diceArr[i].value == object[j].name) {
        object[j].number = object[j].number + 1;
      }
    }
  }
  console.log(object);
  // If you are scoring based on 3 of a kind
  for (let i = 0; i < object.length; i++) {
    let arrayOfThree = [];
    if (object[i].number >= 3) {
      if (object[i].name == 1) {
        bankedScore = bankedScore + object[i].name * 1000;
      }
      // Logic for later for marking when a die has already been scored

      // for (let i = 0; i < diceArr.length; i++) {
      //   if (object[j] >= 3 && object[j] == "hello") {
      //     console.log("we're in");
      //     if (diceA == 1) {
      //       bankedScore = bankedScore + 1000;
      //       console.log(bankedScore);
      //       currentPlayer.score = currentPlayer.score + bankedScore;

      //       for (let k = 0; k < diceArr.length; k++) {
      //         if (
      //           diceArr[k].value == diceArr[i].value &&
      //           arrayOfThree.length < 3
      //         ) {
      //           // diceArr[k].used = true;
      //           arrayOfThree.push(diceArr[k]);
      //           console.log(arrayOfThree);
      //         }
      //         arrayOfThree.forEach((item) => {
      //           item.used = true;
      //         });
      //       }
      else {
        bankedScore = bankedScore + object[i].name * 100;
        console.log(bankedScore);
        currentPlayer.score = currentPlayer.score + bankedScore;
        // for (let k = 0; k < diceArr.length; k++) {
        //   if (diceArr[k].value == diceArr[i].value && arrayOfThree.length < 3) {
        //     // diceArr[k].used = true;
        //     arrayOfThree.push(diceArr[k]);
        //   }
        //   console.log(arrayOfThree);
        //   arrayOfThree.forEach((item) => {
        //     item.used = true;
        //   });
        // }
      }
      for (let j = 0; j < diceArr.length; j++) {
        if (object[i].name == diceArr[j].value) {
          diceArr[j].used = true;
        }
      }
    }
  }

  //If you are scoring for a single 5 or 1
  for (let i = 0; i < diceArr.length; i++) {
    console.log(diceArr[i].used);
    if (!diceArr[i].used) {
      if (diceArr[i].value == 1) {
        bankedScore = bankedScore + 100;
        currentPlayer.score = currentPlayer.score + 100;
      } else if (diceArr[i].value == 5) {
        bankedScore = bankedScore + 50;
        currentPlayer.score = currentPlayer.score + 50;
      }
    }
  }
  console.log(bankedScore);
  //To display score
  scoreText.innerHTML = parseInt(bankedScore);
  console.log(currentPlayer.name);
  document.getElementById(parseInt(currentPlayer.name) + "score").innerHTML =
    "Player " + currentPlayer.name + ": " + currentPlayer.score;
  console.log(round);
  nextRound();
  let images = document.querySelectorAll("img");
  console.log(images);
  images.forEach((item) => {
    if (item.classList.contains("transparent")) {
      item.classList.remove("transparent");
    }
  });
  for (let i = 0; i < diceArr.length; i++) {
    diceArr[i].clicked = 0;
    diceArr[i].used = false;
  }
}
// To start the first player's turn
function startGame() {
  playersArray[0].turn = true;
}
// To move turns to the next player
function nextRound() {
  console.log(round);
  playersArray[round].turn = false;
  if (!playersArray[round + 1]) {
    playersArray[0].turn = true;
    round = 0;
  } else {
    playersArray[round + 1].turn = true;
    round++;
  }
}
