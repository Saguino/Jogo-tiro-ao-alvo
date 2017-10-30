//Definição dos vetores
var vx = []; 
var vy = [];
var vdx = []
var vdy = []
var vtam = [];
var dificuldade = parseInt(prompt("Escolha a dificuldade 1, 2 ou 3")); 		
var vcorR = []; 
var vcorG = [];
var vcorB = [];
var qtalvos = (dificuldade*2)


var t = 0;
var temporizador = 0;



	// os códigos de "setup" só executam uma vez 
function setup() {
	createCanvas(1366, 600);
	fill(150);
	frameRate(30);
	
	//Definição dos valores dos vetores
	for ( i = 0; i < qtalvos ; i++) { 
    vx[i] = random(0, 1366); 
    vy[i] = random(0, 600);
    vtam[i] = random(30,35);
    vdx[i] = random(-6,6);
    vdy[i] = random(-6,6);
    vcorR[i] = random(0,255);
    vcorG[i] = random(0,255);
    vcorB[i] = random(0,255);
}
}

	// os códigos de "draw" executam constantemente 
function draw() {
	
	background(255, 255, 255);   
	
	//arma
	line(730, 600, 720, 500);
	strokeWeight(2);    
	
	// personagem
	ellipse(683, 500, 90, 120);
	line(683, 585, 683, 560); 
	ellipse(683, 600, 100, 30);
	
	//Protótipo de mira (crosshair) 
    ellipse(mouseX, mouseY, 20, 20);
	
	
	//mecânica dos alvos móveis e suas cores
	for ( i = 0; i < qtalvos ; i++) {
    fill(vcorR[i], vcorG[i], vcorB[i]);
    vx[i] = vx[i] + vdx[i];
    vy[i] = vy[i] + vdy[i]; 
    if ( vx[i] > width || vx[i] < 0 ) {
       vdx[i] = -vdx[i]; 
       vcorR[i] = random(0,255);
       vcorG[i] = random(0,255);
       vcorB[i] = random(0,255);
    }
    if ( vy[i] > height || vy[i] < 0 ) {
       vdy[i] = -vdy[i]; 
      
    }
    
    ellipse(vx[i],vy[i],vtam[i],vtam[i]);	
}

	//informações 
	
	t++
	temporizador = temporizador + 1
	tempo = temporizador/30
		
	//informações sobre o jogo na tela
	
	text("Tempo de jogo: " +tempo +"s", 300, 30);
	text("Acertos: " , 550, 30);
	text("Dificuldade: " +dificuldade , 700, 30);

}
  
