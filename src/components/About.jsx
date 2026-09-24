export default function About() {
  return (
    <section
      id="about"
      className="bg-[#f9f9f7] px-5 py-16 sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

        <div className="relative">

          <div className="overflow-hidden rounded-lg">
            <img
              src="/images/about-food.png"
              alt="Delicious food"
              className="h-[450px] w-[450px] object-cover"
            />
          </div>

          <div className="absolute bottom-[-55px] left-1/2 w-[280px] -translate-x-1/2 rounded-lg bg-[#474747] px-8 py-9 text-white sm:left-[38%] sm:w-[280px] sm:translate-x-0">
            
            <h3 className="text-xl font-bold">
              Come Visit With Us
            </h3>

            <div className="mt-8 flex items-start gap-4">
              <span className="mt-1 text-lg">⌕</span>

              <p className="text-sm">
                (414) 857 - 0107
              </p>
            </div>

            <div className="mt-5 flex items-start gap-4">
              <span className="mt-1 text-sm">✉</span>

              <p className="text-sm">
                happytummy@restaurant.com
              </p>
            </div>

            <div className="mt-5 flex items-start gap-4">
              <span className="mt-1 text-sm">⌖</span>

              <p className="text-sm leading-5">
                837 W. Marshall Lane Marshalltown,
                <br />
                IA 50158, Los Angeles
              </p>
            </div>

          </div>
        </div>

        <div className="lg:pl-16">

          <h2 className="max-w-xl font-serif text-4xl leading-[1.15] text-black sm:text-4xl">
            We provide healthy food
            <br />
            for your family.
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-6 text-black">
            Our story began with a vision to create a unique dining
            experience <br /> that merges fine dining, exceptional service, and a
            vibrant ambiance. <br /> Rooted in city's rich culinary culture, we aim
            to honor our local roots <br /> while infusing a global palate.
          </p>

          <p className="mt-5 max-w-xl text-sm leading-6 text-black">
            At place, we believe that dining is not just about food, but
            also about <br /> the overall experience. Our staff, renowned for their
            warmth and <br /> dedication, strives to make every visit an
            unforgettable event.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-block rounded-full border border-black px-7 py-3 text-sm font-semibold text-black"
          >
            More About Us
          </a>

        </div>

      </div>
    </section>
  );
}