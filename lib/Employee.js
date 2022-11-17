class Employee {
//building required properties
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
//calling following properties
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;