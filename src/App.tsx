import React from "react";
import Buttons from "./Buttons";
import "ui-neumorphism/dist/index.css";
import "./App.css";

const App = () => (
    <div style={{ flex: 1 }}>
        {["row", "row-reverse", "column", "column-reverse"].map((fd: any) => (
            <div style={{ display: "flex", flexDirection: fd, borderBottom: "dashed 1px" }}>
                <Buttons />
            </div>
        ))}
    </div>
);

export default App;
