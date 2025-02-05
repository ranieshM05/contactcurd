Contact Manager CRUD App 📝📞

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application to store and manage contacts with CRUD functionality. Users can add, edit, delete, search, and sort contacts by name.

🚀 Features
✅ Add, Edit, Delete Contacts
✅ Search Contacts by Name
✅ Sort Contacts Alphabetically
✅ User-friendly UI
✅ RESTful API Integration
✅ MongoDB Atlas as Database

🛠 Tech Stack

🌐 Frontend
React.js
Axios (for API calls)
CSS (for styling)

⚙️ Backend
Node.js
Express.js
MongoDB with Mongoose
CORS & dotenv

 Setup Instructions
 1. Clone the Repository

git clone https://github.com/your-username/contact-manager.git
cd contact-manager

🔹 2. Backend Setup

cd backend
npm init -y    
npm install web-vitals express mongoose cors dotenv

✏️ Configure .env (inside backend/)
Create a .env file and add:

MONGO_URI=mongodb+srv://your_username:your_password@cluster0.mongodb.net/curd
PORT=3000

🚀 Run Backend
node server.js

The backend will run on http://localhost:3000

🔹 3. Frontend Setup

npx create-react-app frontend
cd frontend
npm install axios react-router-dom
npm install web-vitals   




🚀 Run Frontend

npm start
The frontend will run on http://localhost:3000 (or another available port)

🖥 API Endpoints
Method	Endpoint	Description
GET	/contacts	Get all contacts
POST	/contacts	Add a new contact
PUT	/contacts/:id	Update a contact
DELETE	/contacts/:id	Delete a contact


🎯 Future Enhancements
✅ Add authentication (JWT)
✅ Add profile pictures for contacts
✅ Deploy on Netlify (frontend) & Render (backend)


🎉 Contributing
Create a new branch (git checkout -b feature-branch)
Commit changes (git commit -m "Added new feature")
Push to GitHub (git push origin feature-branch)
Create a Pull Request
