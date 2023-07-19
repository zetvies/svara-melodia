import * as React from "react";
import { Link } from "gatsby";
import "../styles/chapter.scss";
// import { StaticImage } from "gatsby-plugin-image";
import useSound from "use-sound";

import continuousSoundtrack from "../audios/Continuous-Soundtrack.m4a";
import P5Kecapi from "../audios/P5-Kecapi.mp3";
import P7Suling from "../audios/P7-Suling.mp3";
import P81Pelog from "../audios/P81-Pelog.mp3";
import P82Madenda from "../audios/P82-Madenda.mp3";
import P83Salendro from "../audios/P83-Salendro.mp3";
import P84Mataraman from "../audios/P84-Mataraman.mp3";

import InteractionPopUp from "../images/InteractionPopUp.png";
import Back from "../images/Back.png";
import MusicNotes_Green from "../images/MusicNotes_Green.png";
import MusicNotes_White from "../images/MusicNotes_White.png";
import P1 from "../images/panels/1.png";
import P2 from "../images/panels/2.png";
import P3 from "../images/panels/3.png";
import P4 from "../images/panels/4.png";
import P51 from "../images/panels/5-1.png";
import P52 from "../images/panels/5-2.png";
import P52A from "../images/panels/5-2-Active.png";
import P53 from "../images/panels/5-3.png";
import P6 from "../images/panels/6.png";
import P71 from "../images/panels/7-1.png";
import P72 from "../images/panels/7-2.png";
import P72A from "../images/panels/7-2-Active.png";
import P73 from "../images/panels/7-3.png";
import P81 from "../images/panels/8-1.png";
import P81A from "../images/panels/8-1-Active.png";
import P82 from "../images/panels/8-2.png";
import P82A from "../images/panels/8-2-Active.png";
import P83 from "../images/panels/8-3.png";
import P83A from "../images/panels/8-3-Active.png";
import P84 from "../images/panels/8-4.png";
import P84A from "../images/panels/8-4-Active.png";
import P85 from "../images/panels/8-5.png";
import P91 from "../images/panels/9-1.png";
import P92 from "../images/panels/9-2.png";
import P10 from "../images/panels/10.png";
import P11 from "../images/panels/11.png";
import P121 from "../images/panels/12-1.png";
import P122 from "../images/panels/12-2.png";
import P13 from "../images/panels/13.png";
import ChapterLikeActive from "../images/Chapter-Like-Active.png";
import ChapterLike from "../images/Chapter-Like.png";

const IndexPage = () => {
  const [audioOn, setAudioOn] = React.useState(true);
  const [interactionPopUpActive, setInteractionPopUpActive] =
    React.useState(false);
  const [continuousZoneOn, setContinuousZoneOn] = React.useState(false);
  let [activeTrack, setActiveTrack] = React.useState(null);
  let [activePage, setActivePage] = React.useState(null);
  let [likeActive, setLikeActive] = React.useState(false);

  let [play, { stop, sound }] = useSound(continuousSoundtrack, {
    volume: 0.5,
  });

  const continuousStart = React.useRef();
  const continuousEnd = React.useRef();
  const P5Start = React.useRef();
  const P5End = React.useRef();
  const P7Start = React.useRef();
  const P7End = React.useRef();
  const P8Start = React.useRef();
  const P8End = React.useRef();

  React.useEffect(() => {
    if (continuousZoneOn) {
      play();
      sound?.fade(0, 0.5, 1000);
    } else {
      sound?.fade(0.5, 0, 1000);
      setTimeout(() => {
        stop();
      }, 2000);
    }
    console.log(continuousZoneOn);
  }, [continuousZoneOn]);

  React.useEffect(() => {
    if (activePage !== null) {
      setInteractionPopUpActive(true);
    } else {
      setInteractionPopUpActive(false);
    }
  }, [activePage]);

  React.useEffect(() => {
    if (audioOn) {
      sound?.fade(0, 0.5, 2000);
    } else {
      sound?.fade(0.5, 0, 2000);
    }
  }, [audioOn]);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const position = window.scrollY;

        if (
          position > continuousStart.current.offsetTop &&
          position < continuousEnd.current.offsetTop
        ) {
          setContinuousZoneOn(true);
        } else {
          setContinuousZoneOn(false);
        }

        if (
          position > P5Start.current.offsetTop - 400 &&
          position < P5End.current.offsetTop - 300
        ) {
          setActivePage("P5");
        } else if (
          position > P7Start.current.offsetTop - 400 &&
          position < P7End.current.offsetTop - 500
        ) {
          setActivePage("P7");
        } else if (
          position > P8Start.current.offsetTop - 400 &&
          position < P8End.current.offsetTop - 400
        ) {
          setActivePage("P8");
        } else {
          setActivePage(null);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const [audioPlaying, setAudioPlaying] = React.useState(false);
  function AudioWrapper({ audio, track, children }) {
    let [play] = useSound(audio, {
      volume: 0.5,
      onplay: () => {
        setAudioPlaying(true);
        setActiveTrack(track);
      },
      onend: () => {
        setAudioPlaying(false);
        setActiveTrack(null);
      },
    });

    let audioHandler = () => {
      if (!audioPlaying) {
        play();
      } else {
        stop();
        console.log("test");
      }
    };

    return <div onClick={() => audioHandler()}>{children}</div>;
  }

  const InteractionPopUp = () => {
    return (
      <div
        className={`interactionPopUp button ${
          interactionPopUpActive ? "active" : ""
        }`}
        onClick={() => setInteractionPopUpActive(false)}
      >
        
        <img className="headerBackIcon" alt="Icon" src={InteractionPopUp} />
        {/* <StaticImage alt="Icon" src="../images/InteractionPopUp.png" /> */}
      </div>
    );
  };
  return (
    <main className="pageStyles">
      <div className="innerContainer">
        <InteractionPopUp />
        <nav className="headerChapter">
          <div className="backButton button">
            <Link to="/">
              <img className="headerBackIcon" alt="Icon" src={Back} />
              {/* <StaticImage
                className="headerBackIcon"
                alt="Icon"
                src="../images/Back.png"
              /> */}
            </Link>
          </div>
          <div className="chapterTitle ml">
            Chapter 3: Kacapi Suling Sandayana {activePage}
          </div>
          <div
            className={`audioButton button ${audioOn ? "active" : ""}`}
            onClick={() => setAudioOn(!audioOn)}
          >
            {audioOn ? (
              <img
                className="headerAudioIcon"
                alt="Icon"
                src={MusicNotes_Green}
              />
            ) : (
              // <StaticImage
              //   className="headerAudioIcon"
              //   alt="Icon"
              //   src="../images/MusicNotes_Green.png"
              // />
              <img
                className="headerAudioIcon"
                alt="Icon"
                src={MusicNotes_White}
              />
              // <StaticImage
              //   className="headerAudioIcon"
              //   alt="Icon"
              //   src="../images/MusicNotes_White.png"
              // />
            )}
          </div>
        </nav>
        <div class="panel n1">
          <img alt="Panel" src={P1} style={{ width: "100%" }} />
          {/* <StaticImage alt="Panel" src="../images/panels/1.png" /> */}
        </div>
        <div class="panel n2">
          <img alt="Panel" src={P2} style={{ width: "100%" }} />
          {/* <StaticImage alt="Panel" src="../images/panels/2.png" /> */}
        </div>
        <div class="panel n3">
          <img alt="Panel" src={P3} style={{ width: "100%" }} />
          {/* <StaticImage alt="Panel" src="../images/panels/3.png" /> */}
        </div>
        <div class="panel n4">
          <img alt="Panel" src={P4} style={{ width: "100%" }} />
          {/* <StaticImage alt="Panel" src="../images/panels/4.png" /> */}
        </div>
        <div class="panel n5s1">
          <img alt="Panel" src={P51} style={{ width: "100%" }} />
          {/* <StaticImage alt="Panel" src="../images/panels/5-1.png" /> */}
        </div>
        <AudioWrapper audio={P5Kecapi} track="P52">
          <div ref={P5Start} class="panel n5s2">
            <img alt="Panel" src={P52} style={{ width: "100%" }} />
            {/* <StaticImage alt="Panel" src="../images/panels/5-2.png" /> */}

            <img
              alt="Panel"
              src={P52A}
              class={`interactivePanel ${
                activeTrack === "P52" ? "active" : ""
              }`}
              style={{ width: "100%" }}
            />
            {/* <StaticImage
              class={`interactivePanel ${
                activeTrack === "P52" ? "active" : ""
              }`}
              alt="Panel"
              src="../images/panels/5-2-Active.png"
            /> */}
          </div>
        </AudioWrapper>
        <div ref={P5End} class="panel n5s3">
          <img alt="Panel" src={P53} style={{ width: "100%" }} />
          {/* <StaticImage alt="Panel" src="../images/panels/5-3.png" /> */}
        </div>
        <div class="panel n6">
          <img alt="Panel" src={P6} style={{ width: "100%" }} />
        </div>
        <div class="panel n7s1">
          <img alt="Panel" src={P71} style={{ width: "100%" }} />
        </div>
        <AudioWrapper audio={P7Suling} track={"P72"}>
          <div ref={P7Start} class="panel n7s2">
            <img alt="Panel" src={P72} style={{ width: "100%" }} />
            <img
              alt="Panel"
              src={P72A}
              class={`interactivePanel ${
                activeTrack === "P72" ? "active" : ""
              }`}
              style={{ width: "100%" }}
            />
            {/* <StaticImage alt="Panel" src="../images/panels/7-2.png" /> */}
            {/* <StaticImage
              class={`interactivePanel ${
                activeTrack === "P72" ? "active" : ""
              }`}
              alt="Panel"
              src="../images/panels/7-2-Active.png"
            /> */}
          </div>
        </AudioWrapper>
        <div ref={P7End} class="panel n7s3">
          <img alt="Panel" src={P73} style={{ width: "100%" }} />
          {/* <StaticImage alt="Panel" src="../images/panels/7-3.png" /> */}
        </div>
        <AudioWrapper audio={P81Pelog} track="P81">
          <div ref={P8Start} class="panel n8s1">
            <img alt="Panel" src={P81} style={{ width: "100%" }} />
            <img
              alt="Panel"
              src={P81A}
              class={`interactivePanel ${
                activeTrack === "P81" ? "active" : ""
              }`}
              style={{ width: "100%" }}
            />
            {/* <StaticImage alt="Panel" src="../images/panels/8-1.png" />
            <StaticImage
              class={`interactivePanel ${
                activeTrack === "P81" ? "active" : ""
              }`}
              alt="Panel"
              src="../images/panels/8-1-Active.png"
            /> */}
          </div>
        </AudioWrapper>{" "}
        <AudioWrapper audio={P82Madenda} track={"P82"}>
          <div class="panel n8s2">
            <img alt="Panel" src={P82} style={{ width: "100%" }} />
            <img
              alt="Panel"
              src={P82A}
              class={`interactivePanel ${
                activeTrack === "P82" ? "active" : ""
              }`}
              style={{ width: "100%" }}
            />
            {/* <StaticImage alt="Panel" src="../images/panels/8-2.png" />
            <StaticImage
              class={`interactivePanel ${
                activeTrack === "P82" ? "active" : ""
              }`}
              alt="Panel"
              src="../images/panels/8-2-Active.png"
            /> */}
          </div>
        </AudioWrapper>{" "}
        <AudioWrapper audio={P83Salendro} track={"P83"}>
          <div class="panel n8s3">
            <img alt="Panel" src={P83} style={{ width: "100%" }} />
            <img
              alt="Panel"
              src={P83A}
              class={`interactivePanel ${
                activeTrack === "P83" ? "active" : ""
              }`}
              style={{ width: "100%" }}
            />
            {/* <StaticImage alt="Panel" src="../images/panels/8-3.png" />
            <StaticImage
              class={`interactivePanel ${
                activeTrack === "P83" ? "active" : ""
              }`}
              alt="Panel"
              src="../images/panels/8-3-Active.png"
            /> */}
          </div>
        </AudioWrapper>{" "}
        <AudioWrapper audio={P84Mataraman} track="P84">
          <div class="panel n8s4">
            <img alt="Panel" src={P84} style={{ width: "100%" }} />
            <img
              alt="Panel"
              src={P84A}
              class={`interactivePanel ${
                activeTrack === "P84" ? "active" : ""
              }`}
              style={{ width: "100%" }}
            />
            {/* <StaticImage alt="Panel" src="../images/panels/8-4.png" />
            <StaticImage
              class={`interactivePanel ${
                activeTrack === "P84" ? "active" : ""
              }`}
              alt="Panel"
              src="../images/panels/8-4-Active.png"
            /> */}
          </div>
        </AudioWrapper>
        <div ref={P8End} class="panel n8s5">
          
        <img alt="Panel" src={P85} style={{ width: "100%" }} />
          {/* <StaticImage alt="Panel" src="../images/panels/8-5.png" /> */}
        </div>
        <div class="panel n9s1">
          
        <img alt="Panel" src={P91} style={{ width: "100%" }} />
          {/* <StaticImage alt="Panel" src="../images/panels/9-1.png" /> */}
        </div>
        <div ref={continuousStart} class="panel n9s2">
          
        <img alt="Panel" src={P92} style={{ width: "100%" }} />
          {/* <StaticImage alt="Panel" src="../images/panels/9-2.png" /> */}
        </div>
        <div class="panel n10">
          
        <img alt="Panel" src={P10} style={{ width: "100%" }} />
          {/* <StaticImage alt="Panel" src="../images/panels/10.png" /> */}
        </div>
        <div class="panel n11">
          
        <img alt="Panel" src={P11} style={{ width: "100%" }} />
          {/* <StaticImage alt="Panel" src="../images/panels/11.png" /> */}
        </div>
        <div class="panel n12s1">
          
        <img alt="Panel" src={P121} style={{ width: "100%" }} />
          {/* <StaticImage alt="Panel" src="../images/panels/12-1.png" /> */}
        </div>
        <div ref={continuousEnd} class="panel n12s2">
          
        <img alt="Panel" src={P122} style={{ width: "100%" }} />
          {/* <StaticImage alt="Panel" src="../images/panels/12-2.png" /> */}
        </div>
        <div class="panel n13">
          
        <img alt="Panel" src={P13} style={{ width: "100%" }} />
          {/* <StaticImage alt="Panel" src="../images/panels/13.png" /> */}
        </div>
        <div class="button" onClick={() => setLikeActive(!likeActive)}>
          {likeActive ? (
            
            <img alt="Panel" src={ChapterLikeActive} style={{ width: "100%" }} />
            // <StaticImage alt="Panel" src="../images/Chapter-Like-Active.png" />
          ) : (
            <img alt="Panel" src={ChapterLike} style={{ width: "100%" }} />
          )}
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => (
  <title>Chapter 3: Kecapi Suling Sandayana | Svara Melodia</title>
);