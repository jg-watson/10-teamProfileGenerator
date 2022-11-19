const Manager = require('../lib/Manager');

//create manager values
describe('manager object', () => {
    it("creates an object with 'name' string value, 'id' number, and 'email' string value", () => {
    const manager = new Manager('John', 30, 'johndoe@gmail.com',3);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
      });
    });

//retrieve employee role
it('retrieves employee role',() => {
const manager = new Manager('John', 30, 'johndoe@gmail.com',3);

expect(manager.getRole()).toEqual(Manager);

});