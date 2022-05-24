function Subject() {
    this.observers = [];
}

Subject.prototype = {
    subscribe: function(fn) {
        this.observers.push(fn);
    },

    unsubscribe: function(fbToRemove) {
        this.observers = this.observers.filter(fn => {
            if (fn != fbToRemove) {
                return fn;
            }
        })
    },

    fire: function() {
        this.observers.forEach(fn => {
            fn.call();
        })
    }
}

const subject = new Subject();

function Observer1() {
    console.log("Observer 1 is firing");
}

function Observer2() {
    console.log("Observer 2 is firing");
}

subject.subscribe(Observer1);
subject.subscribe(Observer2);
subject.unsubscribe(Observer2);

subject.fire();