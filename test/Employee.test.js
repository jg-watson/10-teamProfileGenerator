const Employee = require('../lib/Employee');

// creating employee values
describe('employee object', () => {
it("creates an object with 'name' string value, 'id' number, and 'email' string value", () => {
const employee = new Employee('John', 30, 'johndoe@gmail.com');

expect(employee).toEqual({name:[John], id: 30, email:'johndoe@gmail.com'});
  });
});

//retrieves employee name
it('retrieves employee name', () => {
  const employee = new Employee('John', 30, 'johndoe@gmail.com');

  expect(employee.getName()).toEqual(expect.any(String));

});

//retrieves employee id
it('retrieves employee id', () => {
  const employee = new Employee('John', 30, 'johndoe@gmail.com');

  expect(employee.getId()).toEqual(expect.any(Number));

});

//retrieves employee email
it('retrieves employee email', () => {
  const employee = new Employee('John', 30, 'johndoe@gmail.com');

  expect(employee.getEmail()).toEqual(expect.any(employee.email.String));

});

//gets role of employee
it('retrieves employee role', () => {
  const employee = new Employee('John', 30, 'johndoe@gmail.com');

  expect(employee.getRole()).toEqual(Employee);

});