let nombre="Ulises";
console.log(nombre);
let edad=35;
console.log("Mi nombre es "+nombre+" mi edad es "+edad);
console.log(`Mi nombre es ${nombre} mi edad es ${edad}`); 
let apellido="Pérez";
var apellido1="Pérez";
console.log(Window);
var alert="estoy sobreescribiendo la función alert";

let caja1;
console.log(caja1);
let caja2=2*nombre;
console.log(caja2);
let caja3=null;
console.log(caja3);
let caja4=1+"1";
console.log(caja4);
console.log(typeof caja4);

let caja5=["perro",23,caja1];
console.log(caja5[2]);
let persona={
    nombre:"Ulises",
    edad:35,
    casado:true,
    plantas:["albahaca", "tomate", "oregano"]
};
persona.plantas[3]="lavanda";
console.log(persona);
console.log(persona.persona[3]);