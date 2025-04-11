import axios from "axios";

const API_URL = "http://localhost:5000/"

export async function stepLinReg(weights, bias, x, y){
    return await axios.get(API_URL + "api/supervised_learning/lin_reg/step", {
        params:{
            weights: weights,
            bias: bias,
            x: x,
            y: y
        },
        paramsSerializer: {
            indexes: null // removes array indexes from query string
        }
    })
    .then((response) => {
        console.log("Response:", response.data);
        return response.data;
    })
    .catch((error) => {
        console.error("Error:", error);
        return error;
    });
}
