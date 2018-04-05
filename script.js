var map = document.getElementById('map');
const player = document.getElementById('player');
var grille = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 2, 2, 3, 3, 2, 3, 3, 2, 2, 1],
	[1, 2, 4, 3, 4, 2, 4, 2, 4, 3, 1],
	[1, 3, 2, 3, 3, 3, 2, 3, 2, 3, 1],
	[1, 2, 4, 2, 4, 3, 4, 3, 4, 2, 1],
	[1, 3, 3, 3, 2, 3, 3, 2, 3, 3, 1],
	[1, 3, 4, 2, 4, 3, 4, 3, 4, 2, 1],
	[1, 2, 3, 3, 2, 2, 3, 3, 2, 2, 1],
	[1, 3, 4, 2, 4, 3, 4, 3, 4, 2, 1],
	[1, 2, 2, 3, 3, 2, 3, 3, 2, 2, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

//pour afficher la map
function screen (){
	var x, y = 0;
	var wall;
	var floor;
	var bloc;
	var solid;
	
	for (x = 0; x < 11; x++) {
		for(y = 0; y < 11; y++) {
			if (grille[y][x] === 1) {
				//pour créer le mur
				wall = document.createElement('div');
				wall.setAttribute("class", "wall");
				map.appendChild(wall);
				//taille pour le mur en pixel
				wall.style.top = y * 64 + 'px';
				wall.style.left = x * 64 +'px';
				//img background
				wall.style.backgroundImage = "url(img/greyblock.png)";
			}
			if (grille[y][x] === 2) {
				//pour créer le mur
				floor = document.createElement('div');
				floor.setAttribute("class", "floor");
				map.appendChild(floor);
				//taille pour le mur en pixel
				floor.style.top = y * 64 + 'px';
				floor.style.left = x * 64 +'px';
				floor.style.backgroundImage = "url(img/background.png)";
			}
			if (grille[y][x] === 3) {
				//pour créer le mur
				bloc = document.createElement('div');
				bloc.setAttribute("class", "bloc");
				map.appendChild(bloc);
				//taille pour le mur en pixel
				bloc.style.top = y * 64 + 'px';
				bloc.style.left = x * 64 +'px';
				bloc.style.backgroundImage = "url(img/block.png)";
			}
			if (grille[y][x] === 4) {
				//pour créer le mur
				solid = document.createElement('div');
				solid.setAttribute("class", "solid");
				map.appendChild(solid);
				//taille pour le mur en pixel
				solid.style.top = y * 64 + 'px';
				solid.style.left = x * 64 +'px';
				solid.style.backgroundImage = "url(img/solidBlock.png)";
			}
		}
	}
}
//ligne pour afficher la map
screen ();
	
//controle du jeu via le curseur activer
var controlActive = true;

// appel de la fonction des touche directionnel
document.addEventListener("keydown" , function(touche){
	var posInitial = 0;
	var bombermanLeft = player.offsetLeft;
	var bombermanTop = player.offsetTop;
	var posCellLeft = player.offsetLeft / 64;
	var posCellTop = player.offsetTop / 64;
		
		if (controlActive){
			switch (touche.keyCode){
				
				//haut
				case 38:
					if (grille[posCellTop - 1][posCellLeft] == 2){
						player.style.top = (posCellTop - 1) * 64 + 'px';
						player.style.background = "url(img/bomberman.png)";
					}
					break;
				//bas
				
				case 40:
					if (grille[posCellTop + 1][posCellLeft] == 2){
						player.style.top = (posCellTop + 1) * 64 + 'px';
						player.style.background = "url(img/bomberman.png)";
					}
					break;
				//gauche
				
				case 37:
					if (grille[posCellLeft - 1][posCellTop] == 2){
						player.style.left = (posCellLeft - 1) * 64 + 'px',
						player.style.background = "url(img/bomberman.png)";
					}
					break;
				
				//droite				
				case 39:
					if (grille[posCellLeft + 1][posCellTop] == 2){
						player.style.left = (posCellLeft + 1) * 64 + 'px';
						player.style.background = "url(img/bomberman.png)";
					}
					break;
		
				//bomb
				case 32:
					insertBomb();
				//if (posInitial === 0){
				//		bomb.style.left = bombermanLeft + "px";
				//		bomb.style.top = bombermanTop + "px";
				//		bomb.style.background = "url(img/bomb.png)";
				//		bomb.style.display = "block";
				//	}
				//	break
		}
	}
})


