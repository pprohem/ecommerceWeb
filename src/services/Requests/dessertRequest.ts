import { api2 } from "../api";


const getAll = () => { 
        return api2.get("/products/search?categoryName=Sobremesas&isActive=true")
}


const dessertService = { 
    getAll
}

export default dessertService; 