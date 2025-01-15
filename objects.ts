// type is only typeScript

type person = {
firstName: string;//not optional (:)
lastName?: string; //optional (?:)
age?: number; //also optional 
};

const rufus: person = {
    firstName: "rufus", 
    lastName: "mcQueue",
    age: 65,
};

//error with no first name because not optional 

console.log(rufus);