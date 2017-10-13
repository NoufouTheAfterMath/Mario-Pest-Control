// Grab grand total
var totalResult = document.querySelector("#total-result");

var goombaPlus = document.querySelector("#goomba-plus");
goombaPlus.addEventListener("click", function() {
  //Grab num of Goombas
  var goombaNumElem = document.querySelector("#goomba-num");
  var goombaNumValue = parseInt(goombaNumElem.textContent);
  //grab the total result for goomba
  var goombaResultElem = document.querySelector("#goomba-result");
  var goombaResultValue = parseInt(goombaResultElem.textContent);

  document.querySelector("#goomba-num").innerHTML = goombaNumValue + 1;
  document.querySelector("#goomba-result").innerHTML = goombaResultValue + 5;
  var totalNumValue = parseInt(totalResult.textContent);
    document.querySelector("#total-result").innerHTML = totalNumValue + 5;
});

var goombaMinus = document.querySelector("#goomba-minus");
goombaMinus.addEventListener("click", function() {
  var goombaNumElem = document.querySelector("#goomba-num");
  var goombaNumValue = parseInt(goombaNumElem.textContent);
  var goombaResultElem = document.querySelector("#goomba-result");
  var goombaResultValue = parseInt(goombaResultElem.textContent);
  document.querySelector("#goomba-num").innerHTML = goombaNumValue - 1;
  document.querySelector("#goomba-result").innerHTML = goombaResultValue - 5;
  var totalNumValue = parseInt(totalResult.textContent);
    document.querySelector("#total-result").innerHTML = totalNumValue - 5;
});

var bobPlus = document.querySelector("#bob-plus");
bobPlus.addEventListener("click", function() {
  var bobNumElem = document.querySelector("#bob-num");
  var bobNumValue = parseInt(bobNumElem.textContent);
  var bobResultElem = document.querySelector("#bob-result");
  var bobResultValue = parseInt(bobResultElem.textContent);
  document.querySelector("#bob-num").innerHTML = bobNumValue + 1;
  document.querySelector("#bob-result").innerHTML = bobResultValue + 7;
  var totalNumValue = parseInt(totalResult.textContent);
    document.querySelector("#total-result").innerHTML = totalNumValue + 7;
});
var bobMinus = document.querySelector("#bob-minus");
bobMinus.addEventListener("click", function() {
  var bobNumElem = document.querySelector("#bob-num");
  var bobNumValue = parseInt(bobNumElem.textContent);
  var bobResultElem = document.querySelector("#bob-result");
  var bobResultValue = parseInt(bobResultElem.textContent);
  document.querySelector("#bob-num").innerHTML = bobNumValue - 1;
  document.querySelector("#bob-result").innerHTML = bobResultValue - 7;
  var totalNumValue = parseInt(totalResult.textContent);
    document.querySelector("#total-result").innerHTML = totalNumValue - 7;
});
var cheepPlus = document.querySelector("#cheep-plus");
cheepPlus.addEventListener("click", function() {
  var cheepNumElem = document.querySelector("#cheep-num");
  var cheepNumValue = parseInt(cheepNumElem.textContent);
  var cheepResultElem = document.querySelector("#cheep-result");
  var cheepResultValue = parseInt(cheepResultElem.textContent);
  document.querySelector("#cheep-num").innerHTML = cheepNumValue + 1;
  document.querySelector("#cheep-result").innerHTML = cheepResultValue + 11;
  //calculation of grand total
    var totalNumValue = parseInt(totalResult.textContent);
      document.querySelector("#total-result").innerHTML = totalNumValue + 11;
});
var cheepMinus = document.querySelector("#cheep-minus");
cheepMinus.addEventListener("click", function() {
  var cheepNumElem = document.querySelector("#cheep-num");
  var cheepNumValue = parseInt(cheepNumElem.textContent);
  var cheepResultElem = document.querySelector("#cheep-result");
  var cheepResultValue = parseInt(cheepResultElem.textContent);
  document.querySelector("#cheep-num").innerHTML = cheepNumValue - 1;
  document.querySelector("#cheep-result").innerHTML = cheepResultValue - 11;
//calculation of grand total
  var totalNumValue = parseInt(totalResult.textContent);
    document.querySelector("#total-result").innerHTML = totalNumValue - 11;
});
