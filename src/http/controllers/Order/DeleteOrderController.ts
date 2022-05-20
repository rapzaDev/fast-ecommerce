import {Request, Response} from 'express';
import DeleteOrderService from '../../../services/Order/DeleteOrderService';

export default class DeleteOrderController {
    public async create(request: Request, response: Response): Promise<Response>{
        try {
            const delete_Order_service = new DeleteOrderService();
            await delete_Order_service.execute(request.params.id);

            return response.status(200).json('Order was deleted');
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}