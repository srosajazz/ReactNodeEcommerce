const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

//import routes
const useRoutes = require('./routes/user');

//app
const app = express();

//db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => console.log('DB Connected'));


//routes middleware
app.use("/api", useRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})