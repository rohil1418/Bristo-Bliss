const testimonials = [
    {
        title: "“The best restaurant”",
        text: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
        name: "Sophire Robson",
        location: "Los Angeles, CA",
        image: "/images/customer-1.jpg",
    },
    {
        title: "“Simply delicious”",
        text: "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
        name: "Matt Cannon",
        location: "San Diego, CA",
        image: "/images/customer-2.jpg",
    },
    {
        title: "“One of a kind restaurant”",
        text: "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
        name: "Andy Smith",
        location: "San Francisco, CA",
        image: "/images/customer-3.jpg",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-white px-6 py-16 sm:px-10 lg:px-20">
            <div className="mx-auto max-w-6xl">

                <h2 className="text-center font-serif text-4xl text-black sm:text-5xl">
                    What Our Customers Say
                </h2>

                <div className="mt-14 grid grid-cols-1 gap-25 md:grid-cols-3">

                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.name}
                            className="cursor-pointer rounded-xl bg-[#f8f8f6] p-7 transition-shadow duration-300 hover:shadow-[-5px_-5px_15px_rgba(0,0,0,0.25)]"           >
                            <h3 className="text-lg font-bold text-[#b83243]">
                                {testimonial.title}
                            </h3>

                            <p className="mt-6 text-sm leading-[1.5] text-black">
                                {testimonial.text}
                            </p>

                            <div className="mt-7 flex items-center gap-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="h-12 w-12 rounded-full object-cover"
                                />

                                <div>
                                    <h4 className="text-sm font-bold text-black">
                                        {testimonial.name}
                                    </h4>

                                    <p className="mt-1 text-sm text-black">
                                        {testimonial.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}