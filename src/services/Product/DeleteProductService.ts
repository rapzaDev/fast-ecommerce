import { Request } from 'express';
import Product from "../../models/Product";

class UpdateProduct {
    public async execute( request: Request ) {
        await Product.findByIdAndDelete(request.params.id);
    }
};

export default UpdateProduct;