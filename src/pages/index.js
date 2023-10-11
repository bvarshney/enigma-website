import Head from "next/head";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import SmoothScroll from "@/components/utils/SmoothScroll";
import { NextSeo } from "next-seo";

import Header from "@/components/Header/Header";  
import HomeAero from "@/components/Home/HomeAero";
import HeroDesktop from "@/components/Home/HeroDesktop";
import Footer from "@/components/Footer";
import Category from "@/components/Home/Category";
import ConceptScrollNew from "@/components/Home/ConceptScrollNew";
import FooterMobile from "@/components/Mobile/FooterMobile";
import HeroMobile from "@/components/Mobile/HeroMobile";
import HomeVideoSection from "@/components/Mobile/HomeVideoSection";
import ConceptScrollMobile from "@/components/Mobile/ConceptScrollMobile";
import TopHomeAero from "@/components/Home/TopAero";
import Preloader from "@/components/PreLoader/PreLoader";
import HomeProject from "@/components/ProjectsSection/HomeProject";
import ProjectsHome from "@/components/Home/ProjectsHome";
import Modal from "../components/PopupForm/formModal";

export default function Home() {

  return (
    <>
      <NextSeo
        title="Enigma | Digital Product Design, UI/UX & Neuromarketing Agency"
        description="Enigma is India's Leading UI/UX Design Agency that Leverages the Power of Emotion, Design, Technology, and Neuromarketing Strategies to Create Digital Products that People Love to Use."
        canonical="https://www.weareenigma.com/"
        openGraph={{
          url: "https://www.weareenigma.com/",
          title: "Enigma | Digital Product Design, UI/UX & Neuromarketing Agency",
          description:
            "Enigma is India's Leading UI/UX Design Agency that Leverages the Power of Emotion, Design, Technology, and Neuromarketing Strategies to Create Digital Products that People Love to Use.",
          images: [
            {
              url: "https://i.ibb.co/k0NMQw9/home.png",
              width: 400,
              height: 600,
              alt: "Enigma Image",
              type: "image/png",
            },
            { url: "https://i.ibb.co/k0NMQw9/home.png" },
          ],
          siteName: "weareenigma.com/",
        }}
      />

      <Head>
        <title>Enigma | Digital Product Design, UI/UX & Neuromarketing Agency</title>
        <meta
          name="description"
          content="Enigma is India's Leading UI/UX Design Agency that Leverages the Power of Emotion, Design, Technology, and Neuromarketing Strategies to Create Digital Products that People Love to Use."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <link rel="icon" href="/fav-icon.png" />
      </Head>

      <Preloader />

      <SmoothScroll />

      <Cursor isGelly={true} />

      <main>
      
        <section>
          <Header />
        </section>

      {/*===============================Hero Section=========================*/}
          <section className="main-section"
                   data-cursor-size="10"
                   data-cursor-text="">
            <HeroMobile />
            <HeroDesktop />
          </section>

{/* PopUp Modal Button */}
<div>
  <Modal />
</div>
{/* End */}

      {/* ======================== Concept Scroll ====================== */}
      <section>
        <ConceptScrollNew />
      </section>

      <section>
        <ConceptScrollMobile />
      </section>
      {/* ======================== Concept Scroll END ====================== */}

      {/* ======================== Home Video Mobile ====================== */}
      <HomeVideoSection />
      {/* ======================== Home Video Mobile END  ================= */}

      {/* ======================== Home Aero ====================== */}
      <section
        data-cursor-color="#000"
        data-cursor-size="0px"
        className="topHeightAero m-150"
      >
        <TopHomeAero />
      </section>
      {/* ======================== Home Aero END ====================== */}

      {/* ======================== Projects Slide ====================== */}
      <section className="category pb-150">
        <Category />
      </section>
      {/* ======================== Projects Slide END ====================== */}

      {/* ======================== Projects Slide ====================== */}
      <section className="desktop-projects m-150">
        <HomeProject />
      </section>

      <section className="mobile-projects m-150">
        <ProjectsHome />
      </section>

      {/* ======================== Projects Slide END ====================== */}

      {/* ======================== Home Aero ====================== */}
      <section data-cursor-color="#000" data-cursor-size="0px" className="homeAeroBottom">
        <HomeAero />
      </section>
      {/* ======================== Home Aero END ====================== */}

      {/* ======================== Footer ====================== */}
      <section className="desktop-footer mt-150">
        <Footer />
      </section>

      <section className="mobile-footer">
        <FooterMobile />
      </section>
      {/* ======================== Footer END ====================== */}
    
    </main>

    </>
  );
}
