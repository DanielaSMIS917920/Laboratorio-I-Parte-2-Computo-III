//modulos
var fs = require('fs');
var xlsx = require("xlsx");

//Permitir agregar y escribir texto o valores por la terminal
const readline = require('readline');

let read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Estructura de verificacion de respuestas del usuario y formulacion de preguntas
read.question("Hola! ʕ◉ᴥ◉ʔ formulemos archivos de textos. Primero, ¿Qué desas hacer? Ingresar OPCION1 para crear archivos xls - Ingresar OPCION2 para crear archivos csv - Ingresar OPCION3 para convertir archivo xls a JSON : ", (opcion) => {
    console.log("");

    //Opcion 1 trabajar con archivos xlsx
    if (opcion == "OPCION1"){
        read.question("Ingrese el nuevo texto al documento: ", (nuevoTexto) =>{
            const AdditionalContent = `\n${nuevoTexto}`;
            fs.appendFile('./NuevoDocumento.xls', AdditionalContent, (err) => {
                if(err) throw("Error, intentelo de nuevo");
                console.log("El documento ha sido creado");
            });
        })
    //Opcion 2 trabajar con archivos csv
    } else if (opcion == "OPCION2"){
        read.question("Ingrese el nuevo texto al documento: ", (nuevoTexto) =>{
            const AdditionalContent = `\n${nuevoTexto}`;
            fs.appendFile('./NuevoDocumento.csv', AdditionalContent, (err) => {
                if(err) throw("Error, intentelo de nuevo");
                console.log("El documento a sido creado");
            });
        })
    
    //Opcion 3 leer archivo xlsx en JSON
    } else if (opcion == "OPCION3"){
      var XLSX = require("xlsx");
      const xlsxToJson = () =>{
        const converJSON = XLSX.readFile('./pelis.xlsx');
        var nombreHojas = converJSON.SheetNames;
        let datos = XLSX.utils.sheet_to_json(converJSON.Sheets[nombreHojas[0]]);
        console.log(datos);
      };
      xlsxToJson();
    }        
});