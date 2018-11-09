//el objeto cipher tiene funciones: encode, decode y createCipherWhitOffset.
window.cipher = {
  /*función encode: recibe el offset y string del html, 
  dentro tiene un bucle for que recorre cada letra de la cadena de texto para obtener su código ASCII.*/
  encode (offset,string) {
    let i=0;
    let stringCipher = "";
    for (i; i < string.length; i++) {
      let ASCIICodeOfTheLetter = string.charCodeAt(i);
      /*codeFormula:(ASCIICodeOfTheLetter - smallerNumberOfTheASCIICodeRange + offset) % numberOfLetters + smallerNumberOfTheASCIICodeRange*/
      let codeFormula = "";
      let convertingTotheAlphabet = "";      
      //mayusculas
      //Si el código ASCII es mayor igual que 65 y menor igual que 90 será cifrada con una mayúscula. 
      if (ASCIICodeOfTheLetter >= 65 && ASCIICodeOfTheLetter <= 90) {
         codeFormula = ((ASCIICodeOfTheLetter - 65 + offset)% 26) + 65;
         convertingTotheAlphabet = String.fromCharCode(codeFormula);
         stringCipher = stringCipher + convertingTotheAlphabet;
         // minusculas 
         //Si el código ASCII es mayor igual que 97 y menor igual que 122  cifrada por una minúscula.
      }else if (ASCIICodeOfTheLetter >= 97 && ASCIICodeOfTheLetter <= 122){ 
         codeFormula = ((ASCIICodeOfTheLetter - 97 + offset) % 26) + 97;
         convertingTotheAlphabet = String.fromCharCode(codeFormula);
         stringCipher = stringCipher + convertingTotheAlphabet;
         //numeros
         //Si el código ASCII es mayor igual que 48 y menor igual que 57 será  cifrado por un número 
      }else if (ASCIICodeOfTheLetter >= 48 && ASCIICodeOfTheLetter <= 57){        
         codeFormula = ((ASCIICodeOfTheLetter - 48 + offset) % 10) + 48;
         convertingTotheAlphabet = String.fromCharCode(codeFormula);
         stringCipher = stringCipher + convertingTotheAlphabet;
         //defecto
         //cualquier otro caracter será reemplazado por sí mismo.
      }else{
         stringCipher = stringCipher + String.fromCharCode(string.charCodeAt(i));
      }
    }
    return (stringCipher); 
 },

 /*función decode: recibe el offset y string del html, 
  dentro tiene un bucle for que recorre cada letra de la cadena de texto para obtener su código ASCII.*/
  decode(offset,string){
    let i=0;
    let stringDecipher = '';
    for (i; i < string.length; i++) {
      let convertingTotheAlphabet = '';
      /*decodeFormula: greaterNumberOfTheASCIICodeRange-(greaterNumberOfTheASCIICodeRange-ASCIICodeOfTheLetter + offset) % numberOfLetters */ 
      let decodeFormula = '';
      let ASCIICodeOfTheLetter = string.charCodeAt(i);
      //mayusculas
      //Si el código ASCII es mayor igual que 65 y menor igual que 90 será descifrada con una mayúscula.
      if (ASCIICodeOfTheLetter >= 65 && ASCIICodeOfTheLetter <= 90) {
        decodeFormula = 90 - (90 -ASCIICodeOfTheLetter + offset) % 26;
        convertingTotheAlphabet = String.fromCharCode(decodeFormula);
        stringDecipher = stringDecipher + convertingTotheAlphabet;
        //minussculas
        //Si el código ASCII es mayor igual que 97 y menor igual que 122  descifrada por una minúscula.
      } else if(ASCIICodeOfTheLetter >= 97 && ASCIICodeOfTheLetter <= 122){
        decodeFormula = 122-(122-ASCIICodeOfTheLetter + offset) % 26;
        convertingTotheAlphabet = String.fromCharCode(decodeFormula);
        stringDecipher = stringDecipher + convertingTotheAlphabet;
         //números
         //Si el código ASCII es mayor igual que 48 y menor igual que 57 será  descifrado por un número 
      } else if (ASCIICodeOfTheLetter >= 48 && ASCIICodeOfTheLetter <= 57){
         decodeFormula = 57 - (57 - ASCIICodeOfTheLetter + offset) % 10;
         convertingTotheAlphabet = String.fromCharCode(decodeFormula);
         stringDecipher = stringDecipher + convertingTotheAlphabet;
         //defecto
        //cualquier otro caracter será reemplazado por sí mismo.
      } else{
          stringDecipher = stringDecipher + String.fromCharCode(string.charCodeAt(i));     
      }
    }
   return (stringDecipher);
  },
  createCipherWithOffset (offset){
    return {
      encode  (string){return cipher.encode(offset, string)},
      decode (string){return cipher.decode(offset, string)}
    };
    
  }
};


