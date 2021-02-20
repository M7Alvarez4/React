import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID BG9hNmbFlPf31NvI6LdfHP7vGBgfNHnkRzoD_x4Wsp8'
    }
});