var objMenu = document.querySelector("#menu_topo");


function dropMenu(){
    if(objMenu.style.display == 'none'){
        objMenu.style.display = 'block'
    }else{
        objMenu.style.display = 'none'
    }
}

function mostrarMenu(){
    if(window.innerWidth >= 768){
        objMenu.style.display = 'block'
    }else{
        objMenu.style.display = 'none'
    }
}