import { useState } from "react";

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
    {
        title: "“Amazing experience”",
        text: "Everything from the food to the service was outstanding. The atmosphere was warm and welcoming, and every dish was full of flavor.",
        name: "Sarah Johnson",
        location: "New York, NY",
        image: "/images/customer-1.jpg",
    },
    {
        title: "“Absolutely wonderful”",
        text: "We had an amazing dinner with our family. The food was fresh, delicious, and beautifully presented. We will definitely visit again.",
        name: "Michael Brown",
        location: "Chicago, IL",
        image: "/images/customer-2.jpg",
    },
    {
        title: "“Highly recommended”",
        text: "A beautiful place with excellent food and friendly service. Every detail made our evening special. It is definitely worth coming back to.",
        name: "Emma Wilson",
        location: "Boston, MA",
        image: "/images/customer-3.jpg",
    },
];

export default function Testimonials() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        if (currentSlide < testimonials.length - 3) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const previousSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    return (
        <section className="bg-white px-6 py-16 sm:px-10 lg:px-20">
            <div className="mx-auto max-w-6xl">

                <h2 className="text-center font-serif text-4xl text-black sm:text-5xl">
                    What Our Customers Say
                </h2>

                <div className="relative mt-14 overflow-hidden">

                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${currentSlide * (100 / 3)}%)`,
                        }}
                    >
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.name}
                                className="w-full shrink-0 px-3 md:w-1/3"
                            >
                                <div className="h-full cursor-pointer rounded-xl bg-[#f8f8f6] p-7 transition-shadow duration-300 hover:shadow-[-5px_-5px_15px_rgba(0,0,0,0.25)]">

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
                            </div>
                        ))}
                    </div>

                </div>

                <div className="mt-8 flex justify-center gap-5">

                    <button
                        onClick={previousSlide}
                        disabled={currentSlide === 0}
                        className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#b83243] bg-white text-2xl font-bold text-[#b83243] transition hover:bg-[#b83243] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                    >
                        ←
                    </button>

                    <button
                        onClick={nextSlide}
                        disabled={currentSlide === testimonials.length - 3}
                        className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#b83243] bg-white text-2xl font-bold text-[#b83243] transition hover:bg-[#b83243] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                    >
                        →
                    </button>

                </div>

            </div>
        </section>
    );
}
