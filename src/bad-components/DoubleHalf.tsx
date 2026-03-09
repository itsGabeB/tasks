import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { dhValue, setDhValue } from "./DoubleHalfState";

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Button
                onClick={() => {
                    setDhValue((prev) => 2 * prev);
                }}
            >
                Double
            </Button>
            <Button
                onClick={() => {
                    setDhValue((prev) => 0.5 * prev);
                }}
            >
                Halve
            </Button>
        </div>
    );
}
