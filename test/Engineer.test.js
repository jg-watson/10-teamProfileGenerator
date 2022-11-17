const Engineer = require('../lib/Engineer');

//create engineer values:github
describe('engineer object', () => {
    it("creates an object with 'name' string value, 'id' number, and 'email' string value", () => {
    const engineer = new Engineer('John', 30, 'johndoe@gmail.com');
    
    expect(engineer.github).toEqual(expect.any(String));
      });
    });

//retrieve github
it('retrieves github', () => {
const engineer = new Engineer('John', 30, 'johndoe@gmail.com');

expect(engineer.getGithub).toEqual(expect.any(engineer.github.toString()));

});

//gets role of employee
it('retrieves role of employee',() =>{
const engineer = new Engineer('John', 30, 'johndoe@gmail.com');

expect(engineer.getRole).toEqual(Engineer);

});