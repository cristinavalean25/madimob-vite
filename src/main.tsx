import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { IntlProvider, MessageFormatElement } from "react-intl";
import translationsRo from "../src/translations/ro.json";
import translationsEn from "../src/translations/en.json";
import reportWebVitals from "./reportWebVitals";

type TranslationMessages = Record<
  string,
  string | string[] | MessageFormatElement[]
>;

const messages: { [key: string]: TranslationMessages } = {
  ro: translationsRo,
  en: translationsEn,
};

const Root = () => {
  const [locale, setLocale] = useState("en");

  const intlMessages = messages[locale];

  const changeLanguage = (newLocale: string) => {
    setLocale(newLocale);
  };

  return (
    <BrowserRouter>
      <React.StrictMode>
        <IntlProvider
          key={locale}
          locale={locale}
          messages={
            Array.isArray(intlMessages)
              ? intlMessages.reduce(
                  (acc, val, i) => ({ ...acc, [i.toString()]: val }),
                  {}
                )
              : (intlMessages as Record<string, string>)
          }
          defaultLocale="en"
        >
          <App changeLanguage={changeLanguage} locale={locale} />
        </IntlProvider>
      </React.StrictMode>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Root />);

reportWebVitals();
