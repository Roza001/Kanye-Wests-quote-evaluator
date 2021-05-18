import './App.css';
import getQuotes from './components/services/GetQuotes.js';
import getPolarity from './components/services/GetPolarity.js';

import React, { useState, useEffect } from 'react';

function App() {
    const [quote, setQuote] = useState('');
    const [polarity, setPolarity] = useState('')

    useEffect(() => {
        myFunc();
    }, []);

    async function myFunc(){
        await getQuotes().then(
            (response) => {
                console.log(response.quote);
                setQuote(response.quote);
                getPolarity(response.quote).then(
                    (response) => {
                        console.log(response.result);
                        setPolarity(response.result.polarity);
                    });
            });

    };


    return (
        <div className="App">
            <h2>
                {quote}
                <br />
                {polarity}
                </h2>
        </div>
    );
}

export default App;
