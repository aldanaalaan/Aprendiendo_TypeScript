"use strict";
exports.__esModule = true;
/* A partir de un String, convertir a codigo de Brainfuck para imprimir (Sin usar ciclos) */
function StrToBF(Cadena) {
    var BFCode = ""; // Inicializar el futuro codigo en BF
    var ValoresDecimales = []; // Se utilizará para obtener los valores ASCII decimales de cada caracter
    for (var i = 0; i < Cadena.length; i++) {
        // Se agregan los decimales
        ValoresDecimales.push(Cadena.charCodeAt(i));
    }
    for (var i = 0; i < ValoresDecimales.length; i++) {
        var j = 0;
        while (j < ValoresDecimales[i]) {
            // Agregar los "+" para llegar al valor decimal
            BFCode += "+";
            j++;
        }
        BFCode += ">"; // Suguiente posicion
    }
    for (var i = 0; i < Cadena.length; i++) {
        // Regresar a la posicion inicial
        BFCode += "<";
    }
    // Imprimir todos los caracteres
    for (var i = 0; i < Cadena.length; i++) {
        BFCode += ".>";
    }
    BFCode += ".";
    // Retornar codigo de BF
    return BFCode;
}
exports["default"] = StrToBF;
