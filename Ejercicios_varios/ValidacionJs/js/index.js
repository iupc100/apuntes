const formulario=document.querySelector('#formulario');
const inputs=document.querySelectorAll('#formulario input');

const expresiones={
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,  // incluye letras, números, _ y -; de 4 a 16 dígitos
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,    // incluye lo de arriba mas los acentos, excepto _ y -
    password: /^.{4,12}$/, // el punto significa todos los símbolos 
 
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7-14}$/
}

const campos={
    usuario: false,
    nombre: false,
    password: false,
   
    correo: false,
    telefono: false
}

const validarFormularios=()=>{
    switch(){
     case "usuario":
         validarCampo(expresiones.usuario,e.target,'usuario');
         break;
    case "nombre":
         validarCampo(expresiones.nombre,e.target,'nombre');
         break;
    case "password":
         validarCampo(expresiones.password,e.target,'password');
         break;
    case "password2":
         validarCampo(expresiones.password2,e.target,'password2');
         break;
    case "correo":
         validarCampo(expresiones.correo,e.target,'correo');
         break;
    case "telefono":
         validarCampo(expresiones.telefono,e.target,'telefono');
         break;
    }
}




