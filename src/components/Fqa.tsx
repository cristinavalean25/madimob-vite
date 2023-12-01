import { useState } from "react";
import "../index.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { FormattedMessage, useIntl } from "react-intl";

interface FqaProps {
  changeLanguage: (newLocale: string) => void;
  locale: string;
}

const Fqa: React.FC<FqaProps> = ({ changeLanguage, locale }) => {
  const intl = useIntl();
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  const handleQuestionClick = (questionKey: string) => {
    setSelectedQuestion(selectedQuestion === questionKey ? null : questionKey);
  };

  return (
    <>
      <Navbar changeLanguage={changeLanguage} locale={locale} />
      <div
        className="container-fluid-fqa"
        style={{
          backgroundColor: "#000",
          color: "#fff",
        }}
      >
        <div className="container-faq">
          <div className="row  faq">
            <h2
              className="faq-title"
              style={{
                textAlign: "center",
                padding: 10,
                fontWeight: 700,
                color: "#f47521",
              }}
            >
              <FormattedMessage id="FQA.title" />
            </h2>

            {Array.from({ length: 10 }, (_, i) => i + 1).map((i) => {
              const questionKey = `question_${i}`;
              const answerKey = `${questionKey}_answer`;

              const isQuestionSelected = selectedQuestion === questionKey;
              const answer = intl.formatMessage({
                id: `FQA.${answerKey}`,
                defaultMessage: "Error ",
              });

              console.log("questionKey:", questionKey);
              console.log("answerKey:", answerKey);

              return (
                <div
                  key={questionKey}
                  style={{ marginBottom: 10, color: "#fff" }}
                >
                  <div
                    style={{
                      cursor: "pointer",
                      fontWeight: isQuestionSelected ? "bold" : "normal",
                      fontSize: 21,
                      marginBottom: "1%",
                    }}
                    onClick={() => handleQuestionClick(questionKey)}
                  >
                    <FormattedMessage id={`FQA.${questionKey}`} />
                  </div>

                  {isQuestionSelected && (
                    <div
                      style={{
                        marginLeft: 20,
                        color: "#ddd",
                        maxHeight: "300px",
                        overflowY: "auto",
                      }}
                    >
                      {Array.isArray(answer) ? (
                        answer.map((paragraph: string, index: number) => (
                          <p key={index}>{paragraph}</p>
                        ))
                      ) : (
                        <p className="question-answer">
                          <FormattedMessage id={`FQA.${answer}`} />
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Fqa;
