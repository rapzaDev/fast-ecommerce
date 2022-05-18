export interface IUser {
    username: string;
    email: string;
    password: string;
}

export type ProductType = {
    title: string;
    description: string,
    img: string;
    categories: Array<string>;
    size: string;
    color: string;
    price: number;
};

type CartProducts = {
    productId: string;
    quantity: number;
}

export type CartType = {
    userId: string;
    products: Array<CartProducts>;
};