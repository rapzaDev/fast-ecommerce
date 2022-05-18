import {Request, Response} from 'express';
import CreateCartService from '../../../services/Cart/CreateCartService';

export default class CreateCartController {
    public async create(request: Request, response: Response): Promise<Response>{
        try {
            const create_cart_service = new CreateCartService();
            const created_cart = await create_cart_service.execute(request.body);

            return response.status(201).json(created_cart);
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}