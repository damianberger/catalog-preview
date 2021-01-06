import axios from "axios";

const API_URL = "http://localhost:8080/api/product/";


const findProduct = (id) => {
    console.log(id);
    return axios.get(API_URL + id)
}

export default findProduct;

