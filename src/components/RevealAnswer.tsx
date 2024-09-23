import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            Reveal Answer
            <Button
                onClick={() => {
                    setVisible(!visible);
                }}
            >
                {" "}
                Reveal Answer
            </Button>
            {visible ? "42" : null}
        </div>
    );
}
