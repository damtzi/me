import { motion } from "framer-motion";
import Nav from "./Nav";
import Footer from "./Footer";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Nav />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="min-h-screen"
            >
                <main>{children}</main>
            </motion.div>
            <Footer />
        </>
    );
};

export default Layout;
