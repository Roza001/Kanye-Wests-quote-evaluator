import "./App.css";
import getQuotes from "./components/services/GetQuotes.js";
import getPolarity from "./components/services/GetPolarity.js";
import Welcome from "./components/UI/Welcome.js";
import Footer from "./components/UI/Footer.js";
import Main from "./components/UI/Main.js";
import React, { useState, useEffect } from "react";

function App() {
    const [quote, setQuote] = useState({});
    const [quotes, setQuotes] = useState([]);
    const [input, setInput] = useState();
    const [welcome, setWelcome] = useState(true);
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
        if (quotes.length >= input - 1) {
            setLoading(false);
        }
        quotes.forEach((item) => sentimentSwitch(item))
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
        else if (obj.p === 0) {
            setSentiments({ positive: sentiments.positive, neutral: sentiments.neutral + 1, negative: sentiments.negative })
        }
        else {
            setSentiments({ positive: sentiments.positive + 1, neutral: sentiments.neutral, negative: sentiments.negative })
        }

    }

    function onSubmit(e) {
        e.preventDefault();
        if (e.target[0].value) {
            if (welcome) {
                setWelcome(false);
            }
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
    }


    return (
        <div className="App">
            {welcome ? (
                <Welcome />
            ) : loading ? (
                <span className="" > LOADING</span>
                ) : (
                        <Main quote={quote} sentiments={sentiments} />
                    )
            }
            <form className="form" onSubmit={onSubmit}>
                <input type="number" min="5" max="20" />
                <input className="button-submit" type="submit" value="submit" />
            </form>
            <Footer />
        </div >
    );
}

export default App;
