import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    UM COS420 with React Hooks and TypeScript
                </header>
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload. Sean Whynot Hello World COS420
                </p>
            </div>
            <div>
                <h1>This is my header text for test 1</h1>
            </div>
            <div style={{ backgroundColor: "red" }}>
                <h1>Background is red!</h1>
            </div>
            <div>
                <img
                    src="C:\Users\Sean\Pictures\Screenshots"
                    alt="This is an image of a logo with alt text for test 2"
                />
            </div>
            <div>
                <ul>
                    <li>First list element</li>
                    <li>Second list element</li>
                    <li>Third list element</li>
                </ul>
            </div>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            First column.
                            <div style={{ backgroundColor: "red" }}>
                                <h1>rectangle </h1>
                            </div>
                        </Col>
                        <Col>
                            Second column. You can put whatever you want in
                            here, and it will be on the right side. Maybe try
                            adding an image?
                            <div style={{ backgroundColor: "red" }}>
                                <h1>RECTANGLE </h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default App;
