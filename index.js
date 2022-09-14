var randomNumber1=Math.ceil(Math.random()*6)
var randomNumber2=Math.ceil(Math.random()*6)

var imag1='images/dice'+randomNumber1+'.png';
var imag2='images/dice'+randomNumber2+'.png';

document.querySelector('.dice .img1').setAttribute('src',imag1);
document.querySelector('.dice .img2').setAttribute('src',imag2);

if(randomNumber1>randomNumber2){
  document.querySelector('.container h1').textContent="Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
  document.querySelector('.container h1').textContent='Player 2 Wins!';
}
else{
  document.querySelector('.container h1').textContent='DRAW!';
}
