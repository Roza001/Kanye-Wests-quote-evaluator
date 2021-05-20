import React from "react";
import "./css/Main.css"

function Main(props) {

    return (
        <div className="main">
            {props.quote.q ? (
                <>
                    <h5>The most extreme quote:</h5>
                    <h3>{props.quote.q}</h3>
                    <p>
                        In all fetched quotes
                <br />
                        <strong>{props.sentiments.positive}</strong> were rated as <strong>positive</strong>
                        <br />
                        <strong>{props.sentiments.negative}</strong> as <strong>negative</strong> and
                <br />
                        <strong>{props.sentiments.neutral}</strong> were rated as <strong>neutral</strong >
                    </p>
                </>
            ) : (
                    <h2>Try Again!</h2>
                    )}

        </div>

    );
}

export default Main;
