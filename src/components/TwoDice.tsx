import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState(2);
    const [rightDie, setRightDie] = useState(5);

    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>
            <Button
                onClick={() => {
                    setLeftDie(d6());
                }}
            >
                Roll Left
            </Button>
            <span data-testid="right-die">{rightDie}</span>
            <Button
                onClick={() => {
                    setRightDie(d6());
                }}
            >
                Roll Right
            </Button>
            {leftDie == rightDie ?
                leftDie == 1 ?
                    "You Lose"
                :   "You Win"
            :   null}
            Two Dice
        </div>
    );
}
