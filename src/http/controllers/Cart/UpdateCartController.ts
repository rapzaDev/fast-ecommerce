import {Request, Response} from 'express';
import UpdateCartService from '../../../services/Cart/UpdateCartService';

export default class UpdateCartController {
    public async create(request: Request, response: Response): Promise<Response>{
        try {
            const update_cart_service = new UpdateCartService();
            const updated_cart = await update_cart_service.execute(request);

            return response.status(200).json(updated_cart);
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}