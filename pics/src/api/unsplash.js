import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID BYxTToAR4sZMpqXMkxRwIUM9tZu-yi4cJoD8iQY4Xt8'
    }
});