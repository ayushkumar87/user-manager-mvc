🚀 User Manager MVC App (Node.js + Express + MongoDB)
A full-stack User Management Web Application built using Node.js, Express, MongoDB, and EJS, following the MVC (Model-View-Controller) architecture.
This project demonstrates real-world backend development concepts including CRUD operations, filtering, routing, and database integration.


📌 Features
•	✅ Add new users (Name, Email, City, Rating)
•	✅ View all users
•	✅ Delete users
•	✅ Filter users by city and rating
•	✅ Partial search (e.g., "Del" → Delhi)
•	✅ MVC architecture for clean code structure


🛠️ Tech Stack
•	Backend: Node.js, Express.js
•	Database: MongoDB (Mongoose ODM)
•	Frontend: EJS (Embedded JavaScript Templates)
•	Architecture: MVC (Model-View-Controller)


📂 Project Structure
user-manager/
│
├── models/          # Database schemas
├── controllers/     # Business logic
├── routes/          # API routes
├── views/           # EJS templates (UI)
│
├── app.js           # Main server file
└── package.json

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/YOUR_USERNAME/user-manager-mvc.git
cd user-manager-mvc
2️⃣ Install dependencies
npm install
3️⃣ Start MongoDB
Make sure MongoDB is running locally:
mongodb://127.0.0.1:27017/userDB
4️⃣ Run the application
node app.js
5️⃣ Open in browser
http://localhost:3000/users

🔍 Filtering Logic
•	Filter users using query parameters:
o	/users?city=Delhi
o	/users?rating=5
•	Supports partial matching using MongoDB $regex

🧠 Key Concepts Learned
•	MVC architecture implementation
•	RESTful routing with Express
•	MongoDB integration using Mongoose
•	Form handling (GET & POST requests)
•	Dynamic rendering with EJS
•	Query-based filtering

🚀 Future Improvements
•	✨ Edit/Update user functionality
•	🔍 Live search (real-time filtering)
•	🎨 UI improvements with Bootstrap
•	🌐 Deployment (Render / Vercel / Railway)
•	⚛️ React frontend integration

🤝 Contributing
Contributions are welcome! Feel free to fork this repo and submit a PR.

📄 License
This project is open-source and available under the MIT License.


👨‍💻 Author
Ayush Kumar
Aspiring Full Stack Developer


⭐ Show Your Support
If you like this project, please ⭐ star the repository!


