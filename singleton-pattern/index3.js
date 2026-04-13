// logger.js
class Logger {
  constructor() {
    this.logs = [];
  }

  log(message) {
    this.logs.push(message);
    console.log(`Log: ${message}`);
  }
}

// Export a PRE-INSTANTIATED object
const loggerInstance = new Logger();
Object.freeze(loggerInstance); // Optional: prevents adding new properties
export default loggerInstance;
