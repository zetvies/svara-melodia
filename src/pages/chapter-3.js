import * as React from "react";
import { Link } from "gatsby";
import "../styles/chapter.scss";
import { StaticImage } from "gatsby-plugin-image";
import useSound from "use-sound";

import continuousSoundtrack from "../audios/Continuous-Soundtrack.m4a";
import P5Kecapi from "../audios/P5-Kecapi.mp3";
import P7Suling from "../audios/P7-Suling.mp3";
import P81Pelog from "../audios/P81-Pelog.mp3";
import P82Madenda from "../audios/P82-Madenda.mp3";
import P83Salendro from "../audios/P83-Salendro.mp3";
import P84Mataraman from "../audios/P84-Mataraman.mp3";

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
        className={`interactionPopUp ${interactionPopUpActive ? "active" : ""}`}
        onClick={() => setInteractionPopUpActive(false)}
      >
        <StaticImage alt="Icon" src="../images/InteractionPopUp.png" />
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
              <StaticImage
                className="headerBackIcon"
                alt="Icon"
                src="../images/Back.png"
              />
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
              <StaticImage
                className="headerAudioIcon"
                alt="Icon"
                src="../images/MusicNotes_Green.png"
              />
            ) : (
              <StaticImage
                className="headerAudioIcon"
                alt="Icon"
                src="../images/MusicNotes_White.png"
              />
            )}
          </div>
        </nav>
        <div class="panel n1">
          <StaticImage alt="Panel" src="../images/panels/1.png" />
        </div>
        <div class="panel n2">
          <StaticImage alt="Panel" src="../images/panels/2.png" />
        </div>
        <div class="panel n3">
          <StaticImage alt="Panel" src="../images/panels/3.png" />
        </div>
        <div class="panel n4">
          <StaticImage alt="Panel" src="../images/panels/4.png" />
        </div>
        <div class="panel n5s1">
          <StaticImage alt="Panel" src="../images/panels/5-1.png" />
        </div>
        <AudioWrapper audio={P5Kecapi} track="P52">
          <div ref={P5Start} class="panel n5s2">
            <StaticImage alt="Panel" src="../images/panels/5-2.png" />
            <StaticImage
              class={`interactivePanel ${
                activeTrack === "P52" ? "active" : ""
              }`}
              alt="Panel"
              src="../images/panels/5-2-Active.png"
            />
          </div>
        </AudioWrapper>
        <div ref={P5End} class="panel n5s3">
          <StaticImage alt="Panel" src="../images/panels/5-3.png" />
        </div>
        <div class="panel n6">
          <StaticImage alt="Panel" src="../images/panels/6.png" />
        </div>
        <div class="panel n7s1">
          <StaticImage alt="Panel" src="../images/panels/7-1.png" />
        </div>
        <AudioWrapper audio={P7Suling} track={"P72"}>
          <div ref={P7Start} class="panel n7s2">
            <StaticImage alt="Panel" src="../images/panels/7-2.png" />
            <StaticImage
              class={`interactivePanel ${
                activeTrack === "P72" ? "active" : ""
              }`}
              alt="Panel"
              src="../images/panels/7-2-Active.png"
            />
          </div>
        </AudioWrapper>
        <div ref={P7End} class="panel n7s3">
          <StaticImage alt="Panel" src="../images/panels/7-3.png" />
        </div>
        <AudioWrapper audio={P81Pelog} track="P81">
          <div ref={P8Start} class="panel n8s1">
            <StaticImage alt="Panel" src="../images/panels/8-1.png" />
            <StaticImage
              class={`interactivePanel ${
                activeTrack === "P81" ? "active" : ""
              }`}
              alt="Panel"
              src="../images/panels/8-1-Active.png"
            />
          </div>
        </AudioWrapper>{" "}
        <AudioWrapper audio={P82Madenda} track={"P82"}>
          <div class="panel n8s2">
            <StaticImage alt="Panel" src="../images/panels/8-2.png" />
            <StaticImage
              class={`interactivePanel ${
                activeTrack === "P82" ? "active" : ""
              }`}
              alt="Panel"
              src="../images/panels/8-2-Active.png"
            />
          </div>
        </AudioWrapper>{" "}
        <AudioWrapper audio={P83Salendro} track={"P83"}>
          <div class="panel n8s3">
            <StaticImage alt="Panel" src="../images/panels/8-3.png" />
            <StaticImage
              class={`interactivePanel ${
                activeTrack === "P83" ? "active" : ""
              }`}
              alt="Panel"
              src="../images/panels/8-3-Active.png"
            />
          </div>
        </AudioWrapper>{" "}
        <AudioWrapper audio={P84Mataraman} track="P84">
          <div class="panel n8s4">
            <StaticImage alt="Panel" src="../images/panels/8-4.png" />
            <StaticImage
              class={`interactivePanel ${
                activeTrack === "P84" ? "active" : ""
              }`}
              alt="Panel"
              src="../images/panels/8-4-Active.png"
            />
          </div>
        </AudioWrapper>
        <div ref={P8End} class="panel n8s5">
          <StaticImage alt="Panel" src="../images/panels/8-5.png" />
        </div>
        <div class="panel n9s1">
          <StaticImage alt="Panel" src="../images/panels/9-1.png" />
        </div>
        <div ref={continuousStart} class="panel n9s2">
          <StaticImage alt="Panel" src="../images/panels/9-2.png" />
        </div>
        <div class="panel n10">
          <StaticImage alt="Panel" src="../images/panels/10.png" />
        </div>
        <div class="panel n11">
          <StaticImage alt="Panel" src="../images/panels/11.png" />
        </div>
        <div class="panel n12s1">
          <StaticImage alt="Panel" src="../images/panels/12-1.png" />
        </div>
        <div ref={continuousEnd} class="panel n12s2">
          <StaticImage alt="Panel" src="../images/panels/12-2.png" />
        </div>
        <div class="panel n13">
          <StaticImage alt="Panel" src="../images/panels/13.png" />
        </div>
        <div class="button" onClick={() => setLikeActive(!likeActive)}>
          {likeActive ? (
            <StaticImage alt="Panel" src="../images/Chapter-Like-Active.png" />
          ) : (
            <StaticImage alt="Panel" src="../images/Chapter-Like.png" />
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
