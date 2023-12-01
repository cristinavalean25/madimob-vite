import "../index.css";
import Footer from "./Footer";
import { FormattedMessage } from "react-intl";
import Navbar from "./Navbar";

interface AboutProps {
  changeLanguage: (newLocale: string) => void;
  locale: string;
}

const About: React.FC<AboutProps> = ({ changeLanguage, locale }) => {
  return (
    <>
      <Navbar changeLanguage={changeLanguage} locale={locale} />
      <div className="container-fluid w-100 h-100 d-flex p-3 pt-5 pb-5 justify-content-center big-container-about">
        <div className="container-about">
          <div className="row h-100 p-3">
            <h1 className="about-title">
              <FormattedMessage id="about.title" />
            </h1>

            <p className="body-text">
              <FormattedMessage id="about.paragraph_1" />
            </p>
            <p className="body-text">
              <FormattedMessage id="about.paragraph_2" />
            </p>
            <p className="body-text">
              <FormattedMessage id="about.paragraph_3" />
            </p>
            <p className="body-text">
              <FormattedMessage id="about.paragraph_4" />
            </p>
            <p className="body-text">
              <FormattedMessage id="about.paragraph_5" />
            </p>
            <p className="body-text">
              <FormattedMessage id="about.paragraph_6" />
            </p>
            <p className="body-text">
              <FormattedMessage id="about.paragraph_7" />
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
