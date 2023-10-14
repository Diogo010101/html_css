var objTelefone = document.querySelector("#idtelefone");
var objSaida = document.querySelector("#idsaida");

objTelefone.onblur = function(){
    var objRegExp = new RegExp("^([0-9]{2})([0-9]{5}[0-9]{4})$")
    if(objRegExp.test(objTelefone.value) == true){
        objTelefone.style.borderColor = "#008800";
        objSaida.style.color = "#008800";
        objSaida.innerHTML = `Campo preenchido com sucesso`;
        console.log(objTelefone.value);
        console.log(objRegExp);
    }else{
        objTelefone.style.borderColor = "#ff0000";
        objSaida.style.color = "#ff0000";
        objSaida.innerHTML = `${objTelefone.value} Não é um valor válido`;
        objTelefone.value = "";

        }
}






