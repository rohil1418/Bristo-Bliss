const articles = [
    {
        image: "/images/sushi.jpg",
        date: "January 3, 2023",
        title: "How to prepare a delicious gluten free sushi",
    },
    {
        image: "/images/baking.jpg",
        date: "July 3, 2024",
        title: "Exclusive baking lessons from the pastry king",
    },
    {
        image: "/images/fries.jpg",
        date: "January 3, 2022",
        title: "How to prepare the perfect fries in an air fryer",
    },
    {
        image: "/images/chicken.jpg",
        date: "June 4, 2023",
        title: "How to prepare delicious chicken tenders",
    },
];

export default function BlogPage() {
    return (
        <section className="min-h-screen bg-white px-6 py-10 sm:px-10">

            <div className="text-center">

                <h1 className="font-serif text-5xl text-black sm:text-6xl">
                    Our Blog & Articles
                </h1>

                <p className="mx-auto mt-5 max-w-2xl text-xs leading-5 text-black">
                    We consider all the drivers of change gives you the components
                    you need to change to create a truly happens.
                </p>

            </div>

            <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

                {articles.map((article) => (
                    <article
                        key={article.title}
                        className="overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_18px_rgba(0,0,0,0.18)]"
                    >

                        <img
                            src={article.image}
                            alt={article.title}
                            className="h-[160px] w-full object-cover"
                        />

                        <div className="px-5 py-5">

                            <p className="text-[10px] text-gray-500">
                                {article.date}
                            </p>

                            <h2 className="mt-4 text-base font-medium leading-6 text-black">
                                {article.title}
                            </h2>

                        </div>

                    </article>
                ))}

            </div>

        </section>
    );
}