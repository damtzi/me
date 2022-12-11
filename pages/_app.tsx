import "../styles/index.css";
import type { AppProps } from "next/app";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "@next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
    weight: ["400", "600", "700"],
    variable: "--font-ibmPlexSans",
    display: "swap",
    subsets: ["latin"]
});

const ibmPlexMono = IBM_Plex_Mono({
    weight: ["400", "600", "700"],
    variable: "--font-ibmPlexMono",
    display: "swap",
    subsets: ["latin"]
});

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <main
            className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} font-sans`}
        >
            <Component {...pageProps} />
        </main>
    );
};

export default App;
