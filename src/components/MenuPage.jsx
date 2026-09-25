const menuItems = [
    {
        image: "/images/fried-eggs.jpg",
        price: "$ 9.99",
        title: "Fried Eggs",
        description: "Made with eggs, lettuce, salt, oil and other ingredients.",
    },
    {
        image: "/images/hawaiian-pizza.jpg",
        price: "$ 15.99",
        title: "Hawaiian Pizza",
        description: "Made with eggs, ruti, ada, salt, oil and other ingredients.",
    },
    {
        image: "/images/italian-pizza.jpg",
        price: "$ 7.25",
        title: "Italian Pizza",
        description: "Made with eggs, lettuce, salt, oil and other ingredients. Also mix with Italian.",
    },
    {
        image: "/images/butterscotch-cake.jpg",
        price: "$ 20.99",
        title: "Butterscotch Cake",
        description: "Made with eggs, flour, salt, oil and other ingredients.",
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
    {
        image: "/images/fresh-salad.jpg",
        price: "$ 8.99",
        title: "Fresh Salad",
        description: "Fresh vegetables served with healthy and tasty ingredients.",
    },
    {
        image: "/images/chocolate-cake.jpg",
        price: "$ 12.99",
        title: "Chocolate Cake",
        description: "Soft and delicious chocolate cake with a rich flavor.",
    },
];

export default function MenuPage() {
    return (
        <section className="min-h-screen bg-white px-6 py-10 sm:px-10">

            <div className="text-center">

                <h1 className="font-serif text-5xl text-black sm:text-6xl">
                    Our Menu
                </h1>

                <p className="mx-auto mt-4 max-w-3xl text-xs leading-5 text-black">
                    We consider all the drivers of change gives you the components
                    you need to change to create a truly happens.
                </p>

            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">

                {["All", "Breakfast", "Main Dishes", "Drinks", "Desserts"].map(
                    (category) => (
                        <button
                            key={category}
                            className="rounded-full border border-gray-300 px-7 py-2 text-xs font-semibold text-black transition hover:bg-[#b83243] hover:text-white"
                        >
                            {category}
                        </button>
                    )
                )}

            </div>

            <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

                {menuItems.map((item) => (
                    <div
                        key={item.title}
                        className="overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_18px_rgba(0,0,0,0.18)]"
                    >

                        <img
                            src={item.image}
                            alt={item.title}
                            className="h-[175px] w-full object-cover"
                        />

                        <div className="px-5 py-4 text-center">

                            <p className="text-base font-bold text-[#b83243]">
                                {item.price}
                            </p>

                            <h2 className="mt-4 text-sm font-bold text-black">
                                {item.title}
                            </h2>

                            <p className="mt-4 text-xs leading-5 text-black">
                                {item.description}
                            </p>

                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
}