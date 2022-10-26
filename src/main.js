function calculateBMI() {
    let height = document.getElementById('heightBox').value;
    let weight = document.getElementById('weightBox').value;
    let message = "";

    let bmi = (weight / ((height * height) / 10000)).toPrecision(4);

    if (height <= 250 || weight <= 150) {
        if (bmi <= 18.5) {
            message = "Under weight!";
        }
        else if (bmi > 18.5 && bmi <= 24.9) {
            message = "Healthy!";
        }
        else if (bmi > 24.9 && bmi <= 29.9) {
            message =  "Over weight!";
        }
        else if (bmi > 29.9) {
            message = "Obese!";
        }
        else {
            message = "Ivalid input!";
            bmi = "0.00";
        }
    }
    else {
        message = "Invalid Measurements";
        bmi = "0.00";
    }
    console.log(message,bmi);
    document.getElementById("output-bmi").innerHTML = bmi;
    document.getElementById("output-status").innerHTML = message;
}