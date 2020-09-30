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

    var validWeight = true;
    var validHeight = true;

    if (weight <= 0 || weight >= 1000) {
        validWeight = false;
        tdBmi.textContent = "Invalid weight!";
        patient.classList.add("invalid-patient");
    }

    if (height <= 0 || height >= 3.00) {
        validHeight = false;
        tdBmi.textContent = "Invalid height!";
        patient.classList.add("invalid-patient");
    }

    if (validHeight && validWeight) {
        var bmi = weight / (height * height);
        tdBmi.textContent = bmi.toFixed(2);
    }    
}

var insertButton = document.querySelector("#add-patient");
insertButton.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#insertion-form");

    var name = form.name.value;
    var weight = form.weight.value;
    var height = form.height.value;
    var fat = form.fat.value;   

    var patientTr = document.createElement("tr");
    var nameTd = document.createElement("td");
    var weightTd = document.createElement("td");
    var heightTd = document.createElement("td");
    var fatTd = document.createElement("td");
    var bmiTd = document.createElement("td");

    nameTd.textContent = name;
    weightTd.textContent = weight;
    heightTd.textContent = height;
    fatTd.textContent = fat;

    patientTr.appendChild(nameTd);
    patientTr.appendChild(weightTd);
    patientTr.appendChild(heightTd);
    patientTr.appendChild(fatTd);

    var table = document.querySelector("#patients-table");
    table.appendChild(patientTr);

})