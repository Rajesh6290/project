import { ThemeProvider } from "@/context/ThemeProvide";
import "@/styles/globals.css";
import "@/styles/nprogress.css";
import type { AppProps } from "next/app";
import { Router } from "next/router";
import nProgress from "nprogress";
import { useEffect } from "react";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      document.body.classList.add(
        storedTheme === "light" ? "light-mode" : "dark-mode"
      );
    }
  }, []);
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
