import React from "react";
import Buttons from "./Buttons";
import { Divider } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";
import "./App.css";

const App = () => (
    <div style={{ flex: 1 }}>
        {["row", "row-reverse", "column", "column-reverse"].map((fd: any) => (
            <>
                <div style={{ display: "flex", flexDirection: fd }}>
                    <Buttons />
                </div>
                <Divider dense style={{ margin: "8px" }} />
            </>
        ))}
    </div>
);

export default App;
