import React from "react";

function Navbar({ role, setRole }) {
    return (
        <nav className="navbar">
            <h1>Class Management App</h1>
            <div>
                <button
                    onClick={() => setRole('student')}
                    className={role === 'student' ? 'active' : ''}>
                    Student
                </button>
                <button
                    onClick={() => setRole('teacher')}
                    className={role === 'teacher' ? 'active' : ''}>
                    Teacher
                </button>
            </div>
        </nav >
    )
}

export default Navbar;