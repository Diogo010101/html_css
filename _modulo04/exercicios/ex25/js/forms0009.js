var objBotao = document.querySelector("#idbotao");
var objEscolha = document.querySelector("#portateis_list");

objBotao.onclick = function(){
    var saidaValue = objEscolha.select(objEscolha.selected).value;
    window.alert(`Você selecionou ${saidaValue}`);
}