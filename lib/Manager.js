const Employee = require('./Employee');

class Manager extends Employee {
// bringing in properties from the parent constructor:Employee
    constructor(name, id, email, officeNumber) {
//using super method to bring properties in from employee class
        super(name, id, email);

        this.officeNumber = officeNumber;
    }
// retreiving officeNumber
getOfficeNumber() {
    return this.officeNumber;
}
// getRole of manager
getRole () {
    return "Manager";
}

}

module.exports = Manager;