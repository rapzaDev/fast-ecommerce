import {Request, Response} from 'express';
import DeleteCartService from '../../../services/Cart/DeleteCartService';

export default class DeleteCartController {
    public async create(request: Request, response: Response): Promise<Response>{
        try {
            const delete_cart_service = new DeleteCartService();
            await delete_cart_service.execute(request.params.id);

            return response.status(200).json('Cart was deleted');
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}