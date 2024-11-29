"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Header = () => {
    const pathname = usePathname();

    return (
        <header className="flex items-center justify-between px-12 w-full">
            {/* Logo Section */}
            <div className="flex items-center gap-2 ml-8">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/gembok sijaga.png"
                        alt="gembok"
                        width={30}
                        height={30}
                    />
                    <h1 className="text-xl font-semibold text-[#3650A2] mt-2">
                        SiJaga
                    </h1>
                </Link>
            </div>

            {/* Navigation Section */}
            <nav className="flex items-center gap-8">
                <Link
                    href="/"
                    className={`text-xl font-medium relative group ${
                        pathname === "/" ? "text-blue-800" : "text-gray-700"
                    } hover:text-blue-800`}
                >
                    Beranda
                    <span
                        className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-800 transition-all duration-300 group-hover:w-full group-hover:left-auto group-hover:right-0"
                    ></span>
                </Link>
                <Link
                    href="/fitur"
                    className={`text-xl font-medium relative group ${
                        pathname === "/fitur" ? "text-blue-800" : "text-gray-700"
                    } hover:text-blue-800`}
                >
                    Fitur
                    <span
                        className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-800 transition-all duration-300 group-hover:w-full group-hover:left-auto group-hover:right-0"
                    ></span>
                </Link>
                <button className="bg-blue-800 text-white px-6 py-2 rounded-lg text-xl font-medium hover:bg-blue-700 transition">
                    Masuk
                </button>
            </nav>
        </header>
    );
};

export default Header;
