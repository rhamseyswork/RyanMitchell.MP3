import path from 'path';
import express from 'express';
import dotebnv from 'dotenv';
import cookieParser from 'cookie-parser';
dotebnv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import linksRoutes from './routes/linksRoutes.js';
import userRoutes from './routes/userRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import cors from 'cors';
// const express = require('express');
//npm i -D nodemon concurrently
//npm i dotenv 

connectDB();

const app = express();

// Enable CORS for all origins
app.use(cors());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true // Optional: If you need to send cookies or authentication headers
}));

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Cookie parser middleware
app.use(cookieParser());

app.use('/api/links', linksRoutes);
app.use('/api/users', userRoutes);
app.use('/api/upload', uploadRoutes);

const __dirname = path.resolve(); // Set __dirname to the absolute path of the current directory
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/client/build')));

    app.get('*', (req, res) => 
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    );
} else {
    app.get('/', (req, res) => {
        res.send('API is running...');
    });
}

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
