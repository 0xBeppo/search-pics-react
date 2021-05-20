import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID QkEoENPc-yYH8l7eOnkv-bmb5IXkI0rpM5p2Jl7EJrM'
    }
})