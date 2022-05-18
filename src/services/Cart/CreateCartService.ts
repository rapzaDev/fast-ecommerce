import Cart from "../../models/Cart";
import { CartType } from '../../types';

class CreateCart {
    public async execute( cartData : CartType) {
        const newCart = new Cart({
            userId: cartData.userId,
            products: cartData.products
        });

        return newCart;
    }
};

export default CreateCart;