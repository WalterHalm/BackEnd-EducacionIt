//seleccionar aplica estilo a la opcion seleccionada y quita previamente la seleccionada

function seleccionar(navmedio){
    var opciones = document.querySelectorAll('#navmedio a')
    opciones [0].className ="";
    opciones [1].className ="";
    opciones [2].className ="";
    opciones [3].className ="";
    opciones [4].className ="";                    
    navmedio.className = "seleccionado";

    
    

//hacemos desaparece menu responsive
var x = document.getElementById("nav");
x.className="";
}



function responsiveMenu(){
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }

}