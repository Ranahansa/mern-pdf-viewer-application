
# MERN PDF Management Application

## Overview
A simple MERN stack application that allows users to upload PDF files and view them. The application also includes basic logging functionality. The interface is designed to be user-friendly, incorporating modern UI design trends, and implementing data tracing security methods.

## Technologies Used
- MongoDB
- Express.js
- React.js(vite)
- Node.js
- Tailwind CSS

## Features
- User registration and login with JWT authentication
- Upload PDF files
- View uploaded PDFs
- Delete uploaded PDFs
- Basic logging functionality using Winston
- Data tracing security methods

## Prerequisites
- Node.js
- MongoDB
- npm or yarn

## Environment Variables
Create a `.env` file in the root directory and add the following:

```
MONGO_URL=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

## Installation
1. Clone the repository
   ```sh
   git clone https://github.com/Ranahansa/mern-pdf-viewer-application
   cd mern-pdf-management
   ```

2. Install server dependencies
   ```sh
   cd server
   npm install
   ```

3. Install client dependencies
   ```sh
   cd client
   npm install
   ```

## Running the Application
### Server
1. Start the server
   ```sh
   cd server
   npm run dev
   ```

### Client
1. Start the client
   ```sh
   cd client
   npm run dev
   ```

### Application will be running at
- Client: `http://localhost:5173`
- Server: `http://localhost:5000`

## API Endpoints
### User Routes
- `POST /api/users/register`: Register a new user
- `POST /api/users/login`: Login an existing user

### PDF Routes
- `POST /api/pdf`: Upload a new PDF (protected, admin only)
- `GET /api/pdf`: Get all uploaded PDFs (protected, admin only)
- `GET /api/pdf/:id`: View a specific PDF (protected, admin only)
- `DELETE /api/pdf/:id`: Delete a specific PDF (protected, admin only)

## Project Structure
```
mern-pdf-management/
├── client/             # React client application
├── server/             # Express server application
│   ├── controllers/    # Controller files
│   ├── middlewares/    # Middleware files
│   ├── models/         # Mongoose models
│   ├── routes/         # Express routes
│   └── uploads/        # Uploaded PDF files
├── .env                # Environment variables
├── .gitignore
├── README.md
└── package.json
```

## Middleware
### Auth Middleware
- Protects routes to ensure only authenticated users can access
- Ensures only admin users can perform certain actions

### Logger Middleware
- Uses Winston for logging requests

### Upload Middleware
- Uses Multer for handling file uploads

## Usage
### Registration and Login
1. Register a new user by sending a POST request to `/api/users/register` with `username` and `password`.
2. Login by sending a POST request to `/api/users/login` with `username` and `password`.
3. Use the returned JWT token for accessing protected routes.

### Uploading PDFs
1. Login as an admin user.
2. Send a POST request to `/api/pdf` with the PDF file and a `title`.

### Viewing PDFs
1. Send a GET request to `/api/pdf` to get all uploaded PDFs.
2. Send a GET request to `/api/pdf/:id` to view a specific PDF.

### Deleting PDFs
1. Send a DELETE request to `/api/pdf/:id` to delete a specific PDF.

## Contributing
Feel free to submit issues and pull requests for new features, bug fixes, and improvements.

## License
This project is licensed under the MIT License.

---   THANK YOU FOR VISITING !. ---