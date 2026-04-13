/*
The Observer pattern defines a one-to-many dependency. When one object (the Subject) changes state, all its dependents 
(Observers) are notified automatically.

Use Case: This is the backbone of Event Listeners in the browser and frameworks like Vue or React (via state updates).
*/

class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(subscriber => subscriber !== fn);
  }

  notify(data) {
    this.observers.forEach(subscriber => subscriber(data));
  }
}

// Usage:
const newsAgency = new Subject();

const reader1 = data => console.log(`Reader 1 received: ${data}`);
const reader2 = data => console.log(`Reader 2 received: ${data}`);

newsAgency.subscribe(reader1);
newsAgency.subscribe(reader2);

newsAgency.notify("Breaking News: JavaScript is still awesome!");
