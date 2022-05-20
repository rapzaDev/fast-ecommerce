import {Request, Response} from 'express';
import UpdateOrderService from '../../../services/Order/UpdateOrderService';

export default class UpdateOrderController {
    public async create(request: Request, response: Response): Promise<Response>{
        try {
            const update_Order_service = new UpdateOrderService();
            const updated_Order = await update_Order_service.execute(request);

            return response.status(200).json(updated_Order);
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}