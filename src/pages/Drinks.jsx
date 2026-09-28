import MenuCategory from "../components/MenuCategory";

const drinks = [
    {
        image: "/images/coke.jpg",
        price: "$ 3.99",
        title: "Coca Cola",
        description: "Refreshing cold drink served chilled.",
    },
    {
        image: "/images/orange-juice.jpg",
        price: "$ 5.99",
        title: "Orange Juice",
        description: "Fresh orange juice prepared with natural oranges.",
    },
    {
        image: "/images/milkshake.jpg",
        price: "$ 6.99",
        title: "Milkshake",
        description: "Creamy and delicious chocolate milkshake.",
    },
    {
        image: "/images/lemonade.jpg",
        price: "$ 4.99",
        title: "Fresh Lemonade",
        description: "Refreshing lemonade prepared with fresh lemons.",
    },
];

export default function Drinks() {
    return (
        <MenuCategory
            title="Drinks"
            items={drinks}
        />
    );
}