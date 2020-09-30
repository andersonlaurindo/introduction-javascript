var insertButton = document.querySelector("#add-patient");
insertButton.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#insertion-form");
    var patient = getPatientFromForm(form);

    var errors = validatePatient(patient);
    if(errors.length > 0){
        showMessageErrors(errors);
        return;
    }

    insertPatientTable(patient);
    form.reset();
    cleanMessageErrors();
});

function insertPatientTable(patient){
    var patientTr = createTableRow(patient);
    var table = document.querySelector("#patients-table");
    table.appendChild(patientTr);
}

function getPatientFromForm(form){
    var patient = {
        name: form.name.value,
        weight: form.weight.value,
        height: form.height.value,
        fat: form.fat.value,
        bmi: calculateBmi(form.weight.value, form.height.value)
    }

    return patient;
}

function createTableRow(patient){
    var patientTr = document.createElement("tr");
    patientTr.classList.add("patient");

    patientTr.appendChild(createTableData(patient.name, "info-name"));
    patientTr.appendChild(createTableData(patient.weight, "info-weight"));
    patientTr.appendChild(createTableData(patient.height, "info-height"));
    patientTr.appendChild(createTableData(patient.fat, "info-fat"));
    patientTr.appendChild(createTableData(patient.bmi, "info-bmi"));

    return patientTr;
}

function createTableData(tdTextContent, tdClass){
    var td = document.createElement("td");

    td.textContent = tdTextContent;
    td.classList.add(tdClass);

    return td;
}

function validatePatient(patient){
    var errors = [];

    if(patient.name.length == 0){
        errors.push("Invalid name!");
    }

    if(patient.weight.length == 0){
        errors.push("Invalid weight!");
    }

    if(!validateWeight(patient.weight)){
        errors.push("Invalid weight!");
    }

    if(patient.height.length == 0){
        errors.push("Invalid height!");
    }

    if(!validateHeight(patient.height)){
        errors.push("Invalid height!");
    }

    if(patient.fat.length == 0){
        errors.push("Invalid body fat!");
    }

    return errors;
}

function showMessageErrors(errors){
    var ul = document.querySelector("#error-message");
    cleanMessageErrors();
    errors.forEach(function(error) {
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}

function cleanMessageErrors(){
    var ul = document.querySelector("#error-message");
    ul.innerHTML = "";
}