var searchButton = document.querySelector("#search-patients");
searchButton.addEventListener("click", function(event){
    var xhr = new XMLHttpRequest();
    var api = "https://api.jsonbin.io/b/5f74fc6e7243cd7e82477bcb";
    xhr.open("GET", api);
    xhr.addEventListener("load", function(){
        if(xhr.status == 200){
            errorSearch.classList.add("invisible");
            var response = xhr.responseText;
            var patients = JSON.parse(response);
            console.log(patients);
            patients.forEach(function(patient){
                insertPatientTable(patient);
            });
        }else{
            var errorSearch = document.querySelector("#error-search");
            errorSearch.classList.remove("invisible");
        }
    })
    xhr.send();
});