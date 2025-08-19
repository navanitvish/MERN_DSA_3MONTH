// 📦 Step 1: Import dependencies
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// 🔐 Middleware to parse JSON
app.use(express.json());

// 🌐 Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/crud-demo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("connected", () => console.log("✅ MongoDB Connected"));
db.on("error", (err) => console.error("❌ MongoDB Error:", err));

// 📄 Step 2: Create Mongoose Schema & Model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});
const User = mongoose.model("User", userSchema);

// 🚀 Step 3: CRUD Routes

// 👉 Create
app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 👉 Read All
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// 👉 Read One
app.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 👉 Update
app.put("/users/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedUser) return res.status(404).json({ message: "User not found" });
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 👉 Delete
app.delete("/users/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// 🟢 Step 4: Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
