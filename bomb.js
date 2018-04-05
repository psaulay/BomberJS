function insertBomb(){
	var map = document.getElementById('map');
	var top= player.offsetTop;
	var left=player.offsetLeft;
	console.log(top, left) 
	var bomb = document.createElement("div");
	bomb.id = "bomb";
	bomb.style.backgroundImage = "url(img/bomb.png)";
	bomb.style.top= top + "px";
	bomb.style.left=left+ "px";
	map.appendChild(bomb);
	setTimeout(function(){
	explode(bomb);
	}, 2000);
}

function explode(bomb){
	var map = document.getElementById("map");
	var bombPosLeft = bomb.offsetLeft / 64;
	var bombPosTop = bomb.offsetTop / 64
	console.log("la bombe éxplose");
	bomb.style.display = "none" ;
	// Creation des explodes 
	var explode = document.createElement('div');
	explode.style.left = bomb.style.left ;
	explode.style.top = bomb.style.top;
	explode.className ="explode";
	explode.style.backgroundImage = "url('img/explosion.png')" ;
	explode.style.backgroundSize = 'cover';
	map.appendChild(explode);
	
	if (grille[bombPosTop - 1][bombPosLeft] = 3) {
	explode = document.createElement('div');
	explode.style.left = bomb.style.left ;
	explode.style.top = bomb.style.top;
	explode.className ="explode";
	explode.style.backgroundImage = "url('img/explosion.png')" ;
	explode.style.backgroundSize = 'cover';
	explode.style.top = (parseInt(explode.style.top) + 64) +"px";
	map.appendChild(explode);
	}
	breakwall(explode);
	
	if (grille[bombPosTop + 1][bombPosLeft] = 3) {
	explode = document.createElement('div');
	explode.style.left = bomb.style.left ;
	explode.style.top = bomb.style.top;
	explode.className ="explode";
	explode.style.backgroundImage = "url('img/explosion.png')" ;
	explode.style.backgroundSize = 'cover';
	explode.style.top = (parseInt(explode.style.top) - 64) +"px";
	map.appendChild(explode);
	}
	breakwall(explode);
	
	if (grille[bombPosLeft +1][bombPosTop] = 3) {
	explode = document.createElement('div');
	explode.style.left = bomb.style.left ;
	explode.style.top = bomb.style.top;
	explode.className ="explode";
	explode.style.backgroundImage = "url('img/explosion.png')" ;
	explode.style.backgroundSize = 'cover';
	explode.style.left = (parseInt(explode.style.left) - 64) +"px";
	map.appendChild(explode);
	}
	breakwall(explode);
	
	if (grille[bombPosLeft -1][bombPosTop] = 3){
	explode = document.createElement('div');
	explode.style.left = bomb.style.left ;
	explode.style.top = bomb.style.top;
	explode.className ="explode";
	explode.style.backgroundImage = "url('img/explosion.png')" ;
	explode.style.backgroundSize = 'cover';
	explode.style.left = (parseInt(explode.style.left) + 64) +"px";
	map.appendChild(explode);
	console.log("l'explosion est créer");
	}
	breakwall(explode);
	
	//faire disparaitre les explosions
	setTimeout(function(){ 
	console.log('les explosions disparait');
	var elements = document.getElementsByClassName('explode');
	console.log(elements)
	while(elements.length > 0) {
	elements[0].parentNode.removeChild(elements[0]);
	}
	
	}, 1500);


}

function breakwall(explosion){

    var element = document.getElementsByClassName('bloc');
    var wallDeleteLeft = 0;
    var wallDeleteTop = 0;

    for (var i = element.length - 1; i >= 0; i--) {

        wallDeleteLeft = element[i].offsetLeft / 64;
        wallDeleteTop = element[i].offsetTop / 64;

        if ((explosion.offsetTop / 64 == wallDeleteTop) && (explosion.offsetLeft / 64 == wallDeleteLeft)) {

            element[i].style.display= "none";

            if (grille[wallDeleteTop][wallDeleteLeft] == 2) {
                grille[wallDeleteTop][wallDeleteLeft] = 1;

            }
		}
	}
}