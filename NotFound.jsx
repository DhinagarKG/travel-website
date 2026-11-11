
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <p className="small-heading">OOPS! WRONG DESTINATION</p>
        <h1>404</h1>
        <h2>This journey doesn't exist.</h2>
        <p>
          The page you are looking for may have moved
          or is not available.
        </p>
        <Link to="/" className="hero-btn">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
