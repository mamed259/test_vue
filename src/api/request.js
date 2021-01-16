import axios from 'axios';

const API_URL = 'https://registry.npmjs.org/-/v1/search';

// Fetching package versions
export function getPackages(text, from) {

    return axios({
        method: 'get',
        url: API_URL,
        params: {
            from, text,
            size: 10
        },

    });

}
