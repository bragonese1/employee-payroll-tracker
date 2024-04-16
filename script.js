// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
//Array to store employee info
  const employees = []; 

///Loop until cancel or first name isn't inputted
  while (true) {
//Prompt the user for employee details
    const firstName = window.prompt(`Enter first name of the employee:`);
    if (firstName === null || firstName === "") {
//Exits loops if conditions are met in if statement
      break;
    }
//Prompt user for last name and salary
    const lastName = window.prompt(`Enter last name of the employee:`);
//Use parsefloat to convert string to float point number which helps with average calculation
    const salary = parseFloat(prompt(`Enter the salary of the employee:`));

//Create variable with all the data that was collected with the imputs
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };

//Adding the employee variable to the employees array
    employees.push(employee);

//Ask the user if they want to enter another employee
const continueInput = confirm(`Do you want to enter another employee?`);
if (!continueInput) {
//Exit the loop if the user chooses cancel
  break;
    }
}
//Sort employees alphabetically
employees.sort(employees.lastName);

//Return the employees array
return employees;
};

// Display the average salary
const displayAverageSalary = function(employeesArray) {
//Calculate the total salary
if (employeesArray.length === 0) {
  console.log("There are no employees so the average is 0");
  return;
}

let totalSalary = 0;
for (const employee of employeesArray) {
totalSalary += employee.salary;
}

//Calculate the average salary
const averageSalary = totalSalary / employeesArray.length;

///Display the average salary with statement required
console.log(`The average salary of our ${employeesArray.length} employees is ${averageSalary}.`);
};

// Select a random employee
const getRandomEmployee = function(employeesArray) {

  //Check if array is empty
if (employeesArray.length === 0) {
  console.log("No employees to select from.");
  return;
}
//Getting random index from array of options
const randomIndex = Math.floor(Math.random() * employeesArray.length);
const randomEmployee = employeesArray[randomIndex];

//Show random employee statment in the console

console.log(`Congrats to employee ${randomEmployee.firstName} ${randomEmployee.lastName} for winning our random drawing`);
}



/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
