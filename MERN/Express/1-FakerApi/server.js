const express = require("express");
const app = express();
//install faker Api.
const { faker } = require('@faker-js/faker');
const port = 8000;
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const User = [];

const createUser = () => {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
    
  }
}

const createCompany =() =>{
  return {
    name: faker.company.name(),
    industry: faker.word.adjective(),
    ceo: faker.internet.userName(),
    department: faker.commerce.department(),
  }
}

Array.from({ length: 1 }).forEach(() => {
  // User.push(" UserName : ");
  // User.push(createUser().username);
  // User.push(" Email : ");
  // User.push(createUser().email);
  // User.push(" BirthDate : ");
  // User.push(createUser().birthdate);
  // User.push(" Password : ");
  // User.push(createUser().password);
  User.push(createUser());
});

//create a new user to display.
app.get('/api/users/new', (req, res) => {
  let newUser = createUser()
  // res.json(newUser)
  res.jsonp(User);
})

//create a new company to display.
app.get('/api/companies/new', (req, res) => {
  let newCompany = createCompany()
  res.json(newCompany)
})

//create a new user/company - random choose from faker Api library to display.
app.get('/api/company/user', (req, res) => {
  let newCompany = createCompany()
  let newUser = createUser()
  res.json({ newCompany, newUser })
})


// this needs to be below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));
