import { Libre_Baskerville, Plus_Jakarta_Sans } from "next/font/google";

const primaryFont = Plus_Jakarta_Sans({
  variable: "--primary-font",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const secondaryFont = Libre_Baskerville({
  variable: "--secondary-font",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export { primaryFont, secondaryFont };
