const progress = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

// default value for active element
let currentActive = 1;

nextBtn.addEventListener('click', () => {
    currentActive++;
    console.log(currentActive);
    // prevent currentActive from increasing passed 4
    if(currentActive > circles.length) {
        currentActive = circles.length;
    }
    console.log(currentActive);
    update();
});

prevBtn.addEventListener('click', () => {
    currentActive--;
    console.log(currentActive);
    // prevent currentActive from decreasing passed 1
    if(currentActive < 1) {
        currentActive = 1;
    }
    update();
});

// update the DOM
const update = () => {
    circles.forEach((circle, index) => {
        // check if index of circle is less than current active
        if(index < currentActive){
            // add active class
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    // get number of active circles
    const actives = document.querySelectorAll('.active');
    // convert active circles and cirlces into a percentage
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    if(currentActive = 1) {
        prevBtn.disabled = true;
    } else if (currentActive === circles.length) {
        nextBtn.disabled = true;
    } else {
        prevBtn.disabled = true;
        nextBtn.disabled = true;
    }
};