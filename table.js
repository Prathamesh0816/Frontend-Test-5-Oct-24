function multiplicationTable(){
    const number = parseInt(prompt("Enter Any Number : "));
    for (let i = 1; i <= 10; i++) {
        let result = number * i;
        console.log(`${number} * ${i} = ${result}`);
    }
}
multiplicationTable();