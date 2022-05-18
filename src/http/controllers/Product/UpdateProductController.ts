import {Request, Response} from 'express';
import UpdateProductService from '../../../services/Product/UpdateProductService';

export default class UpdateProductController {
    public async create(request: Request, response: Response): Promise<Response>{
        try {
                const update_product = new UpdateProductService();
                const product = await update_product.execute(request);

            return response.status(201).json(product);
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}