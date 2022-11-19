const generateHtml = function(employee) {
return `
<div class="name-title">
<h3>${employee.name}</h3>
<h4>Employee</h4>
</div>
<div class="credentials">
    <p class="id">id: Employee</p>
    <p class="email">johndoe@gmail.com</p>
</div>

`;
}


module.exports = generateHtml;