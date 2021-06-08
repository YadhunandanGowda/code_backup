console.log("Happy coding");

// SET in JS
let set = new Set();

// size property
set.size;

// add() method
set.add("hi");
set.add( 23);
set.add( 23); // not allow duplicate objects
set.add( {key:"value"});
set.add( {key:"value"}); //allow duplicate objects

// clear() method
set.clear();