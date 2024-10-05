/*****************
 * Jimwel Valdez *
 * WD-301        *
 ****************/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const users = [
  { id: 1, name: 'Carmela', email: 'mela@gmail.com', age: 25, salary: 25000 },
  { id: 2, name: 'Joseph', email: 'joe@yahoo.com', age: 30, salary: 45000 },
  { id: 3, name: 'James', email: 'james@msn.com', age: 35, salary: 30000 },
  { id: 4, name: 'John', email: 'john@gmail.com', age: 40, salary: 25000 },
  { id: 5, name: 'Frank', email: 'frank@yahoo.com', age: 45, salary: 45000 },
  { id: 6, name: 'Alex', email: 'alex@msn.com', age: 21, salary: 33000 },
];

// Root route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/' + 'index.html');
});

// Returns all users
app.get('/api/users', (req, res) => {
  res.send(users);
});

// Form submission
app.get('/api/users/new', function (req, res) {
  res.sendFile(__dirname + '/' + 'new.html');
});

// Fetches a specific user by ID.
app.get('/api/users/:id', (req, res) => {
  const user = users.find((h) => h.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User ID not found.');
  else res.send(user);
});

// Retrieves and displays parameters.
app.get('/api/users/:id/:name/:email/:age/:salary', (req, res) => {
  res.send(req.params);
});

// Adds a new user through form submission.
app.post('/api/users', urlencodedParser, function (req, res) {
  // Prepare output in JSON format
  let response = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
    salary: req.body.salary,
  };

  users.push(response);
  res.send(users);
});

// Deletes a user by ID.
app.delete('/api/delete/:id', (req, res) => {
  let user = users.find((h) => h.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User ID not found.');
  else {
    let userIndex = users.findIndex((h) => h.id === parseInt(req.params.id));
    users.splice(userIndex, 1);
    res.send(users);
  }
});

app.listen(3000, () => console.log('Listening on port 3000'));
