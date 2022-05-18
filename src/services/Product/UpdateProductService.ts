import { Request } from 'express';
import Product from "../../models/Product";

class UpdateProduct {
    public async execute( request: Request ) {
        const updatedProduct = await Product.findByIdAndUpdate(
            request.params.id,
            {
                $set: request.body
            },
            {new: true}
        );

        return updatedProduct;
    }
};

export default UpdateProduct;