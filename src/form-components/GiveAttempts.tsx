import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState(3);
    const [delta, setDelta] = useState("");

    const requested = parseInt(delta) || 0;

    return (
        <div>
            <Form.Control
                type="number"
                value={delta}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setDelta(event.target.value)
                }
            />
            <button
                disabled={attempts <= 0}
                onClick={() => {
                    setAttempts(attempts - requested);
                }}
            >
                use
            </button>
            <button
                onClick={() => {
                    setAttempts(attempts + requested);
                }}
            >
                gain
            </button>
            {attempts}
        </div>
    );
}
