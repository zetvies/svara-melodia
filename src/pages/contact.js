import * as React from "react";
import { Link } from "gatsby";
import "../styles/index.scss";

import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  let [synopsisOpen, setSynopsisOpen] = React.useState(false);

  return (
    <main className="pageStyles">
      <div className="innerContainer">
      <nav className="headerNavigation padding">
          <div className="navigationLink">
            <Link to="/">
              <div class="full bold">Home</div>
            </Link>
          </div>
          <div className="navigationLink center">
            <Link to="/about">
              <div class="full center">About the Artist</div>
            </Link>
          </div>
          <div className="navigationLink">
            <Link to="/contact">
              <div class="full right">Contact</div>
            </Link>
          </div>
        </nav>
        <div className="contentContainer">
          <StaticImage alt="Panel" src="../images/ContactPage.png" />
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Contact | Svara Melodia</title>;
