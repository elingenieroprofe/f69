const num = 3;
//num = 4;

edad = [18,14,15,92,78,63];

console.log(edad[2]);

let nombre = ["JULIANA","MARBEL","ZULUAGA","VELEZ","SANTOS"];

console.log(nombre.push);

let correo = [
    "juliana@misena.edu.co",
    "marbel@misena.edu.co",
    "zuluaga@misena.edu.co",
    "velez@misena.edu.co",
    "santos@msiena.edu.co"
];
let telefono = [
    "8523145",
    "555551",
    "60452515",
    "96548451",
    "3215115"
];

console.log(correo);
console.log(correo.length);

/*for (let i = 0; i < nombre.length; i++){
    console.log (nombre[i] 
        + " " + telefono[i]
        + " " + correo[i] );
    console.log(`el nombre es ${nombre[i]} el tefono es ${telefono[i]} el correo es: ${correo[i]}`);
}*/
nombre.forEach(element => {
    console.log(`el nombre es ${element}`);
});

let persona = {"nombre":"luis","apellido":"becerra","gustos":["futbol","basquet","natacion"]};

console.log(persona);

let cursos = [{
    "nombre":"ADSI",
    "id":"1",
    "fecha":"20220202",
    "duracion":10
},{
    "nombre":"ADSO",
    "id":"2",
    "fecha":"20230202",
    "duracion":110,
    "valor":"gratis"
},{
    "nombre":"RECURSOS HUMANOS",
    "id":"3",
    "fecha":"20230103",
    "duracion":5
},{
    "nombre":"CARPINTERIA",
    "id":"4",
    "fecha":"20211230",
    "duracion":10
}];
console.log(cursos);