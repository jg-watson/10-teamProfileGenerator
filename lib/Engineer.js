const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {

        super(name, id, email);
//github username
         this.github = github;
        }
 //retrieve github
getGithub() {
    return this.github;
}

 //getRole
getRole() {
    return "Engineer";
}

}

module.exports = Engineer;




