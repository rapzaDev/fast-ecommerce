import Product from "../../models/Product";
import { ProductType } from '../../types';

class CreateProduct {
    public async execute( productData : ProductType) {
        const newProduct = new Product({
            title: productData.title,
            description: productData.description,
            img: productData.img,
            categories: productData.categories,
            size: productData.size,
            color: productData.color,
            price: productData.price
        });

        const savedProduct = await newProduct.save();
        return savedProduct;
    }
};

export default CreateProduct;