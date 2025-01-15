//function definition type interchangible 
// all below functions do the same thing 

function addNumbers(numA, numB) {
    return numA + numB;
}

const addThings = (numA: number, numB: number) => { // numA: any 
    return numA + numB;
};

const addStuff = (numA, numB) => numA + numB;
// name function, define parameters, tell function what to do 

const thunk = () => 42;

console.log(addNumbers(4,5));
console.log(addThings(6,7));
console.log(addStuff(9,10));
console.log(thunk); // prints [function: thunk]

