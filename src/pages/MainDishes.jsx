import MenuCategory from "../components/MenuCategory";

const mainDishes = [
    {
        image: "/images/hawaiian-pizza.jpg",
        price: "$ 15.99",
        title: "Hawaiian Pizza",
        description: "Delicious pizza prepared with fresh ingredients.",
    },
    {
        image: "/images/italian-pizza.jpg",
        price: "$ 7.25",
        title: "Italian Pizza",
        description: "Classic Italian pizza with fresh ingredients.",
    },
    {
        image: "/images/chicken-burger.jpg",
        price: "$ 10.99",
        title: "Chicken Burger",
        description: "Fresh chicken burger prepared with delicious ingredients.",
    },
    {
        image: "/images/pepperoni-pizza.jpg",
        price: "$ 18.99",
        title: "Pepperoni Pizza",
        description: "Crispy pizza topped with cheese and fresh pepperoni.",
    },
];

export default function MainDishes() {
    return (
        <MenuCategory
            title="Main Dishes"
            items={mainDishes}
        />
    );
}