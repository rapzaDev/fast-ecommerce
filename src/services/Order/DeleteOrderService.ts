import Order from "../../models/Order";

class DeleteOrder {
    public async execute( id: any ) {
        await Order.findByIdAndDelete(id);
    }
};

export default DeleteOrder;