function calculateBMI() {
    let height = document.getElementById('heightBox').value;
    let weight = document.getElementById('weightBox').value;
    let message = "";

    let bmi = (weight / ((height * height) / 10000)).toPrecision(4);

    if (bmi <= 18.5) {
        message = "You are under weight!";
        const output = document.querySelector('#output');
        output.style.color = '#EEED09';
    }
    else if (bmi > 18.5 && bmi <= 24.9) {
        message = "You have a healthy weight!";
        const output = document.querySelector('#output');
        output.style.color = '#138808';
    }
    else if (bmi > 24.9 && bmi <= 29.9) {
        message =  "You are over weight!";
        const output = document.querySelector('#output');
        output.style.color = '#692B57';
    }
    else if (bmi > 29.9) {
        message = "You are Obese!";
        const output = document.querySelector('#output');
        output.style.color = '#BA4E00';
    }
    else {
        message = "Please enter a valid input!";
        const output = document.querySelector('#output');
        output.style.color = '#C21807';
    }
    document.getElementById("output").innerHTML = message;
}