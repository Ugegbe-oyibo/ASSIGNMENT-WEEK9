/*Build a simple loop, inside a function, that takes an array and prints the value of 
the array to the console.*/

function food() {

    const jollof = ["rice", "tomatoes", "oil", "onions",];
    for (let j = 0; j < jollof.length; j++) {
        console.log(jollof[j]);
    }
   
}
food();