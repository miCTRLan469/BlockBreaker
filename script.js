const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// General variables
let centerX = canvas.width / 2; // Get the center of the canvas
let centerY = canvas.height / 2;// Get the center of the canvas

// Ball variables
const radius = 10; // The radius of the circle
ctx.fillStyle = 'white'; // The color of the circle
ctx.strokeStyle = 'red'; // The color of the border
let speedBallX = 5;
let speedBallY = 5;
let ballCollision = true;

// Draw the ball
ctx.beginPath(); // Start the path
ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI); // Draw the circle
ctx.fill(); // Fill the circle
ctx.stroke(); // Stroke the circle "Borde del circulo"

// Function to move the ball
function drawFrameBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    centerY += speedBallY; // Move the ball vertically
    if(centerY + radius >= canvas.height || centerY - radius <= 0) // if the ball is out of the canvas
    {
        speedBallY = speedBallY * -1; // Reverse the direction 
    }
    centerX += speedBallX; // Move the ball horizontally
    if(centerX + radius >= canvas.width || centerX - radius <= 0)
    {
        speedBallX = speedBallX * -1;
    }

    ctx.beginPath(); // Start the path
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI); // Draw the circle
    ctx.fill(); // Fill the circle
    ctx.stroke(); // Stroke the circle
    requestAnimationFrame(drawFrameBall); // Call the function recursively
}

drawFrameBall();