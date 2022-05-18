import {Request, Response} from 'express';
import GetAllCartsService from '../../../services/Cart/GetAllCartsService';

export default class GetCartController {
    public async create(request: Request, response: Response): Promise<Response>{
        try {
            const get_all_carts = new GetAllCartsService();
            const carts = await get_all_carts.execute();

            return response.status(200).json(carts);
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}