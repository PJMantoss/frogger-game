document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div');
    const timeLeft = document.querySelector('#time-left');
    const result = document.querySelector('#result');
    const startBtn = document.querySelector('#button');
    const carsLeft = document.querySelector('.car-left');
    const carsRight = document.querySelector('.car-right');
    const logsLeft = document.querySelector('.log-left');
    const logsRight = document.querySelector('.log-right');

    const width = 9;
    let currentIndex = 76;
    let timerId;

    //Render frog on starting-block
    squares[currentIndex].classList.add('frog');

    //Function that handles Frog's movement
    moveFrog = e => {
        squares[currentIndex].classList.remove('frog');

        switch(e.keyCode){
            case 37:
                if(currentIndex % width !== 0) currentIndex -= 1;
                break;
            case 38:
                if(currentIndex - width >= 0) currentIndex -= width;
                break;
            case 39:
                if (currentIndex % width < width - 1) currentIndex += 1;
                break;
            case 40:
                if(currentIndex + width < width * width) currentIndex += width
        }

        squares[currentIndex].classList.add('frog');
        lose();
        win();
    }

    //move Cars
    autoMoveCars = () => {
        carsLeft.forEach(carLeft => moveCarLeft(carLeft));
        carsRight.forEach(carRight => moveCarRight(carRight))
    }

    // Move Car Left on a time loop
    moveCarLeft = carLeft => {
        switch(true){
            case carLeft.classList.contains('c1'):
                carLeft.classList.remove('c1');
                carLeft.classList.add('c2');
                break;
            case carLeft.classList.contains('c2'):
                carLeft.classList.remove('c2');
                carLeft.classList.add('c3');
                break;
            case carLeft.classList.contains('c3'):
                carLeft.classList.remove('c3');
                carLeft.classList.add('c1');
                break;
        }
    }

    //Move Car Right on a time loop
    moveCarRight = carRight => {
        switch(true){
            case carRight.classList.contains('c1'):
                carRight.classList.remove('c1');
                carRight.classList.add('c3');
                break;
            case carRight.classList.contains('c2'):
                carRight.classList.remove('c2');
                carRight.classList.add('c1');
                break;
            case carRight.classList.contains('c3'):
                carRight.classList.remove('c3');
                carRight.classList.add('c2');
                break;
        }
    }

    //move logs
    autoMoveLogs = () => {
        logsLeft.forEach(logLeft => moveLogLeft(logLeft));
        logsRight.forEach(logRight => moveLogRight(logRight))
    }


})