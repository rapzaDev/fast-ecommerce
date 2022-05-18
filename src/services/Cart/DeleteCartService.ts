import Cart from "../../models/Cart";

class DeleteCart {
    public async execute( id: any ) {
        await Cart.findByIdAndDelete(id);
    }
};

export default DeleteCart;