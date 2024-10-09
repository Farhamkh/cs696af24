import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function Intro() {

    const [counter, setCounter] = useState(10);

    function incrementCounter() {
        setCounter(counter + 1);
    }

    useEffect(() => {
        fetch('http://localhost:9000')
        .then(response => response.text())
        .then(response => console.log(response))
        .catch(error => console.error(error));
    }, []);

    // add decrementCounterFunction

    return (
        <div>Just another page: current: {counter}
                <Button onClick={incrementCounter}>Increase Value</Button>
                {/* decrease value - add a button with click function   */}
        </div>
    );
}

export default Intro;