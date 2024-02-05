// Declare variables
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// grab the scores
let scorehtml = document.getElementById("score");
score = 0;

// variables for the board
tileSize = 20;
tileCount = 20;

// Dictates the speed
speed = 10;

// velocity for snake
let vx = 0;
let vy = 0;


// variables for the snake and apples
let food = {
    x: 14 * tileCount,
    y: 10 * tileCount,
};


// Properties for the snake
let snakeHead = {
    x: 6 * tileCount,
    y: 10 * tileCount,
};

let snakeBody = []

class Tail {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

let segments = 2;


// arrays for the rows of the board (20x20)
// sorry for the code vomit
let row = [0, 1 * tileCount, 2 * tileCount, 3 * tileCount, 4 * tileCount, 5 * tileCount, 6 * tileCount, 7 * tileCount, 8 * tileCount, 9 * tileCount, 10 * tileCount, 11 * tileCount, 12 * tileCount, 13 * tileCount, 14 * tileCount, 15 * tileCount, 16 * tileCount, 17 * tileCount, 18 * tileCount, 19 * tileCount];

// arrays for the columns of the board
// sorry again for the code vomit
let col = [0, 1 * tileCount, 2 * tileCount, 3 * tileCount, 4 * tileCount, 5 * tileCount, 6 * tileCount, 7 * tileCount, 8 * tileCount, 9 * tileCount, 10 * tileCount, 11 * tileCount, 12 * tileCount, 13 * tileCount, 14 * tileCount, 15 * tileCount, 16 * tileCount, 17 * tileCount, 18 * tileCount, 19 * tileCount];

//Run the game
function run() {

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    drawSnake();
    updateSnake();
    
    drawFood();
    eatFood();

    let timer = setTimeout(run, (1000/speed));

    if(vx === 0 && vy === 0){
        return
    }

    if (gameOver() === true){
        clearTimeout(timer);
            console.log("its joever");
    }
}

run();



// Check if snake hit the wall or itself
function gameOver(){
    //while(vx > 0 && vy > 0){

        for(i=0; i<snakeBody.length; i++){
            let parts = snakeBody[i];
    
            if(snakeHead.x === parts.x && snakeHead.y === parts.y){
                console.log("snake bit tail");
                return true;
            }
        }
            
    
        if(snakeHead.x < 0 || snakeHead.x > 380 || snakeHead.y < 0 || snakeHead.y > 380){
            console.log("snake bit wall");
            return true;
        }
    

    //}
}


// Draw Snake and its segments
function drawSnake(){

    ctx.fillStyle = "#05410B";
    ctx.strokeStyle = "#050B0B";

    for(i=0; i < snakeBody.length; i++){
        let parts = snakeBody[i];

        ctx.fillRect(parts.x+2, parts.y+2, tileSize-4, tileSize-4);
        ctx.strokeRect(parts.x, parts.y, tileSize, tileSize);
    }


    // ctx.fillStyle = "blue";
    // ctx.strokeStyle = "black";
    ctx.fillRect(snakeHead.x+2, snakeHead.y+2, tileSize-4, tileSize-4);
    ctx.strokeRect(snakeHead.x, snakeHead.y, tileSize, tileSize);

    snakeBody.push(new Tail(snakeHead.x, snakeHead.y));
    
    if(snakeBody.length > segments){
        snakeBody.shift();
    }
    
}

// Update Snake location
function updateSnake(){
    snakeHead.x += vx;
    snakeHead.y += vy;
}


// Draw food
function drawFood(){

    ctx.fillStyle = "#80362D";
    ctx.strokeStyle = "black";
    ctx.fillRect(food.x+2, food.y+2, tileSize-4, tileSize-4);
    ctx.strokeRect(food.x, food.y, tileSize, tileSize);

}

// Update Food Location after eating
function eatFood(){
    if(food.x === snakeHead.x && food.y === snakeHead.y){
        food.x = row[Math.floor(Math.random() * row.length)];
        food.y = col[Math.floor(Math.random() * col.length)];

        segments++;
        score++;
        scorehtml.innerHTML = score;
        
    }
}

function idle(){
    if(vx != 0 && vy != 0){
        return false;
    }else{
        return true;
    }
}