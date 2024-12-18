"use client";
import { useState } from "react";
import { jakarta } from "../../../styles/fonts";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie"; // Import js-cookie
import axios from "axios";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState(""); // Ubah state dari username ke email
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const LOGIN_API_URL = `${API_BASE_URL}/user/login`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        LOGIN_API_URL,
        {
          email, // Ganti dari username menjadi email
          password,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { token } = response.data;
      Cookies.set("token", token, { expires: 7 }); // Simpan token dalam cookie selama 7 hari
      console.log("Login success, token saved. Redirecting to Dashboard...");
      router.push("/dashboard");
    } catch (err) {
      // Tangani error dan tampilkan pesan error
      if (axios.isAxiosError(err) && err.response) {
        const errorMessage =
          err.response.data.message || "Login failed. Please check your credentials.";
        setError(errorMessage);
      } else {
        setError("An unknown error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${jakarta.className} min-h-screen flex items-center justify-center`}>
      <div className="container mx-auto px-4 sm:px-8 md:px-20 grid grid-cols-1 md:grid-cols-12 items-center gap-6 md:gap-8">
        {/* Left Section */}
        <div className="md:col-span-8 flex flex-col items-start px-4 md:px-12">
          <Link href="/" className="mb-6 md:mb-8">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#3650A2] text-white font-bold rounded-full">
              <Image
                src="/icon-back.png"
                alt="back"
                width={10}
                height={10}
                className="max-w-full h-auto"
              />
            </div>
          </Link>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-relaxed mb-2">
            Makin Aman <br /> Bersama{" "}
            <span className="text-[#3650A2]">SiJaga</span>
          </h1>
          <div className="ml-32 flex justify-center items-center">
            <Image
              src="/Vector.png"
              alt="Vector Illustration"
              width={200}
              height={200}
              className="max-w-full h-auto"
            />
          </div>
          <div className="mt-4 md:mt-6">
            <Image
              src="/Gambar Locker.png"
              alt="Safe Illustration"
              width={400}
              height={400}
              className="max-w-full h-auto"
            />
          </div>
        </div>

        {/* Right Section (Card) */}
        <div className="md:col-span-4 flex justify-center">
          <div className="bg-[#3650A2] text-white rounded-2xl shadow-lg overflow-hidden p-10 md:p-12 max-w-[850px] w-full">
            <div className="flex flex-col items-left mb-6">
              <Image
                src="/logo sijaga white.png"
                alt="SiJaga Logo"
                width={100}
                height={100}
                className="w-24 h-auto md:w-28"
              />
              <h2 className="text-xl md:text-2xl text-center font-bold mt-6">Masuk</h2>
              <p className="text-sm mt-2 text-blue-100 text-center">
                Barang berharga terlindungi, SiJaga selalu di hati
              </p>
            </div>

            <form className="space-y-5 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-white"
                >
                  Kata Sandi
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Kata Sandi"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center"
                  >
                    <Image
                      src={showPassword ? "/eye.png" : "/eye-off.png"}
                      alt={showPassword ? "Hide password" : "Show password"}
                      width={24}
                      height={24}
                    />
                  </button>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#FFE492] text-[#3650A2] font-semibold py-2 rounded-xl shadow-md hover:bg-yellow-400 transition flex items-center justify-center"
                >
                  Masuk
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
