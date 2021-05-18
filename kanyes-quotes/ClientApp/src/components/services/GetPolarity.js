import axios from 'axios';

function getPolarity(text) {
    return axios
        .post("https://sentim-api.herokuapp.com/api/v1/", {  text }, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
            return response.data;
        });
}

export default getPolarity;