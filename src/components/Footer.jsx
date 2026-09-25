import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#474747] px-6 pt-12 text-white sm:px-10 lg:px-20">

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

        <div>
          <div className="flex items-center gap-3">
            <img
              src="/images/bistro-logo.png"
              alt="Bistro Bliss"
              className="bg-[#474747] h-12 w-12 object-contain"
            />

            <h2 className="font-serif text-2xl font-bold italic">
              Bistro Bliss
            </h2>
          </div>

          <p className="mt-6 max-w-[250px] text-sm leading-5 text-gray-100">
            In the new era of technology we look a
            in the future with certainty and pride to
            our company and.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b83243] text-sm transition-colors duration-300 hover:bg-[#8f2534]"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b83243] text-sm transition-colors duration-300 hover:bg-[#8f2534]"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b83243] text-sm transition-colors duration-300 hover:bg-[#8f2534]"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b83243] text-sm transition-colors duration-300 hover:bg-[#8f2534]"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold">
            Pages
          </h3>

          <ul className="mt-7 space-y-5 text-sm text-gray-100">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/delivery">Delivery</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold">
            Utility Pages
          </h3>

          <ul className="mt-7 space-y-5 text-sm text-gray-100">
            <li>Start Here</li>
            <li>Styleguide</li>
            <li>Password Protected</li>
            <li>404 Not Found</li>
            <li>Licenses</li>
            <li>Changelog</li>
            <li>View More</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold">
            Follow Us On Instagram
          </h3>

          <div className="mt-7 grid grid-cols-2 gap-3">

            <img
              src="/images/instagram-1.jpg"
              alt="Instagram food"
              className="h-[135px] w-full rounded-2xl hover:scale-105 duration-300 object-cover"
            />

            <img
              src="/images/instagram-2.jpg"
              alt="Instagram food"
              className="h-[135px] w-full rounded-2xl hover:scale-105 duration-300 object-cover"
            />

            <img
              src="/images/instagram-3.jpg"
              alt="Instagram food"
              className="h-[135px] w-full rounded-2xl hover:scale-105 duration-300 object-cover"
            />

            <img
              src="/images/instagram-4.jpg"
              alt="Instagram food"
              className="h-[135px] w-full rounded-2xl hover:scale-105 duration-300 object-cover"
            />

          </div>
        </div>
      </div>

      <div className="mt-20 border-t border-gray-500/30 py-5 text-center">
        <p className="text-xs text-gray-300">
          Copyright © 2023 Hashtag Developer. All Rights Reserved
        </p>
      </div>

    </footer>
  );
}