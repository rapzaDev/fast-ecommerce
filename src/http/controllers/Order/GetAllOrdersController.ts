import {Request, Response} from 'express';
import GetAllOrdersService from '../../../services/Order/GetAllOrdersService';

export default class GetOrderController {
    public async create(request: Request, response: Response): Promise<Response>{
        try {
            const get_all_Orders = new GetAllOrdersService();
            const Orders = await get_all_Orders.execute();

            return response.status(200).json(Orders);
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}