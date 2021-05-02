 var engine, world, bodies;
var canvas;
var surface1, surface2, surface3, surface4;
var box, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    music = loadSound("music.mp3");

    //create 4 different surfaces
    surface1 = createSprite(100, 550, 180, 20);
    surface1.shapeColor = "red";

    surface2 = createSprite(300, 550, 180, 20);
    surface2.shapeColor = "orange";

    surface3 = createSprite(500, 550, 180, 20);
    surface3.shapeColor = "yellow";

    surface4 = createSprite(700, 550, 180, 20);
    surface4.shapeColor = "green";

    //create box sprite and give velocity 
    box = createSprite(random(20, 750), 10, 30, 30);
    box.shapeColor = "white";
    box.setVelocity(2,7);   
}

function draw() {
    background("lightblue");
    
    //create edgeSprite
    edges = createEdgeSprites();

    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)) {
        box.shapeColor = "red";
        music.play();
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)) {
        box.shapeColor = "orange";
    }

    if(surface3.isTouching(box)) {
        box.shapeColor = "yellow";
        box. setVelocity(0, 0);
        music.stop();
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)) {
        box.shapeColor = "green";
    }

    box.bounceOff(edges);
    box.display();

    surface1.display();
    surface2.display();
    surface3.display();
    surface4.display();
}
