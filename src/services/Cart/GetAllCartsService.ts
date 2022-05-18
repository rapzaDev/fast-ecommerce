import Cart from "../../models/Cart";

class GetAllCarts {
    public async execute() {
        const carts = await Cart.find();
        return carts;
    }
};

export default GetAllCarts;