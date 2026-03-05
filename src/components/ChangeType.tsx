import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question",
    );
    function swaptype(): void {
        setQuestionType(
            questionType === "multiple_choice_question" ?
                "short_answer_question"
            :   "multiple_choice_question",
        );
    }
    return (
        <div>
            <Button onClick={swaptype}>Change Type</Button>
            {questionType === "multiple_choice_question" ?
                <span>Multiple Choice</span>
            :   <span>Short Answer</span>}
        </div>
    );
}
