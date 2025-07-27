const canvasGame = document.getElementById('CanvasGame');
const ctxGame = canvasGame.getContext('2d');

const canvasPoints = document.getElementById('CanvasPoints');
const ctxPoints = canvasPoints.getContext('2d');

let firstDrop = true;

// Ball variables
let ballCenterX = canvasGame.width / 2; // Get the center of the canvas
let ballCenterY = canvasGame.height / 2;// Get the center of the canvas
const radius = 10; // The radius of the circle
let speedBallX = 5;
let speedBallY = 5;

// Racket Variables
let racketWidth = 100;
let racketHeight = 13;
let speedRacket = 20;
let racketX = canvasGame.width / 2 - racketWidth / 2;

let PressRight = false;
let PressLeft = false;

ctxPoints.clearRect(0, 0, canvasPoints.width, canvasPoints.height); // Limpia antes de dibujar
ctxPoints.font = '20px Arial';
ctxPoints.fillStyle = 'green';
ctxPoints.fillText(`By: Esteban`, 20, 40); // Dibuja el texto

// Function to move the ball
function drawGame() {

    

    ctxGame.clearRect(0, 0, canvasGame.width, canvasGame.height); // Clear the canvas

    ballCenterY += speedBallY; // Move the ball vertically
    
    if (ballCenterY + radius >= canvasGame.height || ballCenterY - radius <= 0) // if the ball is out of the canvas
    {
        speedBallY = speedBallY * -1; // Reverse the direction
        
    }
    ballCenterX += speedBallX; // Move the ball horizontally
    
    if (ballCenterX + radius >= canvasGame.width || ballCenterX - radius <= 0) // if the ball is out of the canvas
    {
        speedBallX = speedBallX * -1; // Reverse the direction
        
    }

    // Move the racket
    if(PressRight)
    {
        if(racketX + racketWidth < canvasGame.width){
        racketX += speedRacket;
        PressRight = false;
        }
    }
    if(PressLeft)
    {
        if(racketX > 0){
        racketX -= speedRacket;
        PressLeft = false;
        }
    }

    // if the ball hits the racket
    if (ballCenterY + radius >= canvasGame.height - 50 && ballCenterX + radius >= racketX && ballCenterX - radius <= racketX + racketWidth)
    {
        speedBallY = speedBallY * -1; // Reverse the direction
        if(ballCenterX < racketX + racketWidth / 2) // left side
        {

            console.log("hit left side");
        }
        else if(ballCenterX > racketX + racketWidth / 2)
        {
            
            console.log("hit right side");
        }
    }
    

    ctxGame.fillStyle = 'white'; // The color of the racket
    ctxGame.strokeStyle = 'red'; // The color of the border
    ctxGame.fillRect(racketX, canvasGame.height - 50, racketWidth, racketHeight); // Draw the racket
    ctxGame.strokeRect(racketX, canvasGame.height - 50, racketWidth, racketHeight); // Stroke the racket

    ctxGame.fillStyle = 'white'; // The color of the circle
    ctxGame.strokeStyle = 'red'; // The color of the border
    ctxGame.beginPath();
    ctxGame.arc(ballCenterX, ballCenterY, radius, 0, 2 * Math.PI); // Draw the circle
    ctxGame.fill(); // Fill the circle
    ctxGame.stroke(); // Stroke the circle




    requestAnimationFrame(drawGame); // Call the function recursively
}

drawGame();

// Function to move the racket
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
        PressRight = true;
    } else if (event.key === "ArrowLeft") {
        PressLeft = true;
    }
});
