import axios from "axios";


const token = localStorage.getItem("token");

const api = () => axios.create({
    baseURL: "https://fakestoreapi.com",
    headers: {
        Authorization: token
    }
});


export { api };