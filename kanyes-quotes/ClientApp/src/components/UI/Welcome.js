import React from "react";
import "./css/Welcome.css";

function Welcome() {
    return (
        <div className="welcome">
            <h1>Kanye&nbsp;West's Quote&nbsp;Evalutor!</h1>
            <h4 >Enter a number between 5 and 20. </h4>
            <h4>This app will fetch this many random quotes from Kanye West and return the most extreme one! </h4>
        </div>
    );
}

export default Welcome;