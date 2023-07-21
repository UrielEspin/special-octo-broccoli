/// Create web Server
const express = require('express');
const app = express();

/// Create connection to DB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/express-demo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to DB'))
    .catch(err => console.log('Cannot connect to DB', err));

/// Create Schema
const courseSchema = new mongoose.Schema({
    name: String,