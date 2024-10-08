import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

function Intro() {

    const [counter, setCounter] = useState(10);

    function incrementCounter() {
        setCounter(counter + 1);
    }

    // add decrementCounterFunction

    return (
        <div>Just another page: current: {counter}
                <Button onClick={incrementCounter}>Increase Value</Button>
                {/* decrease value - add a button with click function   */}
        </div>
    );
}

export default Intro;