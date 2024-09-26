import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Double({
    dhValue,
    setDhValue,
}: {
    dhValue: number;
    setDhValue: (newDhNumber: number) => void;
}) {
    return (
        <Button
            onClick={() => {
                setDhValue(2 * dhValue);
            }}
        >
            Double
        </Button>
    );
}

function Halve({
    dhValue,
    setDhValue,
}: {
    dhValue: number;
    setDhValue: (newDhNumber: number) => void;
}) {
    return (
        <Button
            onClick={() => {
                setDhValue(0.5 * dhValue);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Double dhValue={dhValue} setDhValue={setDhValue} />
            <Halve dhValue={dhValue} setDhValue={setDhValue} />
        </div>
    );
}
