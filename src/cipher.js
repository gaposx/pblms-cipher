window.cipher = {
  encode:function(offset, string){
    console.log("Encode: " + offset + "|" + string);
    var encodedString = "";
    var asciiChar = "";
    var moves = offset % 26;
    
    for (var i = 0; i < string.length; i++) {
      asciiChar = string.charCodeAt(i);
      if(asciiChar >= 65 && asciiChar <= 90) { //Mayusculas
        asciiChar = ((asciiChar - 65 + moves) % 26) + 65;
      }
      if(asciiChar >= 97 && asciiChar <= 122) { //Minusculas
        asciiChar = ((asciiChar - 97 + moves) % 26) + 97;
      }
      // if(asciiChar >= 48 && asciiChar <= 57) { //Numeros
      //   moves = offset % 10;
      //   asciiChar = ((asciiChar - 48 + moves) % 10) + 48;
      // }
      encodedString += String.fromCharCode(asciiChar);
    }
    return encodedString;
    
  },

  decode:function(offset, string){
    console.log("Decode: " + offset + "|" + string);
    var new_offset = offset % 26;
    var inverted_offset = 26 - new_offset;

    var decodedString = window.cipher.encode(inverted_offset, string);
    return(decodedString);

  },

  createCipherWithOffset:function(offset){
    return { 
			encode: (text) => cipher.encode(offset, text),
			decode: (text) => cipher.decode(offset, text),
		};
  }
  
};
