const services = [
  {
    title: "Caterings",
    image: "/images/catering.jpg",
  },
  {
    title: "Birthdays",
    image: "/images/birthday.jpg",
  },
  {
    title: "Weddings",
    image: "/images/wedding.jpg",
  },
  {
    title: "Events",
    image: "/images/events.jpg",
  },
];

export default function Services() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        <h2 className="mx-auto max-w-2xl text-center font-serif text-4xl leading-tight text-black sm:text-5xl">
          We also offer unique
          <br />
          services for your events
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="cursor-pointer rounded-lg p-4 transition-all duration-300 hover:-translate-y-2 hover:bg-gray-50 hover:shadow-lg"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-[240px] w-full rounded-lg object-cover"
              />

              <h3 className="mt-5 text-xl font-bold text-black">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-5 text-black">
                In the new era of technology we look in the
                future with certainty for life.
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}