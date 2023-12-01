import { WhatsApp } from "@mui/icons-material";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import img1 from "../Images/house1.jpg";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

interface ContactProps {
  changeLanguage: (newLocale: string) => void;
  locale: string;
}

const Contact: React.FC<ContactProps> = ({ changeLanguage, locale }) => {
  return (
    <>
      <Navbar changeLanguage={changeLanguage} locale={locale} />
      <div
        className="bg-image "
        style={{
          backgroundImage: `url(${img1})`,
        }}
      >
        <div className="container-contact">
          <div className="details-contact">
            <h1 style={{ textAlign: "start" }}>
              {" "}
              <FormattedMessage id="contact.title" />
            </h1>
            <p style={{ textAlign: "justify" }}></p>

            <div className="contact-icon">
              <div>
                <WhatsApp />
              </div>
              <div className="contact-write">
                <p>WhatsApp</p>
                <Link
                  to="https://wa.me/+40740850331"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FormattedMessage id="contact.whatsapp" />
                </Link>
              </div>
            </div>

            <div className="contact-icon">
              <div>
                <TelegramIcon />
              </div>
              <div className="contact-write">
                <p>Telegram</p>
                <Link
                  to="https://web.telegram.org/k/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FormattedMessage id="contact.telegram" />
                </Link>
              </div>
            </div>

            <div className="contact-icon">
              <div>
                <LinkedInIcon />
              </div>
              <div className="contact-write">
                <p>LinkedIn</p>
                <Link
                  to="https://www.linkedin.com/feed/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FormattedMessage id="contact.linkedIn" />
                </Link>
              </div>
            </div>

            <div className="contact-icon">
              <div>
                <EmailIcon />
              </div>
              <div className="contact-write">
                <p>Email</p>
                <Link to="mailto:contact@madimob.ro">contact@madimob.ro</Link>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h1 style={{ color: "#fff", fontWeight: 700 }}>Contact us</h1>
            <form action="https://formspree.io/f/mdorvaak" method="POST">
              <div className="form-group">
                <label>Your name:</label>
                <input type="text" name="name" required />
              </div>

              <div className="form-group">
                <label>Your email:</label>
                <input type="email" name="email" required />
              </div>

              <div className="form-group">
                <label>Your message:</label>
                <textarea name="message" required></textarea>
              </div>

              <button type="submit" className="btn-send-message">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
