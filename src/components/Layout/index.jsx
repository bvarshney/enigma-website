import { Cursor } from "../Cursor";
import Header from "../Header";
import { Media } from "@/lib/media";
import Footer from "../Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
            <Media greaterThan="tablet">
                <Cursor />
            </Media>
        </>
    )
}

export default Layout;