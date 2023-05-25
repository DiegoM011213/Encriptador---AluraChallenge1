//textarea's y span
var ingreseTexto = document.getElementById('ingrese-texto');
var mostrarTexto = document.getElementById('mostrar-texto');
var mensaje= document.getElementById('mensaje');


//botones
var botonEncriptar = document.getElementById('encriptar');
var botonDesencriptar = document.getElementById('desencriptar');
var botonCopiar = document.getElementById('copiar');
var botonPegar = document.getElementById('pegar');
botonPegar.style.display = 'none';

//div's de la seccion 3
var tresVacio = document.querySelector('.tres-vacio');
var tresContenido = document.querySelector('.tres-contenido');

tresContenido.style.display = "none";

function encriptacionBasica (){
    //funcion que separa cada caracter de una cadena en un elemento de un array
    var frasePorCaracteres = ingreseTexto.value.split('');
    var fraseEncriptada = '';

    tresVacio.style.display = 'none'
    tresContenido.style.display = 'block';
    mostrarTexto.value = '';

    for (var i = 0; i < ingreseTexto.textLength; i++){
        if ( frasePorCaracteres[i] == 'a'){
            frasePorCaracteres[i] = 'ai';
        }else if ( frasePorCaracteres[i] == 'e'){
            frasePorCaracteres[i] = 'enter';
        }else if ( frasePorCaracteres[i] == 'i'){
            frasePorCaracteres[i] = 'imes';
        }else if ( frasePorCaracteres[i] == 'o'){
            frasePorCaracteres[i] = 'ober';
        }else if ( frasePorCaracteres[i] == 'u'){
            frasePorCaracteres[i] = 'ufat';
        }
    fraseEncriptada = fraseEncriptada + frasePorCaracteres[i]; 
    }

    mostrarTexto.value = fraseEncriptada;
}

function encriptar(){
    var espacio = true;

    if( ingreseTexto.value != ''){

        for(var i = 0; i < ingreseTexto.textLength; i++){
            if( ingreseTexto.value[i] == ' '){
                espacio = true;
            }else {
                espacio = false;
                break;
            }
        }
        if (espacio == true){
            ingreseTexto.focus();
            ingreseTexto.value = '';
            mostrarTexto.value = '';
            tresVacio.style.display = 'block'
            tresContenido.style.display = 'none';
        } else {
            encriptacionBasica();
        }
        
    } else {
        ingreseTexto.focus();
        mostrarTexto.value = '';
        tresVacio.style.display = 'block'
        tresContenido.style.display = 'none';
    }
}

function desencriptar(){
    var espacio = true;
    let ai; let enter; let imes; let ober; let ufat;
    var fraseUsuario = ingreseTexto.value;

    if( ingreseTexto.value != ''){

        for(var i = 0; i < ingreseTexto.textLength; i++){
            if( ingreseTexto.value[i] == ' '){
                espacio = true;
            }else {
                espacio = false;
                break;
            }
        }
        if (espacio == true){
            ingreseTexto.focus();
            ingreseTexto.value = '';
            mostrarTexto.value = '';
            tresVacio.style.display = 'block'
            tresContenido.style.display = 'none';
        } else {
            tresVacio.style.display = 'none'
            tresContenido.style.display = 'block';
            mostrarTexto.value = '';


            ober = fraseUsuario.match(/ober/gi);
            if (ober != null ){
                for( var i = 0; i < ober.length; i++){
                fraseUsuario = fraseUsuario.replace('ober','o');
                }
            }
            mostrarTexto.value = fraseUsuario;

            ufat = fraseUsuario.match(/ufat/gi);
            if (ufat != null){
                for( var i = 0; i < ufat.length; i++){
                fraseUsuario = fraseUsuario.replace('ufat','u');
                }
            }
            mostrarTexto.value = fraseUsuario;

            imes = fraseUsuario.match(/imes/gi);
            if (imes != null){
                for( var i = 0; i < imes.length; i++){
                fraseUsuario = fraseUsuario.replace('imes','i');
                }
            }
            mostrarTexto.value = fraseUsuario;
                                
            ai = fraseUsuario.match(/ai/gi);
            if(ai != null){
                for( var i = 0; i < ai.length; i++){
                    fraseUsuario = fraseUsuario.replace('ai','a');
                }
            }
            mostrarTexto.value = fraseUsuario;

            enter = fraseUsuario.match(/enter/gi);
            if(enter != null){
                for( var i = 0; i < enter.length; i++){
                    fraseUsuario = fraseUsuario.replace('enter','e');
                }
            }
            mostrarTexto.value = fraseUsuario;
            

            // funciona pero tiene errores desencriptando ecriptaciones iteradas
            // for (var c = 0; c < ingreseTexto.textLength; c++){
            // fraseUsuario = fraseUsuario.replace('ai', 'a');
            // fraseUsuario = fraseUsuario.replace('enter', 'e');
            // fraseUsuario = fraseUsuario.replace('imes', 'i');
            // fraseUsuario = fraseUsuario.replace('ober', 'o');
            // fraseUsuario = fraseUsuario.replace('ufat', 'u');
            // }
            // mostrarTexto.value = fraseUsuario;
        }
        
    } else {
        ingreseTexto.focus();
        mostrarTexto.value = '';
        tresVacio.style.display = 'block'
        tresContenido.style.display = 'none';
    }

}

function copiar() {
    if (mostrarTexto.value != ''){
        mostrarTexto.focus();
        document.execCommand('selectAll');
        document.execCommand('copy');

        botonPegar.style.display = 'inline';

        mensaje.innerHTML = 'copiado al portapapeles';
        setTimeout(() => {
            mensaje.innerHTML = ''
        }, 2000);
    }   
}

function pegar(){
    ingreseTexto.value = mostrarTexto.value;
    botonPegar.style.display = 'none';
    // ingreseTexto.value = '';
    // ingreseTexto.focus();
    // document.execCommand('selectAll');
    // document.execCommand('paste'); /*esto debio funcionar*/
}

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;
botonPegar.onclick = pegar;
