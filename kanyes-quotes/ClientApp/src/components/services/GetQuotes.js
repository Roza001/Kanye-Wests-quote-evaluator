import axios from 'axios';

 function getQuotes() {
    return axios
        .get("https://api.kanye.rest")
        .then((response) => {
            return response.data;
        });
}

export default getQuotes;