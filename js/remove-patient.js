var patientsTable = document.querySelector("#patients-table");

patientsTable.addEventListener("dblclick", function(event){
    if (event.target.tagName == 'TD') {
        tableRowPatient = event.target.parentNode;
        tableRowPatient.classList.add("fadeOut");
        setTimeout(function(){
            tableRowPatient.remove();
        }, 500);    
    }
});