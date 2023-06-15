# backed
Title: CRUD Todo API with Node.js, Express, and MSSQL

Description:
This repository contains a CRUD (Create, Read, Update, Delete) Todo API built using Node.js, Express, and MSSQL. The API provides endpoints to manage a collection of todos, allowing you to create new todos, retrieve existing ones, update their details, and delete them.

Features:
- Create a new todo with a title and description.
- Retrieve a list of all existing todos.
- Get details of a specific todo by its ID.
- Update the title and description of a todo.
- Delete a todo by its ID.

Tech Stack:
- Node.js: A JavaScript runtime environment for server-side development.
- Express: A fast and minimalist web application framework for Node.js, used for handling HTTP requests and routing.
- MSSQL: A Microsoft SQL Server database management system used for storing and retrieving todo data.

Instructions:
1. Clone the repository to your local machine using the following command:
```
git clone <repository_url>
```
2. Install the required dependencies by running:
```
npm install
```
3. Configure the MSSQL database connection by updating the database credentials in the `config.js` file.
4. Run the application using the command:
```
node app.js
```
5. Access the API endpoints using a tool like Postman or any web browser.

API Endpoints:
- `GET /todos`: Retrieves a list of all todos.
- `GET /todos/:id`: Retrieves details of a specific todo by its ID.
- `POST /todos`: Creates a new todo with the provided title and description.
- `PUT /todos/:id`: Updates the title and description of a todo by its ID.
- `DELETE /todos/:id`: Deletes a todo by its ID.

Feel free to explore, modify, and extend the functionality of this Todo API according to your needs. Contributions and suggestions are always welcome!

Note: Ensure you have Node.js and MSSQL installed on your machine before running this application.
