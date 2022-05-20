import Order from "../../models/Order";
import { OrderType } from '../../types';

class CreateOrder {
    public async execute( {
        userId, 
        products, 
        address, 
        amount, 
        status
    } : OrderType
    ) {
        const newOrder = await new Order<OrderType>({
            userId: userId,
            products: products,
            address: address,
            amount: amount,
            status: status
        }).save();

        return newOrder;
    }
};

export default CreateOrder;