





var objCep = document.querySelector("#idcep");
var objsaida = document.querySelector("#idsaida");


objCep.onblur = function () {
    var objRegExp = new RegExp("^[0-9]{5}\-[0-9]{3}$");
    if (objRegExp.test(objCep.value) == true) {
        objCep.style.borderColor = "#008000";
        objsaida.style.color = "#008000";
        objsaida.innerHTML = "Campo preenchido com sucesso.";
    } else {
        objCep.style.borderColor = "#FF0000";
        objsaida.style.color = "#FF0000";
        objsaida.innerHTML = "CEP inválido! verifique o campo e tente novamente.";
    }
}

objCep.onfocus = function () {
    objCep.style.borderColor = "";
    objCep.value = "";
    objsaida.style.color = "";
    objsaida.innerHTML = "";


}




