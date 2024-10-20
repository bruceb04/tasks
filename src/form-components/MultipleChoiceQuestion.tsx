import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [bruh, setBruh] = useState("second");

    return (
        <div>
            <h3>{bruh}</h3>
            <h3>{options}</h3>
            <h3>{expectedAnswer}</h3>
        </div>
    );
}
