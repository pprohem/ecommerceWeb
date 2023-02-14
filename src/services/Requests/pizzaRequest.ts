import { api2 } from "../api";


const getAll = () => { 
        return api2.get("/products/search?categoryName=Pizzas&isActive=true")
}


const pizzaService = { 
    getAll
}

export default pizzaService; 