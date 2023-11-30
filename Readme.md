# BuddyMeter

Welcome to the MERN Stack Quiz Application project! This project is developed by Adarsh.

## Overview

This Quiz Application is built using the MERN (MongoDB, Express.js, React, Node.js) stack. It provides an interactive platform for creating and taking quizzes. The application supports user authentication, quiz creation and management, and a responsive user interface.

## Technologies Used

- MongoDB: Database for storing quiz and user information.
- Express.js: Backend framework for handling server-side logic.
- React: Frontend library for building user interfaces.
- Node.js: Runtime environment for executing JavaScript on the server.

## Project Structure

- `client`: React frontend application.
- `server`: Node.js backend server.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed:

- Node.js: [Download Node.js](https://nodejs.org/)
- MongoDB: [Install MongoDB](https://docs.mongodb.com/manual/installation/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/username/mern-quiz-app.git
   ```

2. Change to the project directory:

   ```bash
   cd mern-quiz-app
   ```

3. Install dependencies for the client and server:

   ```bash
   # Install client dependencies
   cd client
   npm install

   # Install server dependencies
   cd ../server
   npm install
   ```

### Configuration

1. Set up MongoDB:

   - Create a MongoDB database.
   - Update the database connection string in `server/config/config.js` with your MongoDB URI.

2. Set up environment variables:

   - Create a `.env` file in the `server` directory.
   - Add the following variables:

     ```env
     PORT=6000
     NODE_ENV=development
     MONGODB_URI=your-mongodb-uri
     ```

     Replace `your-mongodb-uri` with your MongoDB URI and `your-secret-key` with a secret key for JWT.

### Running the Project

1. Start the server:

   ```bash
   # From the server directory
   npm start
   ```

2. Start the client:

   ```bash
   # From the client directory
   npm start
   ```

3. Open your browser and visit `http://localhost:3000` to view the application.

## Contributing

If you would like to contribute to this project, please follow our [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.