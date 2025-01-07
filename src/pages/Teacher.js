import React, { useState } from "react";

function Teacher({ classes, setClasses }) {
    const [newClass, setNewClass] = useState({ title: '', teacher: '', schedule: '' });

    const updateClass = (e) => {
        const { name, value } = e.target;
        setNewClass({ ...newClass, [name]: value });
    };

    const createClass = (e) => {
        e.preventDefault();
        if (newClass.title && newClass.teacher && newClass.schedule) {
            setClasses([...classes, { ...newClass, id: classes.length + 1 }]);
            setNewClass({ title: '', teacher: '', schedule: '' });
        }
    };

    return (
        <div className="dashboard">
            <h1>Welcome Teacher</h1>
            <p>Manage Classes</p>
            <form onSubmit={createClass} className="create-class-form" autoComplete="off">
                <input
                    type="text"
                    name="title"
                    value={newClass.title}
                    onChange={updateClass}
                    placeholder="Class Title"
                    required
                />
                <input
                    type="text"
                    name="teacher"
                    value={newClass.teacher}
                    onChange={updateClass}
                    placeholder="Teacher Name"
                    required
                />
                <input
                    type="text"
                    name="schedule"
                    value={newClass.schedule}
                    onChange={updateClass}
                    placeholder="Schedule"
                    required
                />
                <button type="submit" disabled={!newClass.title || !newClass.teacher || !newClass.schedule}>
                    Create Class
                </button>
            </form>
            <div className="class-list">
                {classes.length > 0 ? (
                    classes.map((cls) => (
                        <div key={cls.id} className="class-card">
                            <h2>{cls.title}</h2>
                            <p>Teacher: {cls.teacher}</p>
                            <p>Schedule: {cls.schedule}</p>
                        </div>
                    ))
                ) : (
                    <p>No classes created yet. Start by adding a new class!</p>
                )}
            </div>
        </div>
    );
}

export default Teacher;
