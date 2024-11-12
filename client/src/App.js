import './App.css';
import StudentList from './components/StudentList.js'
import Student from './components/Student.js'
import CourseList from './components/CourseList.js';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <div>
            <nav>
              <Link to="/">Home</Link><br/>
              <Link to="/students">All Students</Link><br/>
              <Link to="/courses">All Courses</Link>

            </nav>
          </div>

        <Routes>
            <Route path='/students' element={<StudentList />}/>
            <Route path='/students/:id' element={<Student />}/>
            <Route path='/courses' element={<CourseList />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
