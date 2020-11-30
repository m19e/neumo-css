import React from "react";
import { Button } from "ui-neumorphism";

const Buttons = ({ w = "100px" }) => (
    <>
        {[1, 2, 3, 4, 5].map((n) => (
            <Button rounded style={{ margin: "8px", width: w }}>
                {n}
            </Button>
        ))}
    </>
);

export default Buttons;
