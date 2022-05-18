import { Request } from 'express';
import Cart from "../../models/Cart";


class UpdateCart {
    public async execute( request: Request ) {
        const updatedCart = await Cart.findByIdAndUpdate(
            request.params.id,
            {
                $set: request.body
            },
            {new: true}
        );

        return updatedCart;
    }
};

export default UpdateCart;