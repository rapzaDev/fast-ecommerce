import Order from "../../models/Order";

class GetOrder {
    public async execute( userId : any ) {
        const order = await Order.findOne({ userId: userId });
        return order;
    }
};

export default GetOrder;