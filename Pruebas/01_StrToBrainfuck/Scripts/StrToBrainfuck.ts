/* A partir de un String, convertir a codigo de Brainfuck para imprimir (Sin usar ciclos) */
function StrToBF(Cadena: string): string {
	let BFCode: string = ""; // Inicializar el futuro codigo en BF
	let ValoresDecimales: number[] = []; // Se utilizará para obtener los valores ASCII decimales de cada caracter
	for (let i = 0; i < Cadena.length; i++) {
		// Se agregan los decimales
		ValoresDecimales.push(Cadena.charCodeAt(i));
	}

	for (let i = 0; i < ValoresDecimales.length; i++) {
		let j = 0;
		while (j < ValoresDecimales[i]) {
			// Agregar los "+" para llegar al valor decimal
			BFCode += "+";
			j++;
		}
		BFCode += ">"; // Sugiente posicion
	}
	for (let i = 0; i < Cadena.length; i++) {
		// Regresar a la posicion inicial
		BFCode += "<";
	}
	// Imprimir todos los caracteres
	for (let i = 0; i < Cadena.length; i++) {
		BFCode += ".>";
	}
	BFCode += ".";
	// Retornar codigo de BF
	return BFCode;
}

export default StrToBF;
