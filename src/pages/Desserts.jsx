import MenuCategory from "../components/MenuCategory";

const desserts = [
    {
        image: "/images/butterscotch-cake.jpg",
        price: "$ 20.99",
        title: "Butterscotch Cake",
        description: "Soft and delicious butterscotch cake.",
    },
    {
        image: "/images/chocolate-cake.jpg",
        price: "$ 12.99",
        title: "Chocolate Cake",
        description: "Soft and delicious chocolate cake with rich flavor.",
    },
    {
        image: "/images/ice-cream.jpg",
        price: "$ 6.99",
        title: "Ice Cream",
        description: "Creamy ice cream served with delicious toppings.",
    },
    {
        image: "/images/brownie.jpg",
        price: "$ 8.99",
        title: "Chocolate Brownie",
        description: "Warm chocolate brownie with rich chocolate flavor.",
    },
];

export default function Desserts() {
    return (
        <MenuCategory
            title="Desserts"
            items={desserts}
        />
    );
}