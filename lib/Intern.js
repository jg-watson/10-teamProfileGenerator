const Employee = require('./Employee');

class Intern extends Employee {
constructor(name, id, email, school) {

    super(name, id, email);
//school 
    this.school = school;
}
//getSchool

getSchool() {
    return this.school;
}

//getRole
getRole() {
    return "Intern";
}

}

module.exports = Intern;