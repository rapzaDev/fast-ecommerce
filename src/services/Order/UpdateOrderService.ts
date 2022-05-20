import { Request } from 'express';
import Order from "../../models/Order";

class UpdateOrder {
    public async execute( request: Request ) {
        const updatedOrder = await Order.findByIdAndUpdate(
            request.params.id,
            {
                $set: request.body
            },
            {new: true}
        );

        return updatedOrder;
    }
};

export default UpdateOrder;