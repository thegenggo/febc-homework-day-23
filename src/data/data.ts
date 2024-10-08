export type Product = {
    id: number,
    name: string,
    description: string,
    price: number,
    category: string,
    imageUrl?: string,
}

export const products: Product[] = [
    {
        id: 1,
        name: "Wireless Headphones",
        description: "Sleek, modern wireless headphones with high-quality sound and noise cancellation. Perfect for on-the-go music lovers.",
        price: 99.99,
        category: "Electronics",
        imageUrl: "/wireless-headphones.jpg"
    },
    {
        id: 2,
        name: "Casual White T-Shirt",
        description: "A simple, comfortable white t-shirt made from soft cotton, perfect for everyday wear.",
        price: 19.99,
        category: "Clothing",
        imageUrl: "/casual-white-t-shirt.jpg"
    },
    {
        id: 3,
        name: "Black Leather Wallet",
        description: "A sleek, minimalistic black leather wallet with multiple card slots and a slim profile for easy carry.",
        price: 49.99,
        category: "Accessories",
        imageUrl: "/black-leather-wallet.jpg"
    }
]

export const getProduct = (id: number) => {
    return products.find(product => product.id === id);
}