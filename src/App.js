import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Student from "./pages/Student";
import Teacher from "./pages/Teacher";

// Dummy data for classes
const mockClasses = [
  { id: 1, title: 'Computer Networks', teacher: 'Ian Smith', schedule: 'Tuesday and Thursday 12pm-1pm' },
  { id: 2, title: 'Algorithms', teacher: 'Stewart Weiss', schedule: 'Wednesday and Friday 3pm-4pm' },
  { id: 3, title: 'Operating Systems', teacher: 'Karen Taylor', schedule: 'Monday 9am-11am' },
  { id: 4, title: 'Database Systems', teacher: 'James Johnson', schedule: 'Friday 2pm-4pm' }
];

function App() {
  const [role, setRole] = useState('student');            // Role switching
  const [classes, setClasses] = useState(mockClasses);    // Initialize with dummy data
  const [students, setStudents] = useState([
    { id: 1, name: "Mark", enrolledClasses: [] },
    { id: 2, name: "Elroy", enrolledClasses: [] }
  ]);
  const [currentStudent, setCurrentStudent] = useState(1); // Default to the first student

  const handleEnroll = (classId) => {
    setStudents(prevStudents => {
      return prevStudents.map(student => {
        if (student.id === currentStudent && !student.enrolledClasses.includes(classId)) {
          student.enrolledClasses.push(classId);
        }
        return student;
      });
    });
  };

  return (
    <div className="app">
      <Navbar role={role} setRole={setRole} />
      {role === 'student' ? (
        <Student
          classes={classes}
          enrolledClasses={students.find(s => s.id === currentStudent)?.enrolledClasses || []}
          setEnrolledClasses={handleEnroll}
          students={students}
          currentStudent={currentStudent}
          setCurrentStudent={setCurrentStudent}
        />
      ) : (
        <Teacher
          classes={classes}
          setClasses={setClasses}
        />
      )}
    </div>
  );
}

export default App;
