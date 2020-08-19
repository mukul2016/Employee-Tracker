const inquirer = require('inquirer')
const mysql = require('mysql2')
// const mysql = require('mysql2/promise')

// Creates the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  // Your MySQL username
  user: 'root',
  // Your MySQL password
  password: '',
  database: 'employee_db'
})

connection.connect(err => {
  if (err) throw err
  console.log('connected as id ' + connection.threadId)
})

async function addEmployeeMenu () {
  let answers = await inquirer.prompt([
    {
      name: 'firstName',
      message: "What is the employee's first name?"
    },
    {
      name: 'LastName',
      message: "What is the employee's last name?"
    },
    {
      name: 'empRole',
      message: "What is the employee's role?"
    },
    {
      name: 'empMgr',
      message: "Who is the employee's manager?"
    }
  ])
  // .then(answers => {
  console.info('Answers:', answers)
  return answers
  // })
}
async function viewAllEmployees () {
  // SELECT * FROM employee;
  let query = 'SELECT * FROM employee'
  await connection.query(query, function (error, results, fields) {
    if (error) throw error
  })
  console.table(results)
}
async function addAnEmpIntoDB (firstName, lastName, roleId, empMgr) {
  // firstName = answers.firstName
  // lastName = answers.lastName
  // roleId = answers.roleId

  // console.log(answers)
  console.log(firstName)
  console.log(lastName)
  console.log(roleId)
  console.log(empMgr)

  let query =
      'INSERT INTO employee (first_name, last_name, role_id, manager_id) \
      VALUES (?, ?, ?, ?)',
    [firstName, lastName, roleId, empMgr]

  await connection.query(query, function (error, results, fields) {})
  console.table(results)
}

async function addAnEmployee () {
  try {
    let answers = await addEmployeeMenu()

    console.info('Answers in addAnEmployee', answers)
    let ans = Object.values(answers)
    const [firstName, lastName, roleId, empMgr] = ans

    // let firstName = answers.firstName
    // let lastName = answers.lastName
    // let roleId = answers.roleId

    console.log(answers)
    console.log(firstName)
    console.log(lastName)
    console.log(roleId)
    console.log(empMgr)

    let result = await addAnEmpIntoDB(firstName, lastName, roleId, empMgr)
  } catch (error) {
    console.log(error)
  }
}

function mainMenu () {
  console.log('Welcome to the Employee Tracker!\n')
  inquirer
    .prompt({
      type: 'list',
      message: 'Choose what you would like to do',
      choices: [
        'view all departments',
        'view all roles',
        'view all employees',
        'add a department',
        'add a role',
        'add an employee',
        'update an employee role',
        'Quit'
      ],
      name: 'choice'
    })
    .then(function ({ choice }) {
      if (choice === 'view all employees') {
        viewAllEmployees().then(function () {
          mainMenu()
        })
      } else if (choice === 'view all departments') {
        mainMenu()
      } else if (choice === 'view all roles') {
        mainMenu()
      } else if (choice === 'add an employee') {
        addAnEmployee()
        // addEmployeeMenu()
      } else if (choice === 'add a department') {
      } else if (choice === 'add a role') {
      } else if (choice === 'update an employee role') {
      } else {
        console.log('End connection\n')
      }
    })
}

mainMenu()
