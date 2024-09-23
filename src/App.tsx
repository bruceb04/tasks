import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Counter } from "./components/Counter";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { ChangeType } from "./components/ChangeType";
import { CycleHoliday } from "./components/CycleHoliday";

let listStuff = ["Item 1", "Item 2", "Item 3"];

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
                <ul>
                    {listStuff.map((element, index) => (
                        <li key={index}>{element}</li>
                    ))}
                </ul>
            </header>
            <Container>
                <Row>
                    <Col
                        style={{
                            width: "50%",
                            height: "50%",
                            backgroundColor: "red",
                        }}
                    >
                        Column 1
                    </Col>
                    <Col
                        style={{
                            width: "50%",
                            height: "50%",
                            backgroundColor: "red",
                        }}
                    >
                        Column 2
                    </Col>
                </Row>
            </Container>
            <h1>
                <img
                    src="https://cdn.discordapp.com/attachments/1197987199371718768/1223349837831868560/IMG_7579.jpg?ex=66da0352&is=66d8b1d2&hm=4c0bc7c8c68952f0635f30868e16bc868233c563178bfba50737aa9ce3d48a71&"
                    alt="A breathtaking performance"
                />
            </h1>
            <p>Green background too! Hello World!</p>
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
