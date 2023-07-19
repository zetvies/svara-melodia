import * as React from "react";
import { Link } from "gatsby";
import "../styles/index.scss";

import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  let [synopsisOpen, setSynopsisOpen] = React.useState(false);

  const SynopsisModal = () => {
    return (
      <div
        className="synopsisModalContainer"
        onClick={() => setSynopsisOpen(false)}
      >
        <div className="synopsisModalContent">
          <p>
            Di tanah Javasthra yang dikuasai oleh Dewa Matahari, Briatta,
            seorang pemuda bernama Pradipta hidup di desa Hattala bersama
            temannya, Nismara. Sementara itu, Rahagi, perwakilan desa dari
            kerajaan, memperlakukan warga desa dengan semena-mena, seperti
            mengkorupsi hasil produksi warga, serta mencelakai siapa pun yang
            berani melawannya. Pradipta dan Nismara hanya bisa bersabar dengan
            situasi tersebut.
          </p>
          <p>
            Namun, semua berubah ketika mereka menemukan sang Dewi Musik bernama
            Melodia, yang baru saja terbebas dari segelnya selama ribuan tahun.
            Mereka pun berharap dapat melawan tirani Rahagi dengan adanya
            kekuatan sang Dewi. Akan tetapi, karena Melodia sudah lama tersegel,
            kekuatannya belum pulih seperti semula.
          </p>
          <p>
            Untuk memulihkan kekuatannya, Melodia harus dapat menyerap energi
            dari perasaan dan emosi rakyat yang tersalurkan melalui alat musik
            dan lagu-lagu yang berada secara turun-temurun di masyarakat. Karena
            itu, Petualangan Pradipta, Nismara dan Melodia pun dimulai, di mana
            mereka mempelajari alat musik yang belum pernah mereka temui
            sebelumnya, dan menjalin hubungan dengan rakyat-rakyat di
            sekitarnya melalui musik.
          </p>
        </div>
      </div>
    );
  };
  return (
    <main className="pageStyles">
      {synopsisOpen ? <SynopsisModal /> : null}
      <div className="innerContainer">
        <nav className="headerNavigation padding">
          <div className="navigationLink">
            <Link to="/">
              <div class="full bold">Home</div>
            </Link>
          </div>
          <div className="navigationLink">
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
        <div className="contentContainer padding">
          <StaticImage alt="Svara Melodia Cover" src="../images/Cover.png" />
          <div className="subtitle">
            Kisah sang dewi musik dari tanah Javasthra
          </div>
          <div className="synopsisButton" onClick={() => setSynopsisOpen(true)}>
            Sinopsis
          </div>
          <div className="headingContainer">
            <div className="heading">Chapter</div>
            <div className="flex">
              Sort by:{" "}
              <div className="button ml flex">
                {" "}
                Oldest <div className="expand">></div>
              </div>
            </div>
          </div>
          <div className="flex column">
            <StaticImage
              className="chapterItem"
              alt="Svara Melodia Cover"
              src="../images/Chapter-1.png"
            />
            <StaticImage
              className="chapterItem"
              alt="Svara Melodia Cover"
              src="../images/Chapter-2.png"
            />
            <Link to="/chapter-3">
              <StaticImage
                className="chapterItem button"
                alt="Svara Melodia Cover"
                src="../images/Chapter-3.png"
              />
            </Link>
          </div>
        </div>
          <div class="footer" />
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home | Svara Melodia</title>;
