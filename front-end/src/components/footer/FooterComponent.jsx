import { Link } from "react-router-dom";
import { FooterCon, FooterContainer, FooterRight } from "./__footerStyled";

const FooterComponent = () => {
  return (
    <FooterContainer>
      <div className="con">
        <FooterCon>
          <p className="footer__left">create by Jubayer </p>
          <FooterRight>
            <li>
              <Link to={"/"}>home</Link>
            </li>

            <li>
              <Link to={"/v1/manageurls"}>Manage URLs</Link>
            </li>

            <li>
              <Link to={"/v1/history"}>Short URL History</Link>
            </li>
          </FooterRight>
        </FooterCon>
      </div>
    </FooterContainer>
  );
};

export default FooterComponent;
