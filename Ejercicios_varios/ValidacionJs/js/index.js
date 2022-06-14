const formulario=document.querySelector('#formulario');
const inputs=document.querySelectorAll('#formulario input');

const expresiones={
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,  // incluye letras, números, _ y -; de 4 a 16 dígitos. Se llaman expresiones regulares
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,    // incluye lo de arriba mas los acentos, excepto _ y -
    password: /^.{4,12}$/, // el punto significa todos los símbolos 
 
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7-14}$/  
}

const validarFormulario=(e)=>{
    switch (e.target.name) {
        case 'usuario':
            validarCampo(expresiones.usuario,e.target,'usuario');
         break; 
         case 'nombre':
            validarCampo(expresiones.usuario,e.target,'nombre');
         break;  
         case 'password':
            validarCampo(expresiones.usuario,e.target,'password');
         break;  
         case 'password2':
            validarCampo(expresiones.usuario,e.target,'password2');
         break;
         case 'correo':
            validarCampo(expresiones.usuario,e.target,'correo');
         break;   
         case 'telefono':
            validarCampo(expresiones.usuario,e.target,'telefono');
         break;
                
    }
}
const validarCampo=(expresion,input,campo)=>{

    if (expresion.test(input.value)) {  // ` ` si es verdadero se agrega la clase del grupo correcto que lo convierte en verde con palomita
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');   //selecciona por el id el grupo usuario y remueve el grupo incorrecto (cruz roja)
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');   //selecciona por el id el grupo usuario y agrega el grupo correcto (pone en cruz verde)
        // # (id) se pone dentro del querySelector para indicarle que es un id o un . (clase)
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');  //Seleccionamos varios elementos(un id y una etiqueta html) usando querySelector para AGREGAR la palomita verde
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');  //Seleccionamos varios elementos(un id y una etiqueta html) usando querySelector para AGREGAR la palomita verde
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');   
        
    }
    else{       //si es falso se agrega la clase del grupo incorrecto que lo convierte en rojo
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto'); //selecciona el id del grupo__usuario y agrega la cruz roja por medio de la clase
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');//selecciona el id del grupo__usuario y remueve  por medio de la clase el correcto
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');

    }

}

/*

const campos={
    usuario: false,
    nombre: false,
    password: false,
   
    correo: false,
    telefono: false
}
*/


inputs.forEach((input)=>{
    input.addEventListener('keyup',validarFormulario);
    input.addEventListener('blur',validarFormulario);
})


formulario.addEventListener('submit',(e)=>{
     e.preventDefault();

})






