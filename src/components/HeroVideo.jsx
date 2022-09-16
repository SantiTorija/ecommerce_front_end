import "../styles/home.css";
import videoForHero from "../assets/videos/videoForHero.mp4";

function HeroVideo() {
  return (
    <div className="container-fluid mt-0 p-0">
      <video autoPlay loop muted playsInline src={videoForHero} id="videoHero" type="video/mp4">
        Tu navegador no admite el video.
      </video>
    </div>
  );
}

export default HeroVideo;
