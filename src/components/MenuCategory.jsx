import { Link } from "react-router-dom";
import MenuCard from "./MenuCard";

export default function MenuCategory({ title, items }) {
    return (
        <section className="min-h-screen bg-white px-6 py-16">

            <div className="mx-auto max-w-6xl">

                <Link
                    to="/menu"
                    className="mb-8 inline-flex items-center rounded-full border border-gray-300 px-6 py-2 text-sm font-semibold text-black transition hover:bg-[#b83243] hover:text-white"
                >
                    ← Back to Menu
                </Link>

                <div className="text-center">

                    <h1 className="font-serif text-5xl text-black">
                        {title}
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-600">
                        Explore our delicious selection of freshly prepared
                        dishes made with quality ingredients.
                    </p>

                </div>

                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

                    {items.map((item) => (
                        <MenuCard
                            key={item.title}
                            item={item}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}