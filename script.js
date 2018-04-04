    var zone = document.getElementById("zone");
    document.body.addEventListener('keydown',function(event){
    //Movement
    var moveLeft = (rect.style.left.replace('px','')*1)-64 + "px";
    var moveRight = (rect.style.left.replace('px','')*1)+64 + "px";
    var moveUp = (rect.style.top.replace('px','')*1)-64 + "px";
    var moveDown = (rect.style.top.replace('px','')*1)+64 + "px";
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
    //document.getElementById("image").innerHTML = '<img src="image2.png" />';
    //document.images.targetimage.src=towhat.src
    
    if (event.keyCode==37 ){
    rect.style.left=moveLeft;
    //document.getElementById("rectangle").innerHTML='<img src="img/player_right.png"/>';
    }
    if (goLeft<100){
    rect.style.left=moveLeftStop;
    }
    
    //BOUTON DROIT
    if (event.keyCode==39){
    rect.style.left=moveRight;
    //document.getElementById("rectangle").innerHTML='<img src="img/player_left.png">';
     if (goLeft>575){
     rect.style.left=moveLeftStop;
    
     }
     
    }
    
    // BOUTON HAUT
    
    if (event.keyCode==38){
    rect.style.top=moveUp;
    //document.getElementById("rectangle").innerHTML='<img src="img/player_up.png">';
    }
    if (goTop<100){
    rect.style.top=moveUpStop;
    }
    
    // BOUTON BAS
    if (event.keyCode==40){
    rect.style.top=moveDown;
    //document.getElementById("rectangle").innerHTML='<img src="img/player_down.png">';
    if (goTop>575){
     rect.style.top=moveUpStop;
    }
    }
    })

var tableObj = document.getElementById( "table" );
var arr = [];
var allTRs = tableObj.getElementsByTagName( "tr" );
    for ( var trCounter = 0; trCounter < allTRs.length; trCounter++ )
    {
        var tmpArr = [];
        var allTDsInTR = allTRs[ trCounter ].getElementsByTagName( "td" );
        for ( var tdCounter = 0; tdCounter < allTDsInTR.length; tdCounter++ )
            {
                 tmpArr.push( allTDsInTR[ tdCounter ].innerHTML );
            }
         arr.push( tmpArr );
    }
    console.log( arr );

    var rect = document.getElementById('rectangle');
    var classes = rect.classList;
    
    
