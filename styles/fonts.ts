import { DM_Sans, Poppins, Plus_Jakarta_Sans  } from "next/font/google";


export const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-dm-sans",
});
export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-poppins",
});
export const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "700", "800"],
    variable: "--font-plus-jakarta-sans",
})