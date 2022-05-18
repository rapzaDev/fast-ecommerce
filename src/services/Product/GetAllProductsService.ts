import { Request } from 'express';
import Product from "../../models/Product";

class GetAllProducts {
    public async execute( request: Request ) {
        const qNew = request.query.new;
        const qCategory = request.query.category;

        let products: any;

        if (qNew) {
            // the 5 recently added products
            products = await Product.find().sort({ createdAt: -1}).limit(5);
        } else if (qCategory) {
            products = await Product.find({
                categories: {
                    $in: [qCategory],
                }
            })
        } else {
            products = await Product.find();
        }

        return products;
    }
};

export default GetAllProducts;