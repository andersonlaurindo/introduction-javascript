var title = document.querySelector(".title");
title.textContent = "ABC Nutritionists";

var patients = document.querySelectorAll(".patient");

for(var i = 0; i < patients.length; i++){
    var patient = patients[i];

    var tdWeight = patient.querySelector(".info-weight");
    var weight = tdWeight.textContent;

    var tdHeight = patient.querySelector(".info-height");
    var height = tdHeight.textContent;

    var tdBmi = patient.querySelector(".info-bmi");

    var validWeight = validateWeight(weight);
    var validHeight = validateHeight(height);

    if (!validWeight) {
        tdBmi.textContent = "Invalid weight!";
        patient.classList.add("invalid-patient");
    }

    if (!validHeight) {
        tdBmi.textContent = "Invalid height!";
        patient.classList.add("invalid-patient");
    }

    if (validHeight && validWeight) {
        var bmi = calculateBmi(weight, height);
        tdBmi.textContent = bmi;
    }    
}

function validateWeight(weight){
    if (weight >= 0 && weight <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validateHeight(height) {
    if (height >= 0 && height <= 3.0) {
        return true;
    } else {
        return false;
    }
}

function calculateBmi(weight, height){
    var bmi = 0;

    bmi = weight / (height * height);

    return bmi.toFixed(2);
}