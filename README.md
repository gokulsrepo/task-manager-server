## Task Manager Application (MERN Stack)

# Overview
This is a Task Manager Application built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to manage tasks effectively with CRUD operations.

# Features
- Task management (create, read, update, delete tasks)
- Responsive UI for desktop and mobile

# Required Applications
- Node.js
- MongoDB Atlas Account

# Setup Locally (for back-end)
To run this application locally, follow these steps:

Create a MongoDB Atlas account:

- Create a account here: https://www.mongodb.com/cloud/atlas/register
- This video will be useful: https://www.youtube.com/watch?v=NcN9S0DR1nU
- After creating, you will get a URI similiar to this mongodb+srv://domain:27017/username:password@app.domain.mongodb.net/

Clone the repository:
```
git clone https://github.com/gokulsrepo/task-manager-server.git
cd task-manager-server
```
Set up environment variables:
Create a .env file in the root directory with the following variables:
```
MONGO_URI=your_mongodb_uri
PORT=4000
```
Install dependencies:
```
npm install
```
# Running the Application:

Start the backend server:
```
npm start
```
Your back-end will be running at http://localhost:4000/.

Before accessing the application, make sure you have completed the installation for front-end. (https://github.com/gokulsrepo/task-manager-client)
