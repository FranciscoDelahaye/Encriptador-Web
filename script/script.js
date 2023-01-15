var showimg;
const expreg = /[A-Z\áéíóú]/;

var textin = document.querySelector("#textinput");
var textout = document.querySelector("#text-result");

var botonEncriptar = document.querySelector("#btn-encriptar");
var botonDesencriptar = document.querySelector("#btn-desencriptar");
var botonCopiar = document.querySelector("#btn-copiar");

var campo_textresult = document.querySelector(".text-output-result").style.display = "none";
var campo_btncopy = document.querySelector(".btn-copiar").style.display = "none";

function encriptar (){
	let aux;
	let word = "";
	let texto = textin.value;

	if(expreg.test(texto)){
		texto = "";
		alert("No esta permitido usar mayusculas o acentos, ingrese nuevamente su texto");
	}
	if(texto == ""){
		notshowres();
	}else{
		showres();
	}

	for(var i=0; i<texto.length; i++){
		switch (texto.charAt(i)) {
            case 'a':
                aux = "ai";
                break;
            case 'e':
                aux = "enter";
                break;
            case 'i':
                aux = "imes";
                break;
            case 'o':
                aux = "ober";
                break;
            case 'u':
                aux = "ufat";
                break;
            default:
                aux = texto.charAt(i);    
                break;
        }
		word = word + aux;
	}
	textout.value = word;  
}

function desencriptar (){
	let aux;
	let word = "";
	let texto = textin.value;

	if(expreg.test(texto)){
		texto = "";
		alert("No esta permitido usar mayusculas o acentos, ingrese nuevamente su texto");
	}
	if(texto == ""){
		notshowres();
	}else{
		showres();
	}

	for (let i = 0; i < texto.length; i++) { 
       switch (texto.charAt(i)) {
            case 'a':
                aux = i + 1;
                break;               
            case 'e':
                aux = i + 4;
                break;
            case 'i':
                aux = i + 3;
                break;
            case 'o':
                aux = i + 3;
                    break;
            case 'u':
                aux = i + 3;
                break;
            default:
                aux = i;    
                break;
        }
        word = word + texto.charAt(i);
        i = aux;   
    }
    textout.value = word;
}

function copiar () {
  let textoEncriptado = textout.value;
  navigator.clipboard.writeText(textoEncriptado);
  alert("Mensaje copiado a su portapapeles!");
}

function showres() {
    showimg = document.querySelector("#first-state").style.display = "none";
    campo_textresult = document.querySelector("#text-result").style.display = "block"
    campo_btncopy = document.querySelector(".btn-copiar").style.display = "inline-flex";
}

function notshowres() {
    showimg = document.querySelector("#first-state").style.display = "block";
    campo_textresult = document.querySelector("#second-state").style.display = "none"
}

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;