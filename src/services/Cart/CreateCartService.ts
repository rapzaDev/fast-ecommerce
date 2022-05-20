import Cart from "../../models/Cart";
import { CartType } from '../../types';

class CreateCart {
    public async execute( cartData : CartType) {
        const newCart = new Cart({
            userId: cartData.userId,
            products: cartData.products
        });

        const newCart_saved = await newCart.save();

        return newCart_saved;
    }
};

export default CreateCart;