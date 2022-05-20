import {Request, Response} from 'express';
import CreateOrderService from '../../../services/Order/CreateOrderService';

export default class CreateOrderController {
    public async create(request: Request, response: Response): Promise<Response>{
        try {
            const create_order_service = new CreateOrderService();

            console.log("request.body: ", request.body);
            const created_order = await create_order_service.execute(request.body);

            console.log("created_order: ", created_order);
            return response.status(201).json(created_order);
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}