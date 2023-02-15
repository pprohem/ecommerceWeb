import { api2 } from "../api";


type DataProps = { 
    email: string;
    username: string;
    password: string
}

const registerUser = (data : DataProps) => { 
    return api2.post('/auth/signup', data)
}


const userService = { 
    registerUser
}


export default userService; 