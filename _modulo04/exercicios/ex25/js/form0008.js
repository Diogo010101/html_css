var objEscolha = document.querySelector("#idgame");
var objBotao = document.querySelector("#idbotao");
var objSaida = document.querySelector("#idsaida");
var objSaida2 = document.querySelector("#idsaida2");

console.log(objEscolha);





objBotao.onclick = function(){
    var escolhaTexto = objEscolha.options[objEscolha.selectedIndex].text;
    var escolhaValor = objEscolha.options[objEscolha.selectedIndex].value;
    objSaida.innerHTML = `Seu jogo preferido é ${escolhaTexto}`;
    objSaida2.innerHTML = `Seu jogo preferido é ${escolhaValor}`;
    console.log(escolhaTexto, escolhaValor);
    window.alert(`Seu jogo preferido é ${escolhaTexto}`);
}