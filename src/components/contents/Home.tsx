import { jakarta } from "../../../styles/fonts";
import Image from "next/image";
import ShiningButton from "../ui/button";

const Home = () => {
  return (
    <div className={`${jakarta.className} min-h-screen flex items-center justify-center`}>
      <div className="container mx-auto p-8 sm:p-20 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
  
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-snug">
            Dokumen Makin Terjaga Bersama SiJaga
          </h1>
          <div className="flex justify-center ml-52">
            <Image
              src="/vector.png"
              alt="vector"
              width={372.5}
              height={30}
              />
          </div>
          <p className="mt-2 text-gray-600 text-lg leading-relaxed min-w-[700px] text-justify">
            SiJaga adalah kotak canggih dan dilengkapi teknologi yang dirancang untuk
            meningkatkan langkah-langkah keamanan untuk melindungi barang, dokumen,
            atau harta benda berharga. Perangkat inovatif ini mengintegrasikan teknologi
            trendi untuk menyediakan fitur keamanan yang komprehensif, memastikan bahwa
            isinya tetap terlindungi dari akses yang tidak sah, pencurian, dan perusakan.
          </p>
          <div className="mt-8">
            <ShiningButton/>
          </div>
        </div>

        <div className="flex justify-end pr-6 md:pr-12">
          <Image
            src="/Group 342.png"
            alt="Icon"
            width={276.82}
            height={321.86}
            className="w-[276.82px] h-[321.86px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
