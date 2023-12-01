import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="text-container">
        <h3 className="text-white">
          {" "}
          <FormattedMessage id="footer.text" />
        </h3>
        <div className="footer-icons">
          <Link
            to="https://www.facebook.com/MADimob.ro"
            target="blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </Link>
          <Link to="/">
            <Instagram />
          </Link>
          <Link
            to="https://wa.me/+40740850331"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsApp />
          </Link>
        </div>
      </div>
      <div className="container-footer"></div>
    </div>
  );
}

export default Footer;
