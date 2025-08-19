const express = require("express");
const app = express();

// db connection
require("./config/database").connect();

// middleware
app.use(express.json());

// routes
const userRoutes = require("./routes/user");
app.use("/api/v1", userRoutes);

require("dotenv").config();
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port localhost ${port}`);
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});
