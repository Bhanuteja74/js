const name = prompt('Enter your name:');
const isEmployee = confirm('Are you employee:');
let companyName = '';

if (isEmployee) {
  companyName = prompt('Enter your company name:');
}

const isMarried = confirm('Are you married:','n');

console.log('Name      :', name);

if (isEmployee) {
  console.log('Working In:', companyName)
}

const marriedStatus = isMarried ? 'Yes' : 'No';
console.log('Married   :', marriedStatus);
