var starImg,bgImg;
var star, starBody;
var fada,fadaImg;
var vozFada;
var ImgdeFundo;
//criar variável para sprite de fada e imgFada


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    //carregar animação de fada 
    fadaImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
    vozFada = loadSound("sound/joyMusic.mp3");
    ImgdeFundo = loadImage("images/starNight.png")
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada
    vozFada.play();

    //criar sprite de fada e adicionar animação para fada
    fada = createSprite(130,520);
    fada.addAnimation(fadaImg);

    planodeFundo = createSprite(200,200);
    planodeFundo.addImage(ImgdeFundo);

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    star = createSprite(685,30);
	star.addImage(starImg);
	star.scale = 0.1;


    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw() {
 
  background(ImgdeFundo)




    if(keyDown("left_arrow")) {
       fada.x -= 5;
   }

   if(keyDown("right_arrow")) {
    fada.x += 5;
}


  if(star.y > 470 && starBody.position.y > 470){
      Matter.Body.setStatic(starBody,true)
  }

  drawSprites();
   
}
