import { Request } from 'express';
import Product from "../../models/Product";

class GetProduct {
    public async execute( request: Request ) {
        const product = await Product.findById(request.params.id);
        return product;
    }
};

export default GetProduct;