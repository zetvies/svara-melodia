import * as React from "react";
import { Link } from "gatsby";
import "../styles/index.scss";

// import { StaticImage } from "gatsby-plugin-image";
import contactPage from "../images/ContactPage.png"

const IndexPage = () => {
  let [synopsisOpen, setSynopsisOpen] = React.useState(false);

  return (
    <main className="pageStyles">
      <div className="innerContainer">
        <nav className="headerNavigation padding">
          <div className="navigationLink">
            <Link to="/">
              <div class="full">Home</div>
            </Link>
          </div>
          <div className="navigationLink">
            <Link to="/about">
              <div class="full center">About the Artist</div>
            </Link>
          </div>
          <div className="navigationLink">
            <Link to="/contact">
              <div class="full bold right">Contact</div>
            </Link>
          </div>
        </nav>
        <div className="contentContainer">
          
        <img alt="Page" src={contactPage} />
          {/* <StaticImage alt="Panel" src="../images/ContactPage.png" /> */}
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Contact | Svara Melodia</title>;