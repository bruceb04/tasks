import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { ChangeType } from "./components/ChangeType";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript by Bruce Bermel
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </header>
            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter />
            <hr />
            <RevealAnswer />
            <hr />
            <StartAttempt />
            <hr />
            <TwoDice />
            <hr />
            <ChangeType />
            <hr />
            <CycleHoliday />
        </div>
    );
}

export default App;
