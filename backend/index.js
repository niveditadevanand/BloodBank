const express = require('express');
const cors = require('cors');
const { connection } = require('mongoose');
require('./connection');
const register = require('./model/register');
const user = require('./model/user');
const approved = require('./model/approved');

const app = express();
app.use(express.json());
app.use(cors());

// Predefined admin credentials
const ADMIN_EMAIL = 'admin@gmail.com';
const ADMIN_PASSWORD = 'password';

// Basic route to test the server
app.get('/add', (req, res) => {
    res.send("Hello");
});

// Add data to db (request form)
app.post('/add', (req, res) => {
    try {
        console.log(req.body);
        user(req.body).save();
        res.send({ message: "data added successfully" });
    } catch (error) {
        console.log(error);
    }
});

// Approve a request and save to 'approved' collection
app.post('/approved', (req, res) => {
    try {
        console.log(req.body);
        approved(req.body).save();
        res.send({ message: "data approved successfully" });
    } catch (error) {
        console.log(error);
    }
});

// View all approved requests
app.get('/approved', async (req, res) => {
    try {
        const data = await approved.find();
        res.send(data);
    } catch (error) {
        console.log(error);
    }
});

// View all the users (request form)
app.get('/req', async (req, res) => {
    try {
        const data = await user.find();
        res.send(data);
    } catch (error) {
        console.log(error);
    }
});

// Delete a request
app.delete('/req/delete/:id', async (req, res) => {
    try {
        const deletedRequest = await user.findByIdAndDelete(req.params.id);
        if (!deletedRequest) {
            return res.status(404).send({ error: "Request not found" });
        }
        res.send({ message: "Request deleted successfully" });
    } catch (error) {
        console.error(`Error deleting request with ID: ${req.params.id}`, error);
        res.status(500).send({ error: "Failed to delete request" });
    }
});

// Update a request
app.put('/req/update/:id', async (req, res) => {
    try {
        const updatedRequest = await user.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRequest) {
            return res.status(404).send({ error: "Request not found" });
        }
        res.send(updatedRequest);
    } catch (error) {
        console.error(`Error updating request with ID: ${req.params.id}`, error);
        res.status(500).send({ error: "Failed to update request" });
    }
});

// Register a new user
app.post('/register', async (req, res) => {
    try {
        console.log(req.body);
        register(req.body).save();
        res.send({ message: "data added successfully" });
    } catch (error) {
        console.log(error);
    }
});

// User and Admin login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Check for admin credentials first
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        return res.json({ message: "Admin login successful", role: "admin", redirect: "/aview" });
    }

    try {
        const user = await register.findOne({ email: email });
        if (user) {
            if (user.password === password) {
                res.json({ message: "User login successful", role: "user", redirect: "/udashboard" });
            } else {
                res.json({ message: "Password incorrect" });
            }
        } else {
            res.json({ message: "No record found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
});

app.listen(4001, () => {
    console.log("port is up and running");
});
