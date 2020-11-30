import React from "react";
import Buttons from "./Buttons";
import { Alert, Button, Divider } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";
import "./App.css";

const App = () => (
    <div style={{ flex: 1, backgroundColor: "#e4ebf5" }}>
        <Alert inset type="success">
            Center & Left Center
        </Alert>
        <div style={{ display: "flex" }}>
            <div style={{ flexGrow: 1, width: "100%", display: "flex", justifyContent: "flex-end" }}>
                <Button>Left Center</Button>
            </div>
            <Button style={{ flexGrow: 0, width: "150px" }}>Center</Button>
            <div style={{ flexGrow: 1, width: "100%" }}></div>
        </div>
        <Divider dense style={{ margin: "8px" }} />

        <Alert inset type="info">
            Right Corner Menu
        </Alert>
        <div style={{ display: "flex", alignItems: "center", margin: "16px" }}>
            <div style={{ flexGrow: 1, display: "flex" }}>
                <Alert type="info" style={{ flex: 1 }}>
                    All Contents
                </Alert>
            </div>
            <Button style={{ flexGrow: 0, width: "100px", margin: "8px" }}>Icon</Button>
            <Button style={{ flexGrow: 0, width: "100px", margin: "8px" }}>Menu</Button>
        </div>

        <Alert inset type="warning">
            Between Menu
        </Alert>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex" }}>
                <Button text>Left Menu</Button>
            </div>
            <div style={{ display: "flex" }}>
                <Button text>Right Menu</Button>
            </div>
        </div>

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

        <Alert inset type="warning">
            Align Items
        </Alert>
        {["flex-start", "flex-end", "center", "stretch", "baseline"].map((ai: any) => (
            <>
                <div style={{ display: "flex", height: "100px", alignItems: ai }}>
                    <Buttons />
                </div>
                <Divider dense style={{ margin: "8px" }} />
            </>
        ))}

        <Alert inset type="error">
            Align Content
        </Alert>
        {["flex-start", "flex-end", "center", "stretch", "space-between", "space-around"].map((ac: any) => (
            <>
                <div style={{ display: "flex", flexWrap: "wrap", height: "200px", alignContent: ac }}>
                    <Buttons w={"200px"} />
                </div>
                <Divider dense style={{ margin: "8px" }} />
            </>
        ))}

        <Alert inset type="success">
            Flex Wrap
        </Alert>
        {["nowrap", "wrap", "wrap-reverse"].map((fw: any) => (
            <>
                <div style={{ display: "flex", flexWrap: fw }}>
                    <Buttons w={"200px"} />
                </div>
                <Divider dense style={{ margin: "8px" }} />
            </>
        ))}
    </div>
);

export default App;
