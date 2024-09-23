import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [qType, setQType] = useState<QuestionType>("short_answer_question");

    const changeTypeF = () => {
        if (qType == "short_answer_question")
            setQType("multiple_choice_question");
        else setQType("short_answer_question");
    };

    return (
        <div>
            {" "}
            Change Type
            <Button onClick={changeTypeF}>Change Type</Button>
            {qType == "short_answer_question" ?
                "Short Answer"
            :   "Multiple Choice"}
        </div>
    );
}
