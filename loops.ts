let x = 10;
const r = 5;

//while loop 

while (r < x) {
  console.log("Doing Loop");
}
//infinite loop, x and y don't change

while (r < x) {
  console.log("Doing Loop");
  x = x + 1; //only works when x isnt a const
}

while (r < x) {
  console.log("doing while loop: ", x);
  x = x + 1;
}

//do while loop

do {
  console.log("doing while loop", x);
  x = x + 1; //adds on to las while loop for x value
} while (x < y);

//for loop
//initialization of variable within for loop has to be let and not const because it is changing while looping 
// i++ run after each block

for(let i=0; i<6; i++){


}


