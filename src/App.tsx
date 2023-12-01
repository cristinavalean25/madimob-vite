import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Fqa from "./components/Fqa";
import store from "./Redux/store";
import { Provider } from "react-redux";
import About from "./components/About";
import Template from "./components/Template";

interface AppProps {
  changeLanguage: (newLocale: string) => void;
  locale: string;
}

const App: React.FC<AppProps> = ({ changeLanguage, locale }) => {
  return (
    <Provider store={store}>
      <Routes>
        <Route
          path="/"
          element={<Home changeLanguage={changeLanguage} locale={locale} />}
        />
        <Route
          path="/Template"
          element={<Template changeLanguage={changeLanguage} />}
        />
        <Route
          path="/Contact"
          element={<Contact changeLanguage={changeLanguage} locale={locale} />}
        />
        <Route
          path="/About"
          element={<About changeLanguage={changeLanguage} locale={locale} />}
        />
        <Route
          path="/Fqa"
          element={<Fqa changeLanguage={changeLanguage} locale={locale} />}
        />
      </Routes>
    </Provider>
  );
};

export default App;
