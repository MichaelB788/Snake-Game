
addEventListener("keydown", function(e) {
    if (e.code === "ArrowDown" && vy === 0){
        vy = 20;
        vx = 0;
    }
})

addEventListener("keydown", function(e) {
    if (e.code === "ArrowUp" && vy === 0){
        vy = -20;
        vx = 0;
    }
})

addEventListener("keydown", function(e) {
    if (e.code == "ArrowRight" && vx === 0){
        vx = 20;
        vy = 0;
    }
})

addEventListener("keydown", function(e) {
    if (e.code == "ArrowLeft" && vx === 0){
        vx = -20;
        vy = 0;
    }
})