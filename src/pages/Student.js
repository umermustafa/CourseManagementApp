import React from "react";

function Student({ classes, enrolledClasses, setEnrolledClasses, students, currentStudent, setCurrentStudent }) {
    const enroll = (classId) => {
        if (!enrolledClasses.includes(classId)) {
            setEnrolledClasses(classId);
        }
    };

    return (
        <div className="dashboard">
            <h1>Welcome Student</h1>
            <p>Browse Classes and Complete Enrollment</p>

            <div className="student-switch">
                <h3>Select Student:</h3>
                {students.map(student => (
                    <button
                        key={student.id}
                        onClick={() => setCurrentStudent(student.id)}
                        className={student.id === currentStudent ? 'active' : ''}>
                        {student.name}
                    </button>
                ))}
            </div>
            <br />
            <div className="class-list">
                {classes.length > 0 ? (
                    classes.map((cls) => (
                        <div key={cls.id} className="class-card">
                            <h2>{cls.title}</h2>
                            <p>Teacher: {cls.teacher}</p>
                            <p>Schedule: {cls.schedule}</p>
                            <button
                                onClick={() => enroll(cls.id)}
                                disabled={enrolledClasses.includes(cls.id)}
                            >
                                {enrolledClasses.includes(cls.id) ? 'Enrolled' : 'Enroll'}
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No classes available. Please check back later.</p>
                )}
            </div>
        </div>
    );
}

export default Student;
