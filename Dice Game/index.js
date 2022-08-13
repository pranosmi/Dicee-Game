var arrayOfImages = ['images/dice1.png',
'images/dice2.png',
'images/dice3.png',
'images/dice4.png',
'images/dice5.png',
'images/dice6.png'];


function dicee (){
  var rand1 = Math.floor(Math.random() * arrayOfImages.length);
 var x = document.querySelector('.img1').src= arrayOfImages[rand1];

  var rand2 = Math.floor(Math.random() * arrayOfImages.length);
  var y = document.querySelector('.img2').src = arrayOfImages[rand2];

  if (x > y) {
    document.querySelector('h1').innerHTML="Player 1 Wins";
  } else if (x<y) {
    document.querySelector("h1").innerHTML="Player 2 Wins";
  } else if (x===y) {
    document.querySelector('h1').innerText="draw";
  }
}

dicee();
