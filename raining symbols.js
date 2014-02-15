var randomSymbol = '';

function randomString() {
	var variants = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	for (var i=0; i<1; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomSymbol = variants.substring(rnum,rnum+1);
	}
	return randomSymbol;
}
