"use client";

import Link from "next/link";
import Image from "next/image";

export const Header = () => {
    return (
        <header className="flex items-center justify-between px-12 w-full ">
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
                <Link href="/" className="text-xl font-medium text-gray-700">
                    Beranda
                </Link>
                <Link href="/fitur" className="text-xl font-medium text-gray-700">
                    Fitur
                </Link>
                <button className="bg-blue-800 text-white px-6 py-2 rounded-lg text-xl font-medium hover:bg-blue-700 transition">
                    Masuk
                </button>
            </nav>
        </header>
    );
};

export default Header;
