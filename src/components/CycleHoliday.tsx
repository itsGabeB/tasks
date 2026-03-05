import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Thanksgiving"
    | "Christmas"
    | "Halloween"
    | "easter"
    | "NewYears";

const BYALPHABET: Record<Holiday, Holiday> = {
    Christmas: "easter",
    easter: "Halloween",
    Halloween: "NewYears",
    NewYears: "Thanksgiving",
    Thanksgiving: "Christmas",
};

const BYTIME: Record<Holiday, Holiday> = {
    easter: "Halloween",
    Halloween: "Thanksgiving",
    Thanksgiving: "Christmas",
    Christmas: "NewYears",
    NewYears: "easter",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Christmas");

    function scrollAlphabet(): void {
        let nextHol = BYALPHABET[holiday];
        setHoliday(nextHol);
    }
    function scrollyear(): void {
        let nextHol = BYTIME[holiday];
        setHoliday(nextHol);
    }

    return (
        <div>
            <span>Holiday: {holiday}</span>
            <Button onClick={scrollAlphabet}>Advance by Alphabet</Button>
            <Button onClick={scrollyear}>Advance by Year</Button>
        </div>
    );
}
