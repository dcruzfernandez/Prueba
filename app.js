const fs=require('fs');

let salida=`Tabla del 5\n`;
for (let i = 0; i < 11; i++) {
    salida+=`5 x ${i} = ${5*i} \n`;
}

fs.writeFile('tabla5.txt',salida,(e)=>{
    if(e) throw e
    console.log('Archivo creado');
})