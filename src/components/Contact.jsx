export default function Contact() {
  return (
    <section className="min-h-screen bg-white px-6 py-10 sm:px-10">

      <div className="text-center">
        <h1 className="font-serif text-5xl text-black sm:text-6xl">
          Contact Us
        </h1>

        <p className="mx-auto mt-3 max-w-md text-xs leading-5 text-black">
          We consider all the drivers of change gives you the components
          you need to change to create a truly happens.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-[800px] rounded-lg bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

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
              Email
            </label>

            <input
              type="email"
              placeholder="Enter Your Email"
              className="mt-2 h-10 w-full rounded-full border border-gray-300 px-4 text-xs outline-none focus:border-[#b83243]"
            />
          </div>

        </div>

        <div className="mt-5">
          <label className="text-xs font-semibold text-black">
            Subject
          </label>

          <input
            type="text"
            placeholder="Write A Subject"
            className="mt-2 h-10 w-full rounded-full border border-gray-300 px-4 text-xs outline-none focus:border-[#b83243]"
          />
        </div>

        <div className="mt-5">
          <label className="text-xs font-semibold text-black">
            Message
          </label>

          <textarea
            placeholder="Write Your Message"
            rows="5"
            className="mt-2 w-full resize-none rounded-md border border-gray-300 p-4 text-xs outline-none focus:border-[#b83243]"
          ></textarea>
        </div>

        <button
          type="button"
          className="mt-5 h-10 w-full rounded-full bg-[#b83243] text-xs font-semibold text-white transition-colors duration-300 hover:bg-[#922936]"
        >
          Send
        </button>

      </div>

      <div className="mx-auto mt-10 grid max-w-[800px] grid-cols-1 gap-8 sm:grid-cols-3">

        <div>
          <h3 className="text-xs font-semibold text-black">
            Call Us:
          </h3>

          <p className="mt-4 text-xs font-semibold text-[#b83243]">
            +1-234-567-8900
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-black">
            Hours:
          </h3>

          <p className="mt-4 text-[10px] leading-4 text-black">
            Mon-Fri: 11am - 8pm Sat, Sun:
            9am - 10pm
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-black">
            Our Location:
          </h3>

          <p className="mt-4 text-[10px] leading-4 text-black">
            123 Bridge Street
            <br />
            Nowhere Land, LA 12345
            <br />
            United States
          </p>
        </div>

      </div>

    </section>
  );
}