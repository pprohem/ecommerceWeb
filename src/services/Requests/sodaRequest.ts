import api2 from "../api";


const getAll = () => { 
        return api2.get("/products/search?categoryName=Bebidas&isActive=true")
}


const sodaService = { 
    getAll
}

export default sodaService; 