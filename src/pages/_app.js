import "../../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/global/Navbar";
import SEO from "../components/global/SEO";
import Footer from "../components/global/Footer";
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps, session }) {
  return (
    <>
      <SessionProvider session={session}>
        <SEO />
        <ThemeProvider attribute="class">
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}
