# Simple RESTful API Demo
This is a demonstration of a simple RESTful API I built using Express.js as one of the activity requirements for the WCSERVER course. Here, various endpoints were defined to implement CRUD operations on a simple dataset. HTTP methods were used to retrieve all data, retrieve data by ID, create new data, and delete data.

## Running the API
1. Ensure Express.js is installed by running:
   ```
   npm install express
   ```
2. Start the server by running:
   ```
   node index.js
   ```
3. The API will be running at http://localhost:3000

## API Endpoints/Routes
- Root Route or `/`: Displays available routes.
- GET `/api/users`: Returns all users.
- GET `/api/users/(id)`: Fetches a specific user by ID.
- GET `/api/users/(id)/(name)/(email)/(age)/(salary)`: Retrieves and displays parameters. Replace (id) and others with actual values.
- POST `/api/users`: Adds a new user through a form submission page.
- DELETE `/api/delete/(id)`: Deletes a user by ID.
