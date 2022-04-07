function Developer (name) {
    this.name = name
    this.type = "Developer"
}

function Tester (name) {
    this.name = name
    this.type = "Tester"
}

function EmployeeFactory () {
    this.create = (name, type) => {
        switch(type) {
            case 1: return new Developer(name)
            break;

            case 2: return new Tester(name)
            break;
        }
    }
}

function say() {
    console.log("[Employee Name: "+this.name+", Role: "+this.type+" ]" )
}

const employeeFactory = new EmployeeFactory();
const employee = [];
employee.push(employeeFactory.create("John Doe", 1));
employee.push(employeeFactory.create("Simon Taylor", 2));
employee.push(employeeFactory.create("Steve Mackenzie", 1));
employee.push(employeeFactory.create("Seierrs Hans", 1));
employee.push(employeeFactory.create("Robert Junior", 2));
employee.push(employeeFactory.create("Tim Steller", 1));

// employee.forEach(emp => {
//     say.call(emp)
// })

for (let emp of employee) {
    say(emp)
}