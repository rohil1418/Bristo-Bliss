const menuItems = [
  {
    title: "Breakfast",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
      >
        <path d="M4 10h16" />
        <path d="M5 10v5a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-5" />
        <path d="M8 7h8a2 2 0 0 1 2 2v1H6V9a2 2 0 0 1 2-2Z" />
        <path d="M10 4v3" />
      </svg>
    ),
  },
  {
    title: "Main Dishes",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
      >
        <path d="M5 10h14" />
        <path d="M6 10c.5 5 2.5 8 6 8s5.5-3 6-8" />
        <path d="M8 10c0-3 2-5 4-5s4 2 4 5" />
      </svg>
    ),
  },
  {
    title: "Drinks",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
      >
        <path d="M7 5h10l-1 14H8L7 5Z" />
        <path d="M7 8h10" />
        <path d="M9 12h6" />
      </svg>
    ),
  },
  {
    title: "Desserts",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
      >
        <path d="M5 16h14" />
        <path d="M7 16c.5-4 2.5-6 5-6s4.5 2 5 6" />
        <path d="M9 10c0-2 1.5-3 3-3s3 1 3 3" />
        <path d="M8 19h8" />
      </svg>
    ),
  },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-white px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 text-center">
          <h2 className="font-serif text-4xl text-black sm:text-5xl">
            Browse Our Menu
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {menuItems.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[264px] flex-col items-center rounded-md border border-gray-200 bg-white px-6 py-7 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e4e4e4] text-black">
                {item.icon}
              </div>

              <h3 className="mt-5 text-lg font-bold text-black">
                {item.title}
              </h3>

              <p className="mt-5 max-w-[205px] text-sm leading-5 text-black">
                In the new era of technology we
                <br />
                look in the future with certainty
                <br />
                and pride for our life.
              </p>

              <a
                href="#menu"
                className="mt-5 text-sm font-medium text-[#ad343e]"
              >
                Explore Menu
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}