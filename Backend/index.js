const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config()
const path = require("path");

const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const patientRoutes = require('./routes/patient');
const taskRoutes = require('./routes/task');

app.use(cors(
    {
        origin: ["https://deploy-mern-frontend.vercel.app"],
        methods: ["POST", "GET", "PUT", "DELETE"],
        credentials: true
    }
));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

  app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URL).then((res) => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log(err);
})

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/patient', patientRoutes);
app.use('/api/task', taskRoutes)

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
