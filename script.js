function makeid(l) {
  // write your code here
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYXabcdefghijklmnopqrstuvwxyz0123456789';
	const result = '';
	const charactersLength = characters.length;
	for(i=0; i<l; i++){
		const randomIndex = Math.floor(Math.random() * charactersLength);
		result += characters.charAt(randomIndex);
	}
	return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));

