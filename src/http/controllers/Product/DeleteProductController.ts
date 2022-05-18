import {Request, Response} from 'express';
import DeleteProductService from '../../../services/Product/DeleteProductService';

export default class UpdateProductController {
    public async create(request: Request, response: Response): Promise<Response>{
        try {
                const delete_product = new DeleteProductService();
                await delete_product.execute(request);

            return response.status(201).json("Product was deleted");
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}