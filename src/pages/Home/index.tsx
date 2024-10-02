import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import FavoritePlace from "../../components/Portfolio/Portfolio";
import { OurServices } from "../../components/Services/OurServices";
import ContactContent from "../../content/ContactContent.json";
import { useTranslation } from "react-i18next";


const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
const { t, i18n } = useTranslation();

  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={t("disc1")}
        content={t("disc2")}
        button={IntroContent.button}
        icon="LogoImg.png"
        id="intro"
      />
      <div id="Portfolio">
      <FavoritePlace />
      </div>
      <div id="Services">
      <OurServices />
      </div>
      <Contact
        title={t("ConUs")}
        content={t("ConUsDis")}
        id="contact"
      />
    </Container>
  );
};

export default Home;
