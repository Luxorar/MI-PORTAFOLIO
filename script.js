const formulario = document.querySelector("#form-contacto");

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");

function mostraError(campo,texto){
    campo.classList.add("invalido");

    const error = document.querySelector(
        `#error${campo.id.charAt(0).toUpperCase()+campo.id.slice(1)}`
    );

    error.textContent = texto;
}

function limpiarCampo(campo){
    campo.classList.remove("invalido");

    const error = document.querySelector(
        `#error${campo.id.charAt(0).toUpperCase()+campo.id.slice(1)}`
    );

    error.textContent = "";
}

formulario.addEventListener("submit", function(evento){

    const nombreValor = nombre.value.trim();
    const mensajeValor = mensaje.value.trim();

    let formularioValido = true;

    if(nombreValor.length < 3){
        mostraError(nombre, "Agrega almenos un nombre con tres caracteres o mas.")
        formularioValido = false

    }else{
        limpiarCampo(nombre)
    }

    if(mensajeValor.length < 10){
        mostraError(mensaje, "Agrega almenos un mensaje con diez caracteres o mas")
        formularioValido = false
    }else{
        limpiarCampo(mensaje)
    }


    if(!formularioValido){
        evento.preventDefault();
        resultado.classList.remove("visible");
        return;
    }

    resultado.classList.add("visible");
})