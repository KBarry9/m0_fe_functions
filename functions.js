// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.
function printGreeting () {
  console.log("Hello sunshine!");
  console.log("You are almost done with this week!");
}
printGreeting ();
printGreeting ();
printGreeting ();

// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.
function getTakeOut (genre) {
  console.log(`Tonight, we will pick up some delicious ${genre} for dinner.`);
}

getTakeOut("Thai food");

// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).

function getJobInfo (name, first, second) {
  var diff = first - second;
  console.log(`${name} will be hiring for the position of software engineer with a pay range of ${diff}.`);
}

getJobInfo("Peloton", 120000, 100000);

// 4: Write a function that satifies the following interaction pattern:
function checkStock(quantity, food) {
  if (quantity > 3) {
    console.log(`${food} - is stocked.`);
  } else if (quantity < 1) {
    console.log(`${food} - is OUT of stock.`);
  } else {
    console.log(`${food} - is running LOW.`);
  }
}

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"
