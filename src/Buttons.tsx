import React from "react";
import { Button } from "ui-neumorphism";

const Buttons = () => (
    <>
        {[1, 2, 3, 4, 5].map((n) => (
            <Button style={{ margin: "8px", width: "100px" }}>{n}</Button>
        ))}
    </>
);

export default Buttons;
