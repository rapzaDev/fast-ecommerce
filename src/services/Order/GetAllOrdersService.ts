import Order from "../../models/Order";

class GetAllOrders {
    public async execute() {
        const Orders = await Order.find();
        return Orders;
    }
};

export default GetAllOrders;