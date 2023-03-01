var randomNumber1 = Math.floor(Math.random() * 6) + 1; //Gerando um número aleatório de 1 a 6

var randomImage = "dice" + randomNumber1 + ".png"; //usando concatenação para criar obter imagens aleatórias

var randomImageSource = "images/" + randomImage; // usando concatenação para adicionar a imagem com a pasta de origem

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!"
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!"
}
else{
  document.querySelector("h1").innerHTML = "Draw!"
}
