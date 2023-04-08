 //variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;


//velocidade da bolinha
let velocidadeXBolinha = 4;
let velocidadeYBolinha = 4;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variaveis raquete oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;


let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//som do jogo
let raquetada;
let ponto;
let trilha

function preload (){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
  
  
}


function draw() {
  background(34, 139,34 );
  linhaDoMeio();
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostrarRaquete(xRaquete,yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostrarRaquete(xRaqueteOponente,yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
  verificaColisaoRaqueteBorda();
  verificaColisaoRaqueteOponenteBorda();
} 

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio > width || xBolinha - raio < 0)  {
     velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
     velocidadeYBolinha *= -1;
  }
}



function linhaDoMeio(){
  line(300, 400,300 , 0);
  fill(color(255));
}
  
  
function mostrarRaquete(x,y){
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(87)){
    yRaquete -= 12;
  }
    if (keyIsDown(83)){
    yRaquete += 12;
  } 
} 
function verificaColisaoRaquete(){
  if(xBolinha - raio < xRaquete + raqueteComprimento&&
       yBolinha - raio < yRaquete + raqueteAltura &&
        yBolinha + raio > yRaquete){
         velocidadeXBolinha *= -1;
           raquetada.play();
  }   
}

function verificaColisaoRaquete(x,y){
colidiu = 
collideRectCircle(x, y, raqueteComprimento , raqueteAltura, xBolinha  ,  yBolinha, raio);
  if (colidiu){
     velocidadeXBolinha *= -1;
    raquetada.play();
  }
}
 

function verificaColisaoRaqueteBorda(){
  if (yRaquete < 0 )  {
     yRaquete = 0; 
  }
  if (yRaquete + 90 > height){
      yRaquete = 310 ;
  }
}

function verificaColisaoRaqueteOponenteBorda(){
  if (yRaqueteOponente < 0 )  {
     yRaqueteOponente = 0; 
  }
  if (yRaqueteOponente + 90 > height){
      yRaqueteOponente = 310;
  }
}
function movimentaRaqueteOponente(){
  if (keyIsDown(UP_ARROW)){
   yRaqueteOponente -= 12;
  }
    if (keyIsDown(DOWN_ARROW)){
    yRaqueteOponente += 12;
  } 
} 


function incluiPlacar (){
  stroke(255)
  textAlign (CENTER);
  textSize (18);
  fill(color(255, 140, 0));
  rect (130, 12, 40, 20, 5 );
  fill (0);
  text(meusPontos, 150, 28);
  fill(color(255, 130, 0));
  rect (450, 12, 40, 20, 5);
  fill (0);
  text(pontosDoOponente, 470, 28);
}

function marcaPonto (){
  if (xBolinha > 590) {
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 10 ) {
    pontosDoOponente += 1;
    ponto.play();
  }
}

