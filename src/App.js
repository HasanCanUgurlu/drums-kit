import "./App.css";
import { useState, useEffect } from "react";
import useSound from "use-sound";
// SOUNDS
import crash from "./sounds/crash.mp3";
import kickBass from "./sounds/kick-bass.mp3";
import snare from "./sounds/snare.mp3";
import tom1 from "./sounds/tom-1.mp3";
import tom2 from "./sounds/tom-2.mp3";
import guitar1 from "./sounds/guitar_lick129.mp3";
import guitar2 from "./sounds/guitar_lick130.mp3";
// IMAGES
import cymbalBlack from "./icons/cymbal-black.png";
import cymbalColor from "./icons/cymbal-colored.png";
import bassDrumBlack from "./icons/bass-drum-black.png";
import bassDrumColor from "./icons/bass-drum-colored.png";
import bigdrumBlack from "./icons/bigdrum-black.png";
import bigdrumColor from "./icons/bigdrum-colored.png";
import drumBlack from "./icons/drum-black.png";
import drumColor from "./icons/drum-colored.png";
import guyPlayBlack from "./icons/guy-playing-black.png";
import guyPlayColor from "./icons/guy-playing-colored.png";
import guitar1Black from "./icons/guitar1-black.png";
import guitar1Color from "./icons/guitar1-colored.png";
import guitar2Color from "./icons/electric-guitar-colored.png";
import guitar2Black from "./icons/electric-guitar-black.png";

function App() {
  // ----------------STYLES
  const whiteButton = {
    backgroundColor: "Transparent",
    border: "none",
    outline: 0,
  };
  const imgStyles = {
    maxWidth: "150px",
  };

  // --------------FUNCTIONS
  // --Hooks
  const [isActiveCrash, setActiveCrash] = useState(false);
  const [isActiveKick, setActiveKick] = useState(false);
  const [isActiveSnare, setActiveSnare] = useState(false);
  const [isActiveTom1, setActiveTom1] = useState(false);
  const [isActiveTom2, setActiveTom2] = useState(false);
  const [isActiveGuitar1, setActiveGuitar1] = useState(false);
  const [isActiveGuitar2, setActiveGuitar2] = useState(false);
  // --Sounds from useSound hooks
  const [playCrash] = useSound(crash);
  const [playKickBass] = useSound(kickBass);
  const [playSnare] = useSound(snare);
  const [playTom1] = useSound(tom1);
  const [playTom2] = useSound(tom2);
  const [playGuitar1] = useSound(guitar1);
  const [playGuitar2] = useSound(guitar2);

  // HANDLE CLICK FUNCTIONS: CHANGES THE PICTURE AND PLAYS THE SOUND
  const clickCrash = () => {
    setActiveCrash(!isActiveCrash);
    playCrash();
  };
  const clickKickBass = () => {
    setActiveKick(!isActiveKick);
    playKickBass();
  };
  const clickSnare = () => {
    setActiveSnare(!isActiveSnare);
    playSnare();
  };
  const clickTom1 = () => {
    setActiveTom1(!isActiveTom1);
    playTom1();
  };
  const clickTom2 = () => {
    setActiveTom2(!isActiveTom2);
    playTom2();
  };
  const clickGuitar1 = () => {
    setActiveGuitar1(!isActiveGuitar1);
    playGuitar1();
  };
  const clickGuitar2 = () => {
    setActiveGuitar2(!isActiveGuitar2);
    playGuitar2();
  };

  // IF STATEMENTS CHANGES THE PICTURE BACK
  if (isActiveCrash) {
    //a
    setTimeout(function () {
      setActiveCrash(!isActiveCrash);
    }, 140);
  }
  if (isActiveKick) {
    //s
    setTimeout(function () {
      setActiveKick(!isActiveKick);
    }, 140);
  }
  if (isActiveSnare) {
    //d
    setTimeout(function () {
      setActiveSnare(!isActiveSnare);
    }, 140);
  }
  if (isActiveTom1) {
    //f
    setTimeout(function () {
      setActiveTom1(!isActiveTom1);
    }, 140);
  }
  if (isActiveTom2) {
    //g
    setTimeout(function () {
      setActiveTom2(!isActiveTom2);
    }, 140);
  }
  if (isActiveGuitar1) {
    //g
    setTimeout(function () {
      setActiveGuitar1(!isActiveGuitar1);
    }, 140);
  }
  if (isActiveGuitar2) {
    //g
    setTimeout(function () {
      setActiveGuitar2(!isActiveGuitar2);
    }, 140);
  }
  useEffect(() => {
    const keyPressHandler = (e) => {
      switch (e) {
        case "a":
          var crashSound = new Audio(crash);
          crashSound.play();
          setActiveCrash(!isActiveCrash);
          break;

        case "s":
          var bassSound = new Audio(kickBass);
          bassSound.play();
          setActiveKick(!isActiveKick);
          break;

        case "d":
          var snareSound = new Audio(snare);
          snareSound.play();
          setActiveSnare(!isActiveSnare);
          break;

        case "f":
          var tom1Sound = new Audio(tom1);
          tom1Sound.play();
          setActiveTom1(!isActiveTom1);
          break;

        case "g":
          var tom2Sound = new Audio(tom2);
          tom2Sound.play();
          setActiveTom2(!isActiveTom2);
          break;
        case "h":
          var guitarSound1 = new Audio(guitar1);
          guitarSound1.play();
          setActiveGuitar1(!isActiveGuitar1);
          break;
        case "j":
          var guitarSound2 = new Audio(guitar2);
          guitarSound2.play();
          setActiveGuitar2(!isActiveGuitar2);
          break;
        default:
          console.log(e);
      }
    };
    document.addEventListener("keydown", (e) => {
      keyPressHandler(e.key.toLowerCase());
    });
    return () => {
      document.removeEventListener("keydown", keyPressHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      <div className="header">
        <h1>Drums Kit</h1>
        <p>
          Welcome to Drums Kit! To start, try to click each icon. You can also
          use 'asdfghj' on your keyboard!
        </p>
      </div>
      <div className="allButtons">
        <button className="button" style={whiteButton} onClick={clickCrash}>
          <img
            style={imgStyles}
            src={isActiveCrash ? cymbalColor : cymbalBlack}
            alt="cymbal"
          />
        </button>
        <button className="button" style={whiteButton} onClick={clickKickBass}>
          <img
            style={imgStyles}
            src={isActiveKick ? bassDrumColor : bassDrumBlack}
            alt="bassDrum"
          />
        </button>
        <button className="button" style={whiteButton} onClick={clickSnare}>
          <img
            style={imgStyles}
            src={isActiveSnare ? drumColor : drumBlack}
            alt="snare"
          />
        </button>
        <button className="button" style={whiteButton} onClick={clickTom1}>
          <img
            style={imgStyles}
            src={isActiveTom1 ? bigdrumColor : bigdrumBlack}
            alt="drum"
          />
        </button>
        <button className="button" style={whiteButton} onClick={clickTom2}>
          <img
            style={imgStyles}
            src={isActiveTom2 ? guyPlayColor : guyPlayBlack}
            alt="drum"
          />
        </button>
        <button className="button" style={whiteButton} onClick={clickGuitar1}>
          <img
            style={imgStyles}
            src={isActiveGuitar1 ? guitar1Color : guitar1Black}
            alt="guitar1"
          />
        </button>
        <button className="button" style={whiteButton} onClick={clickGuitar2}>
          <img
            style={imgStyles}
            src={isActiveGuitar2 ? guitar2Color : guitar2Black}
            alt="guitar2"
          />
        </button>
      </div>
      <div className="footer">
        <p>by hasan ugurlu</p>
      </div>
    </div>
  );
}

export default App;
