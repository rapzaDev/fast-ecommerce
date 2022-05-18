import Cart from "../../models/Cart";

class GetCart {
    public async execute( userId : any ) {
        const cart = await Cart.findOne({ userId: userId });

        return cart;
    }
};

export default GetCart;