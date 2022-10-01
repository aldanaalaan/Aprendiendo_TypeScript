// * Tipos de Datos
/*
    La principal caracteristica de TypeScript, y de donde recibe su nombre, son los tipos de datos.
    # Primitivos:
        - string. Cadenas de texto.
        - number. Numeros.
        - boolean. Booleanos.
        - undefined. Sin definir.
        - null. Valores nulos.
    # Especiales
        - any. Puede guardar cualquier tipo de dato.
        - void. Se utiliza para especificar que una funcion no devuelve ningun valor.

*/
// Despues de asignar un primer tipo de dato, TS infiere automaticamente que tipo de datos es
// ! No podra almacenar otors tipos de datos
var Saludo = "Hello"; // TS infiere que es un String
//Si solo se declara la variable sin inizializarla, se convertira en un any
// ! Podra almacenar cualquier cosa
var Var1;
Var1 = 0;
Var1 = "World";
// O podemos especificar el tipo de dato sin que TS lo infiera
// * var <Nombre de Variable>: <Tipo de Dato> = <Valor>;
var myNull = null;
var myName = "Alan";
var myNumber = 123;
var myBoolean = false;
var myUndefined = undefined;
// Ademas, podemos especificar varios tipos de dato, separados por |
var myMultiTipo = false;
// O directamente el tipo any, que guarda cualquier tipo de dato
var myVar = [true, "Yo", 89];
// Mostramos los datos en el HTML
// String
document.getElementById("Cadena").innerHTML += myName;
// Number
document.getElementById("Numero").innerHTML += myNumber;
// Boolean
document.getElementById("Booleano").innerHTML += myBoolean;
// Undefined
document.getElementById("Indefinido").innerHTML += myUndefined;
// Nulo
document.getElementById("Nulo").innerHTML += myNull;
// Any
document.getElementById("Any").innerHTML += myVar;
// Funcion void
function FuncionVacia(Cadena) {
    document.getElementById("Vacio").innerHTML += Cadena;
}
FuncionVacia("Cadena en una funcion void");
// Arrays
// Existen varias formas de declarar un Array
// Ej 1. var <Nombre de Array>: Array<Tipo(s) de dato> = [<Valores>];
var myArray1 = [1, "Uno"];
// Ej 2. var <Nombre de Array>: <Tipo(s) de dato>[] = [];
var myArray2 = [true, false, false, true, true, true, true, true];
var myArray3 = [true, "Falso", "Niño", false];
// Igualmente podemos declarar que sea uno u otro tipo de datos
// Ej 3. var <Nombre de Array>: <Tipo(s) de Dato 1>[] |  <Tipo(s) de Dato 2> = [];
var myArray4 = ["true", "false", "Yo"];
