function myFunction(name, lastName){
  console.log("hey this is me " + name + " " + lastName)
}
let firstName = "Nafis";
let lastName = "Al Safayet";
myFunction(firstName, lastName);

function test(){
  alert("this is a test function");
}

function myFunction(name, lastName=(test())){
  console.log(`hey this is me ${name} ${lastName}`);
}

myFunction("nafis");