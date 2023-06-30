import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd712a8163ca34dfa969aafe95f431b36'
    }
})