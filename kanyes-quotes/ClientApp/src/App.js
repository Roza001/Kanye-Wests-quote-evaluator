import "./App.css";
import getQuotes from "./components/services/GetQuotes.js";
import getPolarity from "./components/services/GetPolarity.js";

import React, { useState, useEffect, useCallback } from "react";

function App() {
    const [quote, setQuote] = useState({ q: "", p: 0 });
    const [quotes, setQuotes] = useState([]);
    const [input, setInput] = useState();
    const [sentiments, setSentiments] = useState({
        positive: 0,
        neutral: 0,
        negative: 0,
    });
    const [loading, setLoading] = useState(false);
    var positive = 0;
    var neutral = 0;
    var negative = 0;


    useEffect(() => {
        if (quotes.length >= input -1) {
            setLoading(false);
        }
        quotes.forEach((item) => sentimentSwitch(item))
        console.log("obj", quotes)
    }, [quotes])

    function myFunc() {
        var locQuote = "";
        getQuotes().then((response) => {
            locQuote = response.quote;
            getPolarity(response.quote).then((response) => {
                if (quotes.some((e) => e.q === response.quote)) {
                    console.log("repeat");
                    myFunc();
                } else {
                    if (response.result.polarity >= Math.abs(quote.p)) {
                        setQuote({ q: locQuote, p: response.result.polarity });
                    }
                    //sentimentSwitch(response.result);
                    setQuotes((prevState) => [
                        ...prevState,
                        { q: locQuote, p: response.result.polarity },
                    ]);
                }
            });
        });
    }

    function sentimentSwitch(obj) {
        if (obj.p < 0) {
            setSentiments({ positive: sentiments.positive, neutral: sentiments.neutral, negative: sentiments.negative + 1 })
        }
        else if (obj.p == 0) {
            setSentiments({ positive: sentiments.positive, neutral: sentiments.neutral + 1, negative: sentiments.negative })
        }
        else {
            setSentiments({ positive: sentiments.positive + 1, neutral: sentiments.neutral, negative: sentiments.negative })
        }

    }

    //function sentimentSwitch(obj) {
    //    switch (obj.type) {
    //        case "negative":
    //            negative++;
    //            break;
    //        case "neutral":
    //            console.log("neg", neutral);
    //            neutral++;
    //            console.log("neg2", neutral);
    //            break;
    //        case "positive":
    //            positive++;
    //            break;
    //        default:
    //            break;
    //    }
    //}

    function onSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setQuotes([]);
        setQuote({ q: "", p: 0 });
        setSentiments({
            positive: 0,
            neutral: 0,
            negative: 0,
        });
        setInput(e.target[0].value);
        for (var i = 0; i < e.target[0].value; i++) {
            myFunc();
            setSentiments({
                positive: positive,
                neutral: neutral,
                negative: negative,
            });
        }  
    }


    return (
        <div className="App">
            {loading ? (
                <span className="App-logo App-logo-spin">LOADING</span>
            ) : (
                    <div>
                        <h3>Quote: {quote.q}</h3>
                        <h5>Sentiment: {quote.p}</h5>
                        <p>
                            positive: {sentiments.positive}
                            <br />
                            negative: {sentiments.negative}
                            <br />
                            neutral: {sentiments.neutral}
                        </p>
                    </div>
                )}

            <form onSubmit={onSubmit}>
                <input type="number" />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
}

export default App;
