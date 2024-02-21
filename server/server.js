// server.js
const express = require("express");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");
require("dotenv").config();
const connectDB = require("./config/db");
const app = express();

connectDB();
// Middleware
app.use(express.json());
app.use(cors());

// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const blogRoutes = require("./routes/blogRoutes");
app.use("/api/blog", blogRoutes);

const commentRoutes = require("./routes/commentRoutes");
app.use("/api/comment", commentRoutes);

// Error handling middleware
app.use(errorHandler);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));