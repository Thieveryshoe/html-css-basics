let yb = { id: function (str) { return document.getElementById(str) } };
let roe = .09;
let roePercentage = (roe * 100).toFixed(2);
setProgress(roePercentage, true);

function setProgress(roePercentage, showVal) {
    const progressCircle = 'progress';
    const sliderValue = 'sliderValue';

    if (showVal == true) yb.id(sliderValue).innerHTML = roePercentage + '%';

    let radius = yb.id(progressCircle).getAttribute('r');
    let circumference = 2 * Math.PI * radius;


    let progress_in_percent = roePercentage / 18 * 100;
    if (progress_in_percent > 100) progress_in_percent = 100;
    let progress_in_pixels = circumference * (100 - progress_in_percent) / 100;
    yb.id(progressCircle).style.strokeDashoffset = progress_in_pixels + 'px';

    
    if (roePercentage < 9) {
        yb.id(progressCircle).style.stroke = '#FA3232'; // red
        yb.id(sliderValue).style.color = '#FA3232';
    }
    else if (roePercentage >= 18) {
        yb.id(progressCircle).style.stroke = '#329664'; // green
        yb.id(sliderValue).style.color = '#329664';
    }
    else {
        yb.id(progressCircle).style.stroke = '#FAC800'; // gold
        yb.id(sliderValue).style.color = '#FAC800';
    }
}