import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
    >
      <img
        src="/images/hero-banner.png"
        alt=""
        className="block w-full h-auto"
      />

      <div className="absolute inset-0 flex items-center justify-center px-5">
        <div className="w-full max-w-2xl text-center">

          <h1 className="font-serif text-5xl leading-[1.05] text-black sm:text-6xl md:text-7xl">
            Best food for
            <br />
            your taste
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-sm leading-6 text-black sm:text-base">
            Discover delectable cuisine and unforgettable moments
            <br className="hidden sm:block" />
            in our welcoming, culinary haven.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/book-table"
              className="rounded-full border border-black px-6 py-3 text-sm font-medium text-black transition hover:bg-black hover:text-white"
            >
              Book A Table
            </a>

            <Link
              to="/menu"
              className="rounded-full border border-black px-7 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
            >
              Explore Menu
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}