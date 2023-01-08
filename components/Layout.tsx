import { motion } from "framer-motion";
import Nav from "./Nav";
import Footer from "./Footer";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center w-full h-full min-h-screen"
        >
            <Nav />
            <main className="bg-blue-200 w-[50%] flex-grow">
                {children}
            </main>
            <Footer />
        </motion.div>
    );
};

export default Layout;
