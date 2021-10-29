import axios, { Axios } from 'axios';


const api = axios.create(
    {
        baseURL:'https://tcc-itools.herokuapp.com/',
        headers: {'token': "b'cGVkcm8xMjNiJ2MyVnVhR0V4TWpNPScyMDIxLTEwLTEzIDE1OjE2OjUwLjU3MDA1OA=='"}

    }
)

export default api;