import * as React from "react";
import { Link } from "gatsby";
import "../styles/index.scss";

// import { StaticImage } from "gatsby-plugin-image";

import aboutPage from "../images/AboutPage.png"

const IndexPage = () => {
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
              <div class="full bold center">About the Artist</div>
            </Link>
          </div>
          <div className="navigationLink">
            <Link to="/contact">
              <div class="full right">Contact</div>
            </Link>
          </div>
        </nav>

        <div className="contentContainer">
          {" "}
          
          <img alt="Page" src={aboutPage} />
          {/* <StaticImage alt="Panel" src="../images/AboutPage.png" /> */}
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>About the Artist | Svara Melodia</title>;