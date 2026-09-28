import MenuCategory from "../components/MenuCategory";

const breakfastItems = [
    {
        image: "/images/fried-eggs.jpg",
        price: "$ 9.99",
        title: "Fried Eggs",
        description: "Made with eggs, lettuce, salt, oil and other ingredients.",
    },
    {
        image: "/images/pancakes.jpg",
        price: "$ 8.99",
        title: "Pancakes",
        description: "Soft pancakes served with fresh ingredients.",
    },
    {
        image: "/images/french-toast.jpg",
        price: "$ 7.99",
        title: "French Toast",
        description: "Freshly prepared French toast with delicious toppings.",
    },
    {
        image: "/images/omelette.jpg",
        price: "$ 10.99",
        title: "Cheese Omelette",
        description: "Fresh eggs prepared with cheese and vegetables.",
    },
];

export default function Breakfast() {
    return (
        <MenuCategory
            title="Breakfast"
            items={breakfastItems}
        />
    );
}