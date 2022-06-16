btnN1= document.getElementById("btn-n1");
btnN2= document.getElementById("btn-n2");
btnN3= document.getElementById("btn-n3");
btnN4= document.getElementById("btn-n4");
btnN5= document.getElementById("btn-n5");
btnN6= document.getElementById("btn-n6");
nombre = document.getElementById("nombre");

btnN1.addEventListener("click",function(){
    alert("Maria");
})

btnN2.addEventListener("click",imprimir);

function imprimir(){
    alert("pedro");
}

btnN3.addEventListener("click",mostrarTexto);

function mostrarTexto(){
    alert(nombre.value);
}