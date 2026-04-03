🚀 User Manager MVC App
⚡ Production-Ready CRUD System (Node.js + Express + MongoDB)












A scalable and modular User Management System built using Node.js, Express, MongoDB, and EJS, following the MVC architecture used in real-world backend systems.

💡 Designed to demonstrate clean architecture, efficient querying, and practical backend engineering skills.

🌐 Live Demo

🚀 Coming Soon (Deploying on Render)

🌟 Highlights
🔥 Fully functional CRUD application
🧠 Clean separation using MVC architecture
⚡ Optimized MongoDB querying with regex filtering
🎯 Built with industry-level backend practices
📦 Modular and scalable codebase
📌 Features
👤 User Management
➕ Add users (Name, Email, City, Rating)
📄 View all users dynamically
❌ Delete users instantly
🔍 Smart Filtering System
🎯 Filter by City
⭐ Filter by Rating
🔎 Partial search support (e.g., "Del" → Delhi)
⚡ Efficient MongoDB $regex querying
🧱 Architecture
🗂️ Strict MVC pattern
🔀 Clean routing with Express
🧠 Centralized business logic
🛠️ Tech Stack
Layer	Technology
Backend	Node.js, Express.js
Database	MongoDB + Mongoose
Frontend	EJS
Architecture	MVC Pattern
📂 Project Structure
user-manager/
│
├── models/          # Mongoose schemas (Data Layer)
├── controllers/     # Business logic (Controller Layer)
├── routes/          # Express routes (Routing Layer)
├── views/           # EJS templates (Presentation Layer)
│
├── app.js           # Entry point
└── package.json
⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/YOUR_USERNAME/user-manager-mvc.git
cd user-manager-mvc
2️⃣ Install Dependencies
npm install
3️⃣ Start MongoDB
mongodb://127.0.0.1:27017/userDB
4️⃣ Run Server
node app.js
5️⃣ Open in Browser
http://localhost:3000/users
📡 API Endpoints
Method	Route	Description
GET	/users	Get all users
POST	/users/add	Add new user
GET	/users?city=Del	Filter by city
GET	/users?rating=5	Filter by rating
DELETE	/users/delete/:id	Delete a user
🔍 Filtering Logic

Supports dynamic query-based filtering:

/users?city=Delhi
/users?rating=5
/users?city=Del
⚡ How it works:
Uses MongoDB $regex for partial matching
Enables case-insensitive search
Dynamically builds query object in controller
⚙️ How It Works
User submits form → Express route handles request
Controller processes business logic
Mongoose interacts with MongoDB
Data is passed to EJS view
UI updates dynamically
📸 Screenshots
🏠 User List Page

(Add screenshot here)

➕ Add User Form

(Add screenshot here)

🔍 Filter Results

(Add screenshot here)

🧩 Challenges & Learnings
Handling dynamic filtering using MongoDB $regex
Structuring project using MVC pattern
Managing clean separation of concerns
Debugging async database operations
🚀 Future Enhancements
✏️ Update/Edit user functionality (PUT/PATCH)
⚡ Live search (AJAX / Fetch API)
🎨 UI upgrade with Bootstrap / Tailwind
🌐 Deployment (Render / Railway / Vercel)
⚛️ React frontend (Full MERN upgrade)
🔐 Authentication (JWT / Sessions)
🤝 Contributing

Contributions are welcome!

1. Fork the repo  
2. Create a new branch  
3. Make changes  
4. Submit a PR 🚀  
📄 License

This project is licensed under the MIT License.

👨‍💻 Author

Ayush Kumar
🚀 Aspiring Full Stack Developer

⭐ Support

If you like this project:

👉 Drop a ⭐ on GitHub — it really helps!
