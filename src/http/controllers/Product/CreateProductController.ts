import {Request, Response} from 'express';
import CreateProductService from '../../../services/Product/CreateProductService';

export default class CreateProductController {
    public async create(request: Request, response: Response): Promise<Response>{
        try {
            const create_product_service = new CreateProductService();
            const created_product = await create_product_service.execute(request.body);

            console.log('created product', created_product);

            return response.status(201).json(created_product);
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}