import {Request, Response} from 'express';
import GetProductService from '../../../services/Product/GetProductService';

export default class GetProductController {
    public async create(request: Request, response: Response): Promise<Response>{
        try {
                const get_product = new GetProductService();
                const product = await get_product.execute(request);

            return response.status(201).json(product);
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}