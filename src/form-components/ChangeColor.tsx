import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = ["#000", "#F00", "#FF0", "#00F", "#0f0", "#0FF", "#F0F", "#FFF"];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState("#000");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            {COLORS.map((c: string) => (
                <Form.Check
                    type="radio"
                    name="colors"
                    label={c}
                    value={c}
                    checked={c === color}
                    onChange={updateColor}
                    key={c}
                />
            ))}
            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                {color}
            </div>
        </div>
    );
}
