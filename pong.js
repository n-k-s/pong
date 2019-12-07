
function setup() {
    createCanvas(windowWidth, windowHeight);
}
let Pong = {
    globalCount: 0,
    xDiagIncreasing: true,
    yDiagIncreasing: false,
    x: 300,
    y: 150,
    hitCount: 0,
    speed: 2

    //todo make ball speed be based on hitcount, each hit makes the ball go faster
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
    if (!Pong.xDiagIncreasing)
        fill(191, 217, 255);
    else
        fill(255, 194, 191);
    square(Pong.x, Pong.y, 20);
    //INSTRUCTIONS
    if (Pong.globalCount < 400)
    {
        Pong.globalCount++;
        textSize(20);
        textAlign(CENTER);
        text('Red Player: Up - ESC   Down - CONTROL', windowWidth / 2, windowHeight / 2);
        text('Blue Player: Up - Up arrow   Down - Down arrow', windowWidth / 2, (windowHeight / 2) - 30);
        text('Speed down - ,        Speed up - .  ', windowWidth / 2, (windowHeight / 2) + 30);
    }
    textSize(15);
    //red player
    noStroke();
    fill(245, 54, 54);
    rect(0, redPlayer.yPosition, 20, 100);
    //red player score
    fill(50);
    text(redPlayer.score, 5, redPlayer.yPosition + 30);
    //red player controls
    if (keyIsDown(ESCAPE) && redPlayer.yPosition > 0)
    {
            redPlayer.yPosition -= 5;
    }
    if (keyIsDown(CONTROL) && redPlayer.yPosition < windowHeight - 100)
    {
        redPlayer.yPosition += 5;
    }
    //blue player controls
    if (keyIsDown(UP_ARROW) && bluePlayer.yPosition > 0)
    {
        bluePlayer.yPosition -= 5;
    }
    if (keyIsDown(DOWN_ARROW) && bluePlayer.yPosition < windowHeight - 100)
    {
        bluePlayer.yPosition += 5;
    }
    //blue player
    noStroke();
    fill(54, 73, 245);
    rect(windowWidth - 20, bluePlayer.yPosition, 20, 100);
    //blue player score
    fill(0,0,0);
    text(bluePlayer.score, windowWidth - 13, bluePlayer.yPosition + 30);

    //red wall collision
    if (Pong.x <= 20 && (Pong.y < redPlayer.yPosition + 100 && Pong.y > redPlayer.yPosition + 0))
    {
        Pong.xDiagIncreasing = !Pong.xDiagIncreasing;
        Pong.yDiagIncreasing = !Pong.yDiagIncreasing;
        Pong.hitCount++;
    }
    //blue wall collision
    if (Pong.x >= windowWidth - 38 && (Pong.y < bluePlayer.yPosition + 100 && Pong.y > bluePlayer.yPosition + 0))
    {
        Pong.xDiagIncreasing = !Pong.xDiagIncreasing;
        Pong.yDiagIncreasing = !Pong.yDiagIncreasing;
        Pong.hitCount++;
    }




    //Wall Collision


    if (Pong.xDiagIncreasing)
    {
        Pong.x += Pong.speed;
        if(Pong.x > windowWidth - 20)
        {
            Pong.xDiagIncreasing = false;
            redPlayer.score++;
            Pong.hitCount++;
        }
    }
    else if (!Pong.xDiagIncreasing)
    {
        Pong.x -= Pong.speed;
        if(Pong.x < 0)
        {
            Pong.xDiagIncreasing = true;
            bluePlayer.score++;
            Pong.hitCount++;
        }
    }
    if (Pong.yDiagIncreasing)
    {
        Pong.y += Pong.speed + (Pong.hitCount * .5);
        if(Pong.y > windowHeight - 20)
        {
            Pong.yDiagIncreasing = false;
        }
    }
    else if (!Pong.yDiagIncreasing)
    {
        Pong.y -= Pong.speed + (Pong.hitCount * .5);
        if(Pong.y < 0)
        {
            Pong.yDiagIncreasing = true;
        }
    }
}
//controls
function keyPressed()
{
    //Speed controls
    if (key == ',' && Pong.speed > 0) {
        Pong.speed -= .5;
    }
    if (key == '.') {
        Pong.speed += .5;
    }
    if (key =='0')
    {
        Pong.speed = 0.0;
    }
    if (key =='1')
    {
        Pong.speed = 1.0;
    }
    if (key =='2')
    {
        Pong.speed = 2.0;
    }
    if (key =='3')
    {
        Pong.speed = 3.0;
    }
    if (key =='4')
    {
        Pong.speed = 4.0;
    }
    if (key =='5')
    {
        Pong.speed = 5.0;
    }
    if (key =='6')
    {
        Pong.speed = 6.0;
    }
    if (key =='7')
    {
        Pong.speed = 7.0;
    }
    if (key =='8')
    {
        Pong.speed = 8.0;
    }
    if (key == '9')
    {
        Pong.speed = 9.0;
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



