const inquirer = require('inquirer')

// View employees, view departments, view roles, add employee, add department, add role, update role, update manager,
// view employees by manager, delete employee, delete role, delete department, quit

// This function generates the top-level choices for the user.  Upon selecting any of them, a new function is executed
// specific to that choice.  Upon completion of the selected task, this function is called once again.
function mainMenu () {
  console.log('Welcome to the Employee Tracker!\n')
  inquirer
    .prompt({
      type: 'list',
      message: 'Choose what you would like to do',
      choices: [
        'View employees',
        'View departments',
        'View roles',
        'Add employee',
        'Add department',
        'Add role',
        'Update role',
        'Update manager',
        'Display employees by manager',
        'Delete an employee',
        'Delete a role',
        'Delete a department',
        'View utilized budget for a department',
        'Quit'
      ],
      name: 'choice'
    })
    .then(function ({ choice }) {
      if (choice === 'View employees') {
        // orm.viewEmployees().then(function () {
        console.log('\n')
        mainMenu()
        // })
      } else if (choice === 'View departments') {
        // orm.viewDepartments().then(function () {
        console.log('\n')
        mainMenu()
        // })
      } else if (choice === 'View roles') {
        // orm.viewRoles().then(function () {
        console.log('\n')
        mainMenu()
        // })
      } else if (choice === 'Add employee') {
        console.log('Add employee\n')
        // addEmployeePrompt()
      } else if (choice === 'Add department') {
        console.log('Add department\n')

        // addDepartmentPrompt()
      } else if (choice === 'Add role') {
        console.log('Add role\n')

        // addRolePrompt()
      } else if (choice === 'Update role') {
        console.log('Update role\n')

        // updateRolePrompt()
      } else if (choice === 'Update manager') {
        console.log('Update manager\n')

        // updateManagerPrompt()
      } else if (choice === 'Display employees by manager') {
        console.log('Display employee by manager\n')

        // displayByMgrPrompt()
      } else if (choice === 'Delete an employee') {
        console.log('Delete an employee \n')

        // deleteEmployeePrompt()
      } else if (choice === 'Delete a role') {
        console.log('Delete a role\n')

        // deleteRolePrompt()
      } else if (choice === 'Delete a department') {
        console.log('Delete a department \\n')

        // deleteDepartmentPrompt()
      } else if (choice === 'View utilized budget for a department') {
        console.log('View utilized budget for a department\n')

        // displayUtilizedBudgetPrompt()
      } else {
        console.log('End connection\n')

        // orm.endConnection()
      }
    })
}

mainMenu()
