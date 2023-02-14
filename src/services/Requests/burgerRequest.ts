import { api2 } from "../api";


const getAll = () => { 
        return api2.get("/products/search?categoryName=Hamb%C3%BArguer&isActive=true")
}


const burgerService = { 
    getAll
}

export default burgerService; 