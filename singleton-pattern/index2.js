/*
The Singleton Pattern is a structural design pattern that ensures a class has only one instance 
and provides a global point of access to that instance.
*/

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
