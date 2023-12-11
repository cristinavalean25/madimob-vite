import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCryptoPrices } from "../Redux/cryptoPricesActions";
import axios from "axios";
import logo from "../Images/madimob-02.png";
import bitcoin from "../Images/bitcoin1.png";
import elrond from "../Images/elrond.png";
import eth from "../Images/eth.png";
import bnb from "../Images/bnb.png";
import solana from "../Images/solana.png";
import xrp from "../Images/xrp.png";
import usdt from "../Images/usdt.png";
import { FormattedMessage, useIntl } from "react-intl";

interface NavbarProps {
  changeLanguage: (newLocale: string) => void;
  locale: string;
}

interface CryptoData {
  [cryptoName: string]: {
    usd: number;
  };
}

const Navbar: React.FC<NavbarProps> = ({ locale }) => {
  const dispatch = useDispatch();
  const intl = useIntl();
  const [cryptoData, setCryptoData] = useState<CryptoData>({});
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const fetchCryptoPrices = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,elrond-erd-2,ethereum,binancecoin,solana,polygon,ripple,tether&vs_currencies=usd"
        );

        setCryptoData(response.data);
        dispatch(setCryptoPrices(response.data));
      } catch (error) {
        console.error("Error fetching crypto prices:", error);
      }
    };

    fetchCryptoPrices();

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [locale, dispatch]);

  const cryptoImages: {
    [cryptoName: string]: string;
  } = {
    binancecoin: bnb,
    bitcoin,
    "elrond-erd-2": elrond,
    ethereum: eth,
    ripple: xrp,
    solana,
    tether: usdt,
  };

  return (
    <nav
      className="navbar navbar-expand-md navbar-dark"
      style={{ backgroundColor: "#000" }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "250px", height: "55px", objectFit: "contain" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isMobile ? "show" : ""}`}
          id="navbarNav"
        >
          <div className="col-md-8 col-sm-12 crypto-price mx-auto flex-row">
            {Object.entries(cryptoData).map(([cryptoName, priceData]) => (
              <div
                key={cryptoName}
                className="d-flex align-items-center mx-auto"
              >
                <img
                  src={cryptoImages[cryptoName]}
                  alt={cryptoName}
                  style={{ width: "30px", height: "30px", marginRight: "5px" }}
                />
                <p
                  style={{ color: "#fff", margin: "0", marginLeft: "5px" }}
                >{`$${priceData.usd}`}</p>
              </div>
            ))}
          </div>

          <div className="col-md-2 col-sm-12 d-flex flex-crow contact-container align-items-center justify-content-center ">
            <Link to="/Contact" className="nav-link text-white m-2">
              <FormattedMessage id="navbar.contact" />
            </Link>

            <Link
              to="/About"
              className="nav-link text-white m-2"
              style={{ color: "#000" }}
            >
              {intl.formatMessage({ id: "navbar.about" })}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
