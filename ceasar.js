var caesarshift= function(){
	var myString= "hello";
	var shiftAmount= 14;
	var cipherString = "";

	for(var counter = 0; counter< 5; counter++){
		//cipherString[counter] = mySting[counter] 
		// + shiftAmount;

		var x = '';

		var asciiCode = myString.charCodeAt(counter);

		x = String.fromCharCodeAt((asciiCode -65 + shiftAmount)+65);
		cipherString+=x;

	}
	return cipherString;
}


document.getElementById("demo").innerHTML=window.caesarshift();


