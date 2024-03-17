const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const llavesEncriptacion = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

/*
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
*/
function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}
function encriptar(textoAEncriptar){
    textoAEncriptar = textoAEncriptar.toLowerCase();
    for(let i = 0; i < llavesEncriptacion.length; i++){
        if(textoAEncriptar.includes(llavesEncriptacion[i][0])){
            textoAEncriptar = textoAEncriptar.replaceAll(llavesEncriptacion[i][0], llavesEncriptacion[i][1]);
        }
    }
    return textoAEncriptar;
}
function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}
function desencriptar(textoADesencriptar){
    textoADesencriptar = textoADesencriptar.toLowerCase();
    for(let i = 0; i < llavesEncriptacion.length; i++){
        if(textoADesencriptar.includes(llavesEncriptacion[i][1])){
            textoADesencriptar = textoADesencriptar.replaceAll(llavesEncriptacion[i][1],llavesEncriptacion[i][0]);
        }
    }
    return textoADesencriptar;
}
function btnCopiar(){
    let textoACopiar = mensaje.value;
    mensaje.value = "";
    navigator.clipboard.writeText(textoACopiar);
}