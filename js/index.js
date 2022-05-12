/*
let nombre="Ulises";
console.log(nombre);
let edad=35;
console.log("Mi nombre es "+nombre+" mi edad es "+edad);    
console.log(`Mi nombre es ${nombre} mi edad es ${edad}`);  // template string mas nueva
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
console.log(persona.plantas[3]);

//Funciones antes 2015

/*
function name(param) {  
    console.log(param)  

}

name(edad);



//Funcion después 2015 funcion flecha

let caja7= () => {
    console.log(nombre)
}

caja7();

(function () {
    console.log(persona.plantas[0])
})();

persona.plantas.push("aguacate");
console.log(persona.plantas);

*/
let datos0=[3,5,7,9]
let nulo=null;
let num2=3579;
let obj_num={
    num_1:123,
    num_2:321,
    num_4:159,
    num_num_1:[154, 1456, 145]
};
let datos1=[12,'numero1',datos0, num2, nulo, obj_num.num_num_1];
console.log(datos1);

//let *nombre de la variable*= () => { función deseada }; // Si es un solo valor no es necesario {} console.log puede estar afuera

let suma= (num1,num2) => {
    let resultado=num1+num2;
    console.log(resultado);
}
suma(2,3);

let nombre_= (fulanito) => console.log(fulanito);
nombre_("Ricardo");

let nombre_1 = () => "Richard";
console.log(nombre_1());

let suma1= (num1,num2) => {
    let resultado=num1+num2;
    return resultado; 
}
console.log(suma1(10,3));

let suma2= (num_1,num_2) => num_1+num_2; 
console.log(suma2(2,3));







