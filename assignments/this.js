/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding. The value of "this" in the global binding is the window or console object.
* 2. Implicit Binding. The value of "this" in implicit binding, is when a function is called by a preceding dot, the object to that dots' left gets the "this" keyword. Needs the dot notation to keep its context.
* 3. New Binding. In the context of constructor functions, "this" refers to the specific instance of the new object that is being created by the constructor function.
* 4. Explicit Binding. Objects are bound together using the call or apply methods, "this" is then explicitly defined to the object to the right. 
*
* write out a code example of each explanation above
*/

// Principle 1
console.log(this);  //this is referring to the entire window.
// code example for Window Binding

// Principle 2
const greetObject = {
    greeting: "Hi",
    saysHi: function(name) {console.log(`${this.greeting} my name is ${name}` )}
}
greetObject.saysHi("derek");   //Here, "this" refers to greetObject at the beginning of line 21.
// code example for Implicit Binding

// Principle 3
function driveThruEmployee(person, customer) {
    this.name = person;
    this.greeting = 'Welcome to Taco Bell my name is ';
    this.question = 'how may I help you?';
    this.customer = customer
    this.speak = function() {
        console.log(`${this.greeting} ${this.name} ${this.question}`)
    };
};
const tom = new driveThruEmployee("Tom");
tom.speak(); //Here, "this" is referring to the specific context where the new employee "Tom" was created.
// code example for New Binding

// Principle 4
const myObject = {
    name: 'Derek Schwantner',
    city: 'San Francisco',
    favoriteFood: '🍕'
  }
  
  const thingsYouEnjoy = ['Sports', 'Movies', 'Traveling']
  function aboutMe(thing1, thing2, thing3){
    console.log(`Hi! My name is ${this.name}, I live in ${this.city}, and I enjoy ${thing1}, ${thing2}, and ${thing3}. I love to eat ${this.favoriteFood}.`) 
  }

  aboutMe.apply(myObject, thingsYouEnjoy) //Here "this" is referring to myObject, which was contextualized using the ".apply" which supplied the function to tie it to, and then the argument. 