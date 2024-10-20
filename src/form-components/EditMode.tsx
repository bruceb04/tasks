import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [inEditMode, setInEditMode] = useState(false);
    const [studentName, setStudentName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);


    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setStudentName(event.target.value);
    }
    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setInEditMode(event.target.checked);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <Form.Check
                type="switch"
                id="is-edit-mode"
                label="Edit Mode"
                checked={inEditMode}
                onChange={updateEditMode}
            />
            {inEditMode ?
                <Form.Group id="is-in-edit-mode">
                    <Form.Control value={studentName} onChange={updateName} />
                    <Form.Check
                        type="checkbox"
                        label="student"
                        checked={isStudent}
                        onChange={updateStudent}
                    />
                </Form.Group>
            : isStudent ?
                studentName + " is a student"
            :   studentName + " is not a student"}
        </div>
    );
}
