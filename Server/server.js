const express = require('express');
const mongoose = require('mongoose');
const { isConnected } = require("./config/db.js");
const cors = require("cors");
const routes = require('./routes');
require('dotenv').config(); 

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); 

// Routes
app.get("/", (req, res) => {
  res.json({"Database Connection" : isConnected() ? "Connected" : "Not Connected"});
});

app.get("/hello", (req, res) => {
  res.send("Hello World!!");
});

app.use("/sport", routes);

// Database connection
mongoose.connect(process.env.URI)
    .then(() => {
        console.log('MongoDB connected');
        
        // Start server after successful database connection
        const PORT = process.env.PORT || 3200;
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Database connection error:', err);
        process.exit(1);
    }); 

