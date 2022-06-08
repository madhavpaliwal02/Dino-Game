score = 0
cross = true
    // localStorage.setItem('Best-Scrore', 0)

// start.addEventListener('onclick', 
function start() {
    // Action/ Movement/ Displacement
    document.onkeydown = function(e) {
        // console.log("key code: ", e.keyCode)
        // Jump
        if (e.keyCode == 38) {
            dino = document.querySelector('.dino');
            dino.classList.add('animateDino');
            setTimeout(() => {
                dino.classList.remove('animateDino')
            }, 700);
        }
        // Forward
        if (e.keyCode == 39) {
            dino = document.querySelector('.dino');
            dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
            dino.style.left = dinoX + 112 + "px";
        }
        // Backward
        if (e.keyCode == 37) {
            dino = document.querySelector('.dino');
            dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
            dino.style.left = (dinoX - 112) + "px";
        }
    }

    // Game Start
    // const start = document.getElementById('start')


    setInterval(() => {
        dino = document.querySelector('.dino');
        gameOver = document.querySelector('.gameOver');
        obstacle = document.querySelector('.obstacle');
        obstacle.classList.add('animateObs');

        dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

        ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
        oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

        offsetX = Math.abs(dx - ox);
        offsetY = Math.abs(dy - oy);

        // Checking the collision
        if (offsetX < 113 && offsetY < 52) {
            console.log('Over')
                // Collide - Game Over
            gameOver.style.visibility = 'visible';
            obstacle.classList.remove('animateObs');
            scoreCount.classList.add('scoreBar')
                // Exit function
            return;

            // Best Score
            // bestScore = localStorage.getItem('Best-Score')
            // if (bestScore < this.score) {
            //     localStorage.setItem('Best-Scrore', 0)
            // }
        } else if (offsetX < 145 && cross) {
            // Non-collision - Update Score
            score += 1;
            updateScore(score);
            cross = false;
            setTimeout(() => {
                cross = true;
            }, 1000);
            // Obstacle accelerate
            setTimeout(() => {
                aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
                newDur = aniDur - 0.1;
                obstacle.style.animationDuration = newDur + 's';
            }, 500);
        }
    }, 100);
}
// )

function updateScore(score) {
    scoreCount.innerHTML = "Your Score: " + score;
}