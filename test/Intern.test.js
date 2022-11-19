const intern = require('../lib/Intern');


//create intern values
describe('intern object', () => {
    it("creates an object with 'name' string value, 'id' number, and 'email' string value", () => {
    const intern = new Intern('John', 30, 'johndoe@gmail.com','MIT');
    
    expect(intern.school).toEqual(expect.any(String));
      });
    });


//retrieve school
it("retrieves intern school", () => {
const intern = new Intern('John', 30, 'johndoe@gmail.com','MIT');

expect(intern.getSchool()).toEqual(expect.any(String()));
});


//retrieves employee role
it('retrieve employee role', () => {
const intern = new Intern('John', 30, 'johndoe@gmail.com','MIT');

expect(intern.getRole()).toEqual(Intern);
});
