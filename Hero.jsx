
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-small">THE WORLD IS WAITING FOR YOU</p>

        <h1>
          Discover New Places,
          <br />
          <span>Make New Memories.</span>
        </h1>

        <p className="hero-text">
          Explore beautiful destinations, experience new cultures
          and make every journey unforgettable. Your next adventure
          starts here.
        </p>

        <Link to="/destinations" className="hero-btn">
          Explore Destinations <span>→</span>
        </Link>
      </div>

      <div className="hero-bottom">
        <span>DISCOVER · EXPLORE · EXPERIENCE</span>
        <span>01 — 03</span>
      </div>
    </section>
  );
}

export default Hero;
