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
