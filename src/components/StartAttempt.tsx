import React, { useState } from "react";
import { Button } from "react-bootstrap";

/*
The StartAttempt component simulates yet another part of the quiz application, 
this time providing a “Start” and “Stop” button for the quiz. Since the quiz should have a 
limited number of attempts, there is also a “Mulligan” button to give more attempts.

#You will need two pieces of state: the number of attempts and whether the quiz is in progress.
###The initial number of attempts is 4
###The quiz is initially NOT in progress

#There is a button labelled Start Quiz that puts the Quiz in progress and decreases the number of attempts by one.
#There is a button labelled Stop Quiz that stops the Quiz from being in progress.
#There is a button labelled Mulligan that increase the attempts by one.
#When the quiz is in progress, the Start Quiz and Mulligan buttons are disabled.
#When the quiz is not in progress, the Stop Quiz button is disabled.
#When the attempts are zero, the Start Quiz button is disabled.
#The number of attempts should be visible in the interface.
*/

export function StartAttempt(): React.JSX.Element {
    const [attemptNum, setAttemptNum] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function turnOnQuiz(): void {
        setInProgress(true);
        setAttemptNum(attemptNum - 1);
    }
    function turnOffQuiz(): void {
        setInProgress(false);
    }
    function mulligan(): void {
        setAttemptNum(attemptNum + 1);
    }
    return (
        <div>
            <Button
                onClick={turnOnQuiz}
                disabled={inProgress || attemptNum === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={turnOffQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>
            <span>{attemptNum}</span>
        </div>
    );
}
