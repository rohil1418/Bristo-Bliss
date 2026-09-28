export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f9f7] px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-[120px] md:text-[160px] font-bold leading-none text-[#AD343E]">
          404
        </h1>

        <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
          Page Not Found
        </h2>

        <p className="mt-5 text-lg leading-8 text-gray-600">
          Sorry, the page you are looking for doesn't exist or has been
          moved.
        </p>

        <a
          href="/"
          className="inline-block mt-8 rounded-full bg-[#AD343E] px-8 py-3 text-white font-semibold transition hover:bg-[#8f2932]"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}