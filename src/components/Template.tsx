import "../index.css";
import Img1 from "../Images/house1.jpg";
import Img2 from "../Images/house2.jpg";
import Img3 from "../Images/house4.jpg";
import multivers from "../Images/full-multivers.png";
import evfiam from "../Images/Logo_default.png";
import XMoney from "../Images/xMoney.svg";
import gesp from "../Images/gesp.png";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import usaFlag from "../Images/usa.png";
import roFlag from "../Images/ro.png";
import { FormattedMessage } from "react-intl";

interface TemplateProps {
  changeLanguage: (newLocale: string) => void;
}

const Template: React.FC<TemplateProps> = ({ changeLanguage }) => {
  const images = [
    {
      id: 1,
      imgSrc: Img1,
      text: <FormattedMessage id="template.slide_1" />,
    },
    {
      id: 2,
      imgSrc: Img2,
      text: <FormattedMessage id="template.slide_2" />,
    },
    {
      id: 3,
      imgSrc: Img3,
      text: <FormattedMessage id="template.slide_3" />,
    },
  ];

  return (
    <>
      <div className="language-buttons">
        <button onClick={() => changeLanguage("en")}>
          <img src={usaFlag} alt="USA Flag" className="flag" />
        </button>
        <button onClick={() => changeLanguage("ro")}>
          <img src={roFlag} alt="Romanian Flag" className="flag" />
        </button>
      </div>
      <Carousel
        interval={5000}
        style={{ height: "90vh" }}
        controls={false}
        indicators={false}
        fade
      >
        {images.map((image) => (
          <Carousel.Item key={image.id} style={{ height: "90vh" }}>
            <img
              className="d-block w-100 h-100 custom-img"
              src={image.imgSrc}
              alt={`Slide ${image.id}`}
            />
            <div className="carousel-caption carousel-caption-2">
              <h3>{image.text}</h3>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="container-bottom ">
        <div className="row">
          <div className="col-md-4 mb-4 text-center mb-md-0">
            <div className="template-container">
              <Link
                to="/Contact"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <h3>
                  <FormattedMessage id="template.link_1" />
                </h3>
                <p className="link-text">
                  <FormattedMessage id="template.shortDescription" />
                </p>
              </Link>
            </div>
          </div>

          <div className="col-md-4 mb-4 text-center mb-md-0">
            <div className="template-container">
              <h3>
                {" "}
                <FormattedMessage id="template.link_2" />
              </h3>
              <div className="container-logo">
                <div className="row logo-img">
                  <img
                    src={evfiam}
                    alt="evfiam"
                    style={{
                      marginBottom: 20,
                      marginTop: 20,
                      maxWidth: "50%",
                      height: "auto",
                    }}
                  />
                  <img
                    src={multivers}
                    alt="multivers"
                    style={{ maxWidth: "50%", height: "auto" }}
                  />
                </div>
                <div className="row logo-img">
                  <img
                    src={gesp}
                    alt="gesp"
                    style={{
                      marginBottom: 10,
                      marginTop: 20,
                      maxWidth: "50%",
                      height: "auto",
                    }}
                  />
                  <img
                    src={XMoney}
                    alt="XMoney"
                    style={{ maxWidth: "50%", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4 text-center mb-md-0">
            <div className="template-container">
              <Link to="/Fqa" style={{ textDecoration: "none", color: "#fff" }}>
                <h3>
                  {" "}
                  <FormattedMessage id="template.link_3" />
                </h3>
                <p className="link-text">
                  <FormattedMessage id="template.shortDescription_1" /> <br />
                  <FormattedMessage id="template.shortDescription_2" />
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template;
