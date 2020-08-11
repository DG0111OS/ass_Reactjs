import axios from 'axios';

import * as config from './../config';

export default function fetchApi(endpoint, method = 'GET', data) {
    return axios({
        method: method,
        url: `${config.URL_API}/${endpoint}`,
        data: data,
    }).catch(err => {
        console.log(err);
    })
}
