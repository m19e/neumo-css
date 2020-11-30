import React from "react";
import Buttons from "./Buttons";
import "ui-neumorphism/dist/index.css";
import "./App.css";

const App = () => (
    <div style={{ flex: 1 }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
            <Buttons />
        </div>
    </div>
);

export default App;
