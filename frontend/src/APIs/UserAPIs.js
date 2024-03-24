import axios from 'axios';

const UserAPIs = axios.create({
    baseURL: "http://localhost:5000"
})

export async function userSignUp(signupData) {
    try {
        console.log(signupData);
        const data = await UserAPIs.post("/signup", signupData);
        return data
    } catch (error) {
        console.log(error.message);
    }
}