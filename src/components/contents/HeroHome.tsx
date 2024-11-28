import { jakarta } from "../../../styles/fonts";
import Image from "next/image";
import ShiningButton from "../ui/button";

const Home = () => {
  return (
    <div className={`${jakarta.className} min-h-screen flex items-center justify-center bg-[url('/Element.png')] bg-cover bg-center`}>
      <div className="container mx-auto px-4 sm:px-8 md:px-20 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-snug">
            Dokumen Makin Terjaga Bersama SiJaga
          </h1>
          <div className="flex justify-center md:justify-start md:ml-16 lg:ml-28">
            <Image
              src="/vector.png"
              alt="vector"
              width={372.5}
              height={30}
              className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[372.5px] ml-24"
            />
          </div>
          <p className="mt-2 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed text-justify min-w-[900px] ">
            SiJaga adalah kotak canggih dan dilengkapi teknologi yang dirancang untuk
            meningkatkan langkah-langkah keamanan untuk melindungi barang, dokumen,
            atau harta benda berharga. Perangkat inovatif ini mengintegrasikan teknologi
            trendi untuk menyediakan fitur keamanan yang komprehensif, memastikan bahwa
            isinya tetap terlindungi dari akses yang tidak sah, pencurian, dan perusakan.
          </p>
          <div className="mt-6 md:mt-8">
            <ShiningButton />
          </div>
        </div>

        <div className="flex justify-center md:justify-end md:pr-6 lg:pr-24 ">
          <Image
            src="/Group 342.png"
            alt="Icon"
            width={276.82}
            height={321.86}
            className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[276.82px] h-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
