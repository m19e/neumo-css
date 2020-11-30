import React from "react";
import Buttons from "./Buttons";
import { Alert, Divider } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";
import "./App.css";

const App = () => (
    <div style={{ flex: 1, backgroundColor: "#e4ebf5" }}>
        <Alert inset type="success">
            Flex Direction
        </Alert>
        {["row", "row-reverse", "column", "column-reverse"].map((fd: any) => (
            <>
                <div style={{ display: "flex", flexDirection: fd }}>
                    <Buttons />
                </div>
                <Divider dense style={{ margin: "8px" }} />
            </>
        ))}
        <Alert inset type="info">
            Justify Content
        </Alert>
        {["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"].map((jc: any) => (
            <>
                <div style={{ display: "flex", justifyContent: jc }}>
                    <Buttons />
                </div>
                <Divider dense style={{ margin: "8px" }} />
            </>
        ))}
    </div>
);

export default App;
