
function setup() {
    createCanvas(windowWidth, windowHeight);
}
let Pong = {

    xDiagIncreasing: true,
    yDiagIncreasing: false,
    x: 300,
    y: 150,
    speed: 1.5
}

let bluePlayer = {
    score: 0,
    yPosition: 0
}
let redPlayer = {
    score: 0,
    yPosition: 0

}


function draw() {


    background(0, 0, 0);
    //Pong ball
    noStroke();
    fill(random(0, 255), random(0, 255), 150);
    square(Pong.x, Pong.y, 20);

    //red player
    noStroke();
    fill(255,0,0)
    rect(0, redPlayer.yPosition, 20, 50);

    //blue player



    //Wall Collision
    if (Pong.xDiagIncreasing)
    {
        Pong.x += Pong.speed;
        if(Pong.x > windowWidth - 20)
        {
            Pong.xDiagIncreasing = false;
        }
    }
    else if (!Pong.xDiagIncreasing)
    {
        Pong.x -= Pong.speed;
        if(Pong.x < 0)
        {
            Pong.xDiagIncreasing = true;
        }
    }
    if (Pong.yDiagIncreasing)
    {
        Pong.y += Pong.speed;
        if(Pong.y > windowHeight - 20)
        {
            Pong.yDiagIncreasing = false;
        }
    }
    else if (!Pong.yDiagIncreasing)
    {
        Pong.y -= Pong.speed;
        if(Pong.y < 0)
        {
            Pong.yDiagIncreasing = true;
        }
    }
}
function mousePressed()
{
    Pong.x = mouseX;
    Pong.y = mouseY;
    Pong.yDiagIncreasing = false;
    Pong.xDiagIncreasing = true;
}
function collision()
{
    console.log("COLIDE");
    Pong.xDiagIncreasing = !Pong.xDiagIncreasing;
    Pong.yDiagIncreasing = !Pong.yDiagIncreasing;
}


