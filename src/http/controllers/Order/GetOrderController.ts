import {Request, Response} from 'express';
import GetOrderService from '../../../services/Order/GetOrderService';

export default class GetOrderController {
    public async create(request: Request, response: Response): Promise<Response>{
        try {
            const get_Order_service = new GetOrderService();
            const Order = await get_Order_service.execute(request.params.id);

            return response.status(200).json(Order);
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}