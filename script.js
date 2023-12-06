function makeid(l) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ''; // Use let instead of const
    const charactersLength = characters.length;

    for(let i = 0; i < l; i++){ // Declare i with let for loop control
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters.charAt(randomIndex);
    }

    return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
