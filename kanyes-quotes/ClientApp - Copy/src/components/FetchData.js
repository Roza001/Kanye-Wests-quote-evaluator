import React, { useState, useEffect } from 'react';

export default function FetchData () {
    const [quote, setQuote] = useState('');

    useEffect(() => {
        fetch('https://api.kanye.rest')
            .then(response => response.json())
            .then(data => {
                setQuote(data.quote);
            });
    }, []);

    return (
        <div>{quote}</div>
    );
};


//export class FetchData extends Component {
//    displayName = FetchData.name

//    constructor(props) {
//        super(props);
//        this.state = { forecasts: [], loading: true };

//        fetch('https://api.kanye.rest')
//            .then(response => response.json())
//            .then(data=> {
//                this.setState({ forecasts: data.quote, loading: false });
//            });
//    }

//    function renderForecastsTable(forecasts) {
//        return (
//            { forecasts}
//        );
//    }

//    render() {
//        let contents = this.state.loading
//            ? <p><em>Loading...</em></p>
//            : FetchData.renderForecastsTable(this.state.forecasts);

//        return (
//            <div>
//                <h1>Weather forecasts</h1>
//                <p>This component demonstrates fetching data from the server.</p>
//                {contents}
//            </div>
//        );
//    }
//}
