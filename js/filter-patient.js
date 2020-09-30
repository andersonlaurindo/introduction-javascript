var filterField = document.querySelector("#table-filter");

filterField.addEventListener("input", function(){
    var patients = document.querySelectorAll(".patient");

    if(this.value.length > 0){
        for(var i = 0; i < patients.length; i++){
            var patient = patients[i];
            var tdName = patient.querySelector(".info-name");
            var name = tdName.textContent;
            var regularExpression = new RegExp(this.value, "i");
            if(!regularExpression.test(name)) {
                patient.classList.add("invisible");
            }else{
                patient.classList.remove("invisible");
            }
        }
    }else{
        for(var i = 0; i < patients.length; i++){
            var patient = patients[i];
            patient.classList.remove("invisible");
        }
    }
})