var player1 = document.getElementById('player1');
var classes = player1.classList;
//var move = document.body.addEventListener();
var zone = document.getElementById("zone");

document.body.addEventListener('keydown',function(event){

    //event.preventDefault();
    //Movement
    var moveLeft = (player1.style.left.replace('px','')*1)-64 + "px";
    var moveRight = (player1.style.left.replace('px','')*1)+64 + "px";
    var moveUp = (player1.style.top.replace('px','')*1)-64 + "px";
    var moveDown = (player1.style.top.replace('px','')*1)+64 + "px";
    //Movement Stop
    var moveLeftStop = (player1.style.left.replace('px','')*1)+0+ "px";
    var moveUpStop = (player1.style.top.replace('px','')*1)+0 + "px";
    //Offset Object
    var goLeft = (player1.offsetLeft);
    var goTop = (player1.offsetTop);
    //Logs
    // console.log(moveRight);
    // console.log(goLeft);
    // console.log(player1);
    // console.log(zone);

     //BOUTON GAUCHE
    if (event.keyCode==37 ){
         event.preventDefault();
        var next = nextCell(player1, 'left')

        if(next == false)
         player1.style.left=moveLeft;

         if (goLeft<100){
            player1.style.left=moveLeftStop;
        }

    }

    //BOUTON DROIT
    if (event.keyCode==39){
         event.preventDefault();
        var next = nextCell(player1, 'right')

        if(next == false)
            player1.style.left=moveRight;
    
        if (goLeft>565){
            player1.style.left=moveLeftStop;
        }

    }

    // BOUTON HAUT
    if (event.keyCode==38){
         event.preventDefault();
        var next = nextCell(player1, 'top')

        if(next == false)
            player1.style.top=moveUp;
 
    }
    if (goTop<100){
        player1.style.top=moveUpStop;
    }

    // BOUTON BAS
    if (event.keyCode==40){
         event.preventDefault();
        var next = nextCell(player1, 'bottom')

        if(next == false)
            player1.style.top=moveDown;

        if (goTop>575){
            player1.style.top=moveUpStop;
        }

    }
})


/////////// GRID
var grid = [];

for ( var i = 64; i < 586; i+=64)
{
        for ( var j = 64; j < 586; j+=64 )
    {
        grid.push({top:i,left:j})
    }

}
// console.log(grid);



const solides = document.querySelectorAll('.map_cell_solid')
const length  = solides.length

let blocks = []

for(let i = 0; i < length; i++) {

    blocks.push({top: solides[i].offsetTop, left: solides[i].offsetLeft })

}

function nextCell(player1, direction) {

    switch(direction) {

        case 'top':
        return checkNextTop(player1)
        break;

        case 'bottom':
        return checkNextBottom(player1)
        break;

        case 'left':
        return checkNextLeft(player1)
        break;

        case 'right':
            return checkNextRight(player1)
            break;

        default: return false

    }


}

function checkNextTop(player1) {

    var nextTop = player1.offsetTop - 64
    var nextLeft = player1.offsetLeft

    return isBlock(nextTop, nextLeft)

}

function checkNextBottom(player1) {

    var nextTop = player1.offsetTop + 64;
    var nextLeft = player1.offsetLeft;

    return isBlock(nextTop, nextLeft);

}

function checkNextLeft(player1) {

    var nextTop = player1.offsetTop;
    var nextLeft = player1.offsetLeft - 64 ;
  
    return isBlock(nextTop, nextLeft);

}

function checkNextRight(player1) {

    var nextTop = player1.offsetTop;
    var nextLeft = player1.offsetLeft + 64;
    
    return isBlock(nextTop, nextLeft);

}

function isBlock(nextTop, nextLeft) {
      console.log(nextTop, nextLeft);
      
    var length = blocks.length;
      
    for(let i = 0; i < length; i++) {
         console.log(blocks[1].top, blocks[1].left);
        if(nextTop == blocks[i].top && nextLeft == blocks[i].left)
         return true;
    
    }

    return false;

}




