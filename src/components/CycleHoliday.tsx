import React, { useState } from "react";
import { Button } from "react-bootstrap";

const HOLIDAYS = [
    { name: "New Year's Day", emoji: "1️⃣", alphaKey: 1 },
    { name: "Valentine's Day", emoji: "❤️", alphaKey: 4 },
    { name: "St. Patrick's Day", emoji: "🍀", alphaKey: 2 },
    { name: "Independence Day", emoji: "🇺🇸", alphaKey: 0 },
    { name: "Thanksgiving", emoji: "🦃", alphaKey: 3 },
];

export function CycleHoliday(): React.JSX.Element {
    const [holidayIndex, setHolidayIndex] = useState(0);

    const advanceHolidayAlphabetically = () => {
        const currentAlphaKey = HOLIDAYS[holidayIndex].alphaKey;
        let newKey = currentAlphaKey;

        do {
            newKey = (newKey + 1) % 5;
        } while (HOLIDAYS[newKey].alphaKey != (currentAlphaKey + 1) % 5);

        setHolidayIndex(newKey);
    };

    const advanceHolidaySequentially = () => {
        setHolidayIndex((holidayIndex + 1) % 5);
    };

    return (
        <div>
            Cycle Holiday Holiday: {HOLIDAYS[holidayIndex].emoji}
            <Button onClick={advanceHolidayAlphabetically}>
                Advance by Alphabet
            </Button>
            <Button onClick={advanceHolidaySequentially}>
                Advance by Year
            </Button>
        </div>
    );
}
