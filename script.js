var rect = document.getElementById('rectangle');
var classes = rect.classList;


//var move = document.body.addEventListener();
var zone = document.getElementById("zone");
document.body.addEventListener('keydown',function(event){
//Movement
var moveLeft = (rect.style.left.replace('px','')*1)-4 + "px";
var moveRight = (rect.style.left.replace('px','')*1)+4 + "px";
var moveUp = (rect.style.top.replace('px','')*1)-4 + "px";
var moveDown = (rect.style.top.replace('px','')*1)+4 + "px";
//Movement Stop
var moveLeftStop = (rect.style.left.replace('px','')*1)+0+ "px";
var moveUpStop = (rect.style.top.replace('px','')*1)+0 + "px";
//Offset Object
var goLeft = (rect.offsetLeft);
var goTop = (rect.offsetTop);
//Logs
console.log(moveRight);
console.log(goLeft);
console.log(rect);
console.log(zone);

//BOUTON GAUCHE

if (event.keyCode==37 ){
rect.style.left=moveLeft;
}
if (goLeft<10){
rect.style.left=moveLeftStop;
}

//BOUTON DROIT
if (event.keyCode==39){
rect.style.left=moveRight;
 if (goLeft>514){
 rect.style.left=moveLeftStop;

 }
 
}

// BOUTON HAUT

if (event.keyCode==38){
rect.style.top=moveUp;
}
if (goTop<10){
rect.style.top=moveUpStop;
}

// BOUTON BAS
if (event.keyCode==40){
rect.style.top=moveDown;
if (goTop>514){
 rect.style.top=moveUpStop;
}
}


})