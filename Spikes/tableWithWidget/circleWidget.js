let existingWidget = { 
    progressCircle: document.getElementById('existingProgress'),
    sliderValue: document.getElementById('existingSliderValue')
};

let proposedWidget = { 
    progressCircle: document.getElementById('proposedProgress'),
    sliderValue: document.getElementById('proposedSliderValue')
};

let existingRoe = toPercentage(.02);
let proposedRoe = toPercentage(.09);

setProgress(existingWidget, existingRoe, true);
setProgress(proposedWidget, proposedRoe, true);

function setProgress(widget, roe, showVal) {
    if (showVal == true)
        widget.sliderValue.innerHTML = roe + '%';

    let radius = widget.progressCircle.getAttribute('r');
    let circumference = 2 * Math.PI * radius;

    let progress_in_percent = roe / 18 * 100;
    if (progress_in_percent > 100) progress_in_percent = 100;
    let progress_in_pixels = circumference * (100 - progress_in_percent) / 100;
    widget.progressCircle.style.strokeDashoffset = progress_in_pixels + 'px';

    if (roe < 9) {
        widget.progressCircle.style.stroke = '#FA3232'; // red
        // widget.sliderValue.style.color = '#FA3232';
    }
    else if (roe >= 18) {
        widget.progressCircle.style.stroke = '#329664'; // green
        // widget.sliderValue.style.color = '#329664';
    }
    else {
        widget.progressCircle.style.stroke = '#FAC800'; // gold
        // widget.sliderValue.style.color = '#FAC800';
    }
}

function toPercentage(roe) {
    return (roe * 100).toFixed(2);
}