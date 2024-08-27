const cajaTexto=document.querySelector(".cajaTexto");
const mensaje=document.querySelector(".resultado");
const p1=document.querySelector(".mensaje1");
const p2=document.querySelector(".mensaje2");
const botonCopiar=document.querySelector(".copiar");


function encriptar(stringEncriptado){

 let matrizCodigo=[["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"],["u", "ufat"] ];
    stringEncriptado=stringEncriptado.toLowerCase();
    for (let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado=stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}
 function btnEncriptar(){
    const textoEncriptado=encriptar(cajaTexto.value);
    mensaje.value=textoEncriptado;
    cajaTexto.value="";
    mensaje.style.backgroundImage="none";
    p1.style.display = "none";
    p2.style.display = "none";
    botonCopiar.style.visibility="visible";

 } 
 function desencriptar(stringEncriptado){

    let matrizCodigo=[["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"],["u", "ufat"] ];
       stringEncriptado=stringEncriptado.toLowerCase();
       for (let i=0; i<matrizCodigo.length; i++){
           if(stringEncriptado.includes(matrizCodigo[i][1])){
               stringEncriptado=stringEncriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
           }
       }
       return stringEncriptado;
   }
 function btnDesencriptar(){
    const textoEncriptado=desencriptar(cajaTexto.value);
    mensaje.value=textoEncriptado;
    cajaTexto.value="";
    mensaje.style.backgroundImage="none";
    p1.style.display = "none";
    p2.style.display = "none";
    botonCopiar.style.visibility="visible";


 }
 function copiarAlPortapapeles() {
    mensaje.select();
    mensaje.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand("copy");
    alert("Texto copiado al portapapeles!");
 }
 function verificarTexto() {
    const texto = document.querySelector('.cajaTexto').value.trim();
    const botonEncriptar = document.querySelector('.encriptar');
    const botonDesencriptar = document.querySelector('.desencriptar');

    if (texto === "") {
        botonEncriptar.disabled = true;
        botonDesencriptar.disabled = true;
    } else {
        botonEncriptar.disabled = false;
        botonDesencriptar.disabled = false;
    }
}
/*
 document.getElementById("copiar").addEventListener("click", function() {
    let texto = document.querySelector(".resultado");
    texto.select();
    texto.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
});

document.getElementById("copiar").addEventListener("click", function() {
    // Selecciona el contenido del textarea
    let texto = document.querySelector(".resultado").value;

    // Usa la API de Clipboard para copiar el texto
    navigator.clipboard.writeText(texto).then(function() {
        alert("Texto copiado al portapapeles");
    }).catch(function(err) {
        console.error("Error al copiar: ", err);
    });
});

 /*function encriptarTexto(cajaTexto){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}*/