import axios from 'axios';

const rootUrl = "http://localhost:3001/v1/users";
const loginUrl = rootUrl + "/login";

export const userLogin = (frmData) => {
    return new Promise(async (resolve, reject) => {
       try {
        const response = await axios.post(loginUrl, frmData);
        resolve(response.data);
       } catch (error) {
        reject(error);
       }
    })  
}
