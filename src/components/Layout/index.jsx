import Header from "../Header";
import { Media, MediaContextProvider } from "@/lib/media";
import Footer from "../Footer";
import { ReactLenis } from "lenis/react";
import { Cursor } from "../Cursor";
import { ImageObjectJsonLd, NavigationListJsonLd, OrganizationJsonLd, WebsiteJsonLd } from "@/lib/json-ld";

const Layout = ({ children }) => {
    return (
        <>
            <OrganizationJsonLd />
            <WebsiteJsonLd />
            <NavigationListJsonLd />
            <ImageObjectJsonLd />
            <ReactLenis root option={{ lerp: 0.05 }}>
                <Header />
                <MediaContextProvider>
                    <main style={{cursor: "none"}}>
                        {children}
                    </main>
                    <Media greaterThan="tablet">
                        <Cursor />
                    </Media>
                </MediaContextProvider>
                <Footer />
            </ReactLenis>
        </>
    )
}

export default Layout;