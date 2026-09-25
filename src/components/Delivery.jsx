const deliveryFeatures = [
  {
    icon: "◷",
    text: "Delivery within 30 minutes",
  },
  {
    icon: "↯",
    text: "Best Offer & Prices",
  },
  {
    icon: "🛒",
    text: "Online Services Available",
  },
];

export default function Delivery() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row lg:gap-60">

        <div className="flex items-start gap-4">

          <img
            src="/images/chef.jpg"
            alt="Chef preparing food"
            className="h-[450px] w-[325px] rounded-lg object-cover  transition-transform duration-500 ease-in-out hover:scale-105"
          />

          <div className="flex flex-col gap-4 pt-6">
            <img
              src="/images/food-bowl.jpg"
              alt="Food bowl"
              className="h-[250px] w-[217px] rounded-lg object-cover  transition-transform duration-500 ease-in-out hover:scale-105"
            />

            <img
              src="/images/grilled-food.jpg"
              alt="Grilled food"
              className="h-[180px] w-[217px] rounded-lg object-cover  transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
        </div>

        <div className="max-w-lg">

          <h2 className="font-serif text-3xl leading-[1.15] text-black sm:text-4xl">
            Fastest Food
            <br />
            Delivery in City
          </h2>

          <p className="mt-6 max-w-md text-sm leading-5 text-black">
            Our visual designer lets you quickly and of drag <br />
            a down your way to customapps for both keep desktop.
          </p>

          <div className="mt-6 space-y-4">
            {deliveryFeatures.map((feature) => (
              <div
                key={feature.text}
                className="flex items-center gap-3"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#b83243] text-sm text-white">
                  {feature.icon}
                </div>

                <p className="text-sm text-black">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}