
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
    yPosition: 100
}
let redPlayer = {
    score: 0,
    yPosition: 100

}


function draw() {


    background(0, 0, 0);
    //Pong ball
    noStroke();
    fill(random(0, 255), random(0, 255), 150);
    square(Pong.x, Pong.y, 20);

    //red player
    noStroke();
    fill(245, 54, 54);
    rect(0, redPlayer.yPosition, 20, 100);
    //red player score
    fill(50);
    text(redPlayer.score, 5, redPlayer.yPosition + 30);


    //red player controls
    if (keyIsDown(UP_ARROW) && redPlayer.yPosition > 0)
    {
            redPlayer.yPosition -= 5;
    }
    if (keyIsDown(DOWN_ARROW) && redPlayer.yPosition < windowHeight - 100)
    {
        redPlayer.yPosition += 5;
    }

    //blue player
    noStroke();
    fill(54, 73, 245);
    rect(windowWidth - 20, bluePlayer.yPosition, 20, 100);
    //blue player score
    fill(0,0,0);
    text(bluePlayer.score, windowWidth - 17, bluePlayer.yPosition + 30);
    //red player controls
    if (keyIsDown(ESCAPE) && bluePlayer.yPosition > 0)
    {
        bluePlayer.yPosition -= 5;
    }
    if (keyIsDown(CONTROL) && bluePlayer.yPosition < windowHeight - 100)
    {
        bluePlayer.yPosition += 5;
    }
    //red wall collision
    if (Pong.x <= 20 && (Pong.y < redPlayer.yPosition + 100 && Pong.y > redPlayer.yPosition + 0))
    {
        Pong.xDiagIncreasing = !Pong.xDiagIncreasing;
        Pong.yDiagIncreasing = !Pong.yDiagIncreasing;
    }
    //blue wall collision
    if (Pong.x >= windowWidth - 38 && (Pong.y < bluePlayer.yPosition + 100 && Pong.y > bluePlayer.yPosition + 0))
    {
        Pong.xDiagIncreasing = !Pong.xDiagIncreasing;
        Pong.yDiagIncreasing = !Pong.yDiagIncreasing;
    }




    //Wall Collision


    if (Pong.xDiagIncreasing)
    {
        Pong.x += Pong.speed;
        if(Pong.x > windowWidth - 20)
        {
            Pong.xDiagIncreasing = false;
            redPlayer.score++;
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
//player controls
function keyPressed()
{
    if (key == 'w') {
        redPlayer.yPosition++;
    }
}


//mouse pressed detection
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


