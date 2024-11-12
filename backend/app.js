const express = require('express');
const app = express();
const students = require('./routes/students');
const courses = require('./routes/courses');
const cors = require('cors');

//enable cors
app.use(cors());

//middleware
app.use(express.json())

//routes
app.use(students)
app.use(courses)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
