import Footer from "./Footer";
import Navbar from "./Navbar";
import Template from "./Template";

interface HomeProps {
  changeLanguage: (newLocale: string) => void;
  locale: string;
}

const Home: React.FC<HomeProps> = ({ changeLanguage, locale }) => {
  return (
    <div className="App">
      <></>
      <Navbar changeLanguage={changeLanguage} locale={locale} />
      <Template changeLanguage={changeLanguage} />
      <Footer />
    </div>
  );
};

export default Home;
