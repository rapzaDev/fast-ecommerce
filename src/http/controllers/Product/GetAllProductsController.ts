import {Request, Response} from 'express';
import GetAllProductsService from '../../../services/Product/GetAllProductsService';

export default class GetAllProductController {
    public async create(request: Request, response: Response): Promise<Response>{
        try {
                const get_all_products = new GetAllProductsService();
                const products = await get_all_products.execute(request);

            return response.status(200).json(products);
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}