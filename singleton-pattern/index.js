const Singleton = (() => {
    let instance;

    const createInstance = () => {
        let object = new Object();
        return object;
    }

    return {
        getInstance: () => {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();

console.log(instance1 === instance2);  // true

// ====================================================================================================

//Good example
class DatabaseConnection {
  constructor() {
    if (DatabaseConnection.instance) {
      return DatabaseConnection.instance;
    }

    this.connectionString = "postgres://localhost:5432/my_app";
    // Initialize connection logic here...
    
    DatabaseConnection.instance = this;
  }

  query(sql) {
    console.log(`Executing: ${sql}`);
  }
}

// Usage:
const db1 = new DatabaseConnection();
const db2 = new DatabaseConnection();

console.log(db1 === db2); // true (They are the exact same object)

//==========================================================================================================
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
