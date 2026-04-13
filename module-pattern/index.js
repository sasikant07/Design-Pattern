/*
While ES6 import/export has mostly replaced the manual version of this, 
the concept remains vital. It allows you to emulate private and public variables and methods, 
preventing "namespace pollution" (messing up the global window object).

Use Case: Creating a self-contained library or a utility service 
where you don't want the internal logic exposed to the user.
*/

const CounterModule = (function() {
  // Private variable
  let counter = 0;

  // Private method
  const log = () => console.log(`Current count: ${counter}`);

  return {
    // Public methods
    increment: () => {
      counter++;
      log();
    },
    reset: () => {
      counter = 0;
      log();
    }
  };
})();

CounterModule.increment(); // Current count: 1
// CounterModule.counter;  // undefined (Private!)
