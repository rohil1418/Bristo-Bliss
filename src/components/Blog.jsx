import { Link } from "react-router-dom";

const articles = [
    {
        title: "How to prepare the perfect french fries in an air fryer",
        date: "January 3, 2023",
        image: "/images/fries.jpg",
    },
    {
        title: "How to prepare delicious chicken tenders",
        date: "January 3, 2023",
        image: "/images/chicken.jpg",
    },
    {
        title: "7 delicious cheesecake recipes you can prepare",
        date: "January 3, 2023",
        image: "/images/cheesecake.jpg",
    },
    {
        title: "5 great pizza restaurants you should visit this city",
        date: "January 3, 2023",
        image: "/images/pizza.jpg",
    },
];

export default function Blog() {
    return (
        <section className="bg-white px-6 py-16 sm:px-10 lg:px-12">
            <div className="mx-auto max-w-7xl">

                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="font-serif text-4xl text-black sm:text-5xl">
                        Our Blog & Articles
                    </h2>

                    <Link
                        to="/blog"
                        className="rounded-full bg-[#b83243] px-5 py-3 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#922936]"
                    >
                        Read All Articles
                    </Link>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-7 lg:grid-cols-2">

                    <article className="overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_18px_rgba(0,0,0,0.15)]">
                        <img
                            src="/images/burger.jpg"
                            alt="Burger"
                            className="h-[500px] w-full rounded-xl object-cover hover:scale-105 duration-300 sm:h-[500px]"
                        />

                        <div className="p-5">
                            <p className="text-[10px] text-gray-500">
                                January 3, 2023
                            </p>

                            <h3 className="mt-3 font-DM_sans text-x1 font-medium text-black">
                                The secret tips & tricks to prepare a perfect burger & pizza
                                for our customers
                            </h3>

                            <p className="mt-3 text-xs leading-5 text-gray-800">
                                Lorem ipsum dolor sit amet consectetur of a adipiscing elit,
                                sem per adipiscing massa gravida nisi cras enim quis nibh
                                varius amet gravida ut facilisis neque egestas.
                            </p>
                        </div>
                    </article>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {articles.map((article) => (
                            <article
                                key={article.title}
                                className="min-h-[280px] overflow-hidden rounded-t-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_18px_rgba(0,0,0,0.15)]"
                            >
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-[306px] rounded-xl hover:scale-105 duration-300 object-cover"
                                />

                                <div className="p-4">
                                    <p className="text-[9px] text-gray-500">
                                        {article.date}
                                    </p>

                                    <h3 className="mt-3 font-DM_sans font-medium text-x1 leading-4 text-black">
                                        {article.title}
                                    </h3>
                                </div>
                            </article>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}