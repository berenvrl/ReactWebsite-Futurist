import "./HeroSection.css";
import Button from "./Button";
import video from "./space.mp4";

export default function HeroSection() {
  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted></video>
      <h1>WE BRING THE FUTURE TO YOU</h1>
      <p>How far would you like to go?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          FASTEN SEAT BELT
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER OF FUTURE
          <i className="far fa-play-circle"></i>
        </Button>
      </div>
    </div>
  );
}
