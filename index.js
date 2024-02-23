var player1 = Math.floor(Math.random()*6+1);
var player2 = Math.floor(Math.random()*6+1);
console.log(player1);
console.log(player2);
var newHeading = document.querySelector('h1');
if(player1 === player2)
{
    newHeading.textContent="It's a TIE !! 😑";
}
if(player1 > player2)
{
    newHeading.textContent="Player 1 Won > 👈";
}
if(player2 > player1)
{
    newHeading.textContent="Player 2 Won < 👉";
}
var newImage = document.querySelectorAll('img');
var randomImage1 = "images/dice"+player1+".png";
newImage[0].setAttribute('src',randomImage1);

var randomImage2 = "images/dice"+player2+".png";
newImage[1].setAttribute('src',randomImage2);