import {Request, Response} from 'express';
import GetCartService from '../../../services/Cart/GetCartService';

export default class GetCartController {
    public async create(request: Request, response: Response): Promise<Response>{
        try {
            const get_cart_service = new GetCartService();
            const cart = await get_cart_service.execute(request.params.id);

            return response.status(200).json(cart);
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}