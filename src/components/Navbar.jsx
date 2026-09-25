import { Link } from "react-router-dom";
import { useState } from "react";

const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Menu", href: "/#menu" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full bg-[#f9f9f7]">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-12">
                <a href="#home" className="flex items-center gap-2">
                    <img
                        src="/images/bistro-logo.png"
                        alt="Bistro Bliss Logo"
                        className="h-15 w-15 object-contain"
                    />

                    <span className="italic text-xl font-bold text-[#5C4033] sm:text-2xl">
                        Bistro <span className="italic text-[#ad343e]">Bliss</span>
                    </span>
                </a>

                <ul className="hidden items-center gap-8 lg:flex">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="rounded-full px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-[#e9e9e4] hover:text-[#ad343e]"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <Link
                    to="/book-table"
                    className="rounded-full border-2 border-[#b83243] bg-white px-5 py-2.5 text-sm font-semibold text-[#b83243] transition-all duration-300 hover:bg-[#b83243] hover:text-white"
                >
                    Book A Table
                </Link>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex flex-col gap-1.5 p-2 lg:hidden"
                    aria-label="Toggle navigation"
                >
                    <span
                        className={`h-0.5 w-6 bg-[#2c2c2c] transition ${menuOpen ? "translate-y-2 rotate-45" : ""
                            }`}
                    />

                    <span
                        className={`h-0.5 w-6 bg-[#2c2c2c] transition ${menuOpen ? "opacity-0" : ""
                            }`}
                    />

                    <span
                        className={`h-0.5 w-6 bg-[#2c2c2c] transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""
                            }`}
                    />
                </button>
            </div>

            {menuOpen && (
                <div className="border-t border-gray-200 bg-[#f9f9f7] lg:hidden">
                    <ul className="flex flex-col px-5 py-4 sm:px-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="block py-3 text-sm font-medium text-gray-700 transition hover:text-[#ad343e]"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}

                        <li className="pt-3">
                            <Link
                                to="/book-table"
                                onClick={() => setMenuOpen(false)}
                                className="block rounded-full border-2 border-[#b83243] bg-white px-5 py-2.5 text-center text-sm font-semibold text-[#b83243] transition-all duration-300 hover:bg-[#b83243] hover:text-white"
                            >
                                Book A Table
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}