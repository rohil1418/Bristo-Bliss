export default function BookTable() {
  return (
    <section className="min-h-screen bg-white px-6 py-10 sm:px-10">

      <div className="text-center">
        <h1 className="font-serif text-5xl text-black sm:text-6xl">
          Book A Table
        </h1>

        <p className="mx-auto mt-3 max-w-md text-xs leading-5 text-black">
          We consider all the drivers of change gives you the components
          you need to change to create a truly happens.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-[800px] rounded-xl bg-white p-8 shadow-[0_12px_30px_rgba(0,0,0,0.12)]">

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

          <div>
            <label className="text-xs font-semibold text-black">
              Date
            </label>

            <input
              type="date"
              className="mt-2 h-10 w-full rounded-full border border-gray-300 px-4 text-xs text-gray-600 outline-none focus:border-[#b83243]"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-black">
              Time
            </label>

            <input
              type="time"
              className="mt-2 h-10 w-full rounded-full border border-gray-300 px-4 text-xs text-gray-600 outline-none focus:border-[#b83243]"
            />
          </div>

        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">

          <div>
            <label className="text-xs font-semibold text-black">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter Your Name"
              className="mt-2 h-10 w-full rounded-full border border-gray-300 px-4 text-xs outline-none focus:border-[#b83243]"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-black">
              Phone
            </label>

            <input
              type="tel"
              placeholder="Enter Your phone"
              className="mt-2 h-10 w-full rounded-full border border-gray-300 px-4 text-xs outline-none focus:border-[#b83243]"
            />
          </div>

        </div>

        <div className="mt-5">
          <label className="text-xs font-semibold text-black">
            Total Person
          </label>

          <input
            type="number"
            min="1"
            placeholder="1"
            className="mt-2 h-10 w-full rounded-full border border-gray-300 px-4 text-xs outline-none focus:border-[#b83243]"
          />
        </div>

        <button
          type="button"
          className="mt-5 h-11 w-full rounded-full bg-[#b83243] text-xs font-semibold text-white transition-colors duration-300 hover:bg-[#922936]"
        >
          Send
        </button>

      </div>

    </section>
  );
}