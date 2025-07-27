const steps = document.querySelectorAll('#progressbar li');
const progressbar = document.querySelector('.progress-bar');
const content = document.querySelectorAll('.step-container fieldset');
let currentstep = 0;

function updateBar(currentstep) {
    const percentage = (currentstep / (steps.length - 1)) * 100;
    progressbar.style.width = percentage + '%';
    steps.forEach(element => {
        element.style.color = 'grey'; // set default color
    });
    if (currentstep > 0 && currentstep <= steps.length) {
        steps[currentstep - 1].style.color = 'darkgreen';
    }
}

function updateContent() {
    // Hide all fieldsets
    content.forEach(fieldset => fieldset.style.display = "none");
    // Show the current one if in bounds
    if (currentstep >= 0 && currentstep < content.length) {
        content[currentstep].style.display = "block";
    }
}

Array.from(document.getElementsByClassName('next-step')).forEach(element => {
    element.addEventListener("click", () => {
        if (currentstep < steps.length - 1) {
            currentstep++;
            updateBar(currentstep);
            updateContent();
        }
    });
});

Array.from(document.getElementsByClassName('previous-step')).forEach(element => {
    element.addEventListener("click", () => {
        if (currentstep > 0) {
            currentstep--;
            updateBar(currentstep);
            updateContent();
        }
    });
});

// Initialize on page load
updateBar(currentstep);
updateContent();