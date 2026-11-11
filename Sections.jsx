
import { Link } from "react-router-dom";

const destinations = [
  {
    name: "Bali",
    country: "Indonesia",
    image: "photo-1537996194471-e657df975ab4"
  },
  {
    name: "Santorini",
    country: "Greece",
    image: "photo-1533105079780-92b9be482077"
  },
  {
    name: "Maldives",
    country: "Indian Ocean",
    image: "photo-1514282401047-d79a71a590e8"
  },
  {
    name: "Swiss Alps",
    country: "Switzerland",
    image: "photo-1531366936337-7c912a4589a7"
  },
  {
    name: "Paris",
    country: "France",
    image: "photo-1502602898657-3e91760cbb34"
  },
  {
    name: "Thailand",
    country: "Asia",
    image: "photo-1528181304800-259b08848526"
  }
];

const packages = [
  {
    name: "Tropical Island Escape",
    place: "Maldives",
    price: "$450",
    image: "photo-1514282401047-d79a71a590e8"
  },
  {
    name: "Mountain Adventure",
    place: "Switzerland",
    price: "$620",
    image: "photo-1531366936337-7c912a4589a7"
  },
  {
    name: "Romantic City Tour",
    place: "Paris",
    price: "$380",
    image: "photo-1502602898657-3e91760cbb34"
  },
  {
    name: "Island Holiday",
    place: "Bali",
    price: "$520",
    image: "photo-1537996194471-e657df975ab4"
  }
];

function Destinations() {
  return (
    <section className="section destinations" id="destinations">
      <div className="section-heading">
        <div>
          <p className="small-heading">EXPLORE THE WORLD</p>
          <h2>Beautiful finds for<br />every journey.</h2>
        </div>
        <Link to="/destinations" className="text-link">
          View All Destinations →
        </Link>
      </div>

      <div className="destination-grid">
        {destinations.map((item, index) => (
          <Link to="/destinations" className="destination-card" key={index}>
            <img
              src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=600&q=80`}
              alt={item.name}
            />
            <h3>{item.name}</h3>
            <p>{item.country}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Deals() {
  return (
    <section className="deals-section">
      <div className="deals-content">
        <p className="small-heading">LIMITED TIME OFFERS</p>
        <h2>Make your next<br />journey special.</h2>
        <p>
          Discover handpicked holiday deals and unforgettable
          travel experiences at wonderful prices.
        </p>
        <Link to="/deals" className="light-btn">
          Explore Travel Deals →
        </Link>
      </div>

      <div className="deals-image">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85"
          alt="Beautiful tropical beach"
        />
        <div className="discount-circle">
          <small>TRAVEL DEAL</small>
          <strong>30%</strong>
          <small>OFF</small>
        </div>
      </div>
    </section>
  );
}

function Packages() {
  return (
    <section className="section packages">
      <div className="center-heading">
        <p className="small-heading">TRAVELER FAVORITES</p>
        <h2>Our Best Packages</h2>
        <p>Handpicked experiences for your next unforgettable trip.</p>
      </div>

      <div className="package-grid">
        {packages.map((item, index) => (
          <Link to="/packages" className="package-card" key={index}>
            <div className="package-image">
              <img
                src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=700&q=80`}
                alt={item.name}
              />
              <span className="package-tag">POPULAR</span>
            </div>

            <div className="package-info">
              <p>{item.place}</p>
              <h3>{item.name}</h3>
              <div className="package-bottom">
                <span>★★★★★</span>
                <strong>{item.price}</strong>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Collections() {
  return (
    <section className="section collections">
      <div className="collection-heading">
        <div>
          <p className="small-heading">MADE FOR YOUR LIFESTYLE</p>
          <h2>Travel your<br /><i>own way.</i></h2>
        </div>

        <div className="collection-description">
          <p>
            From peaceful beaches to exciting mountain adventures,
            find a journey that feels right for you.
          </p>
          <Link to="/collections" className="text-link">
            Explore All Collections →
          </Link>
        </div>
      </div>

      <div className="collection-grid">
        <Link to="/collections" className="collection-card collection-large">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85"
            alt="Mountain adventure"
          />
          <div className="collection-overlay">
            <small>01 · ADVENTURE</small>
            <h3>Mountain<br />Escape</h3>
          </div>
        </Link>

        <Link to="/collections" className="collection-card">
          <img
            src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=85"
            alt="Beach holiday"
          />
          <div className="collection-overlay">
            <small>02 · RELAXATION</small>
            <h3>Beach Life</h3>
          </div>
        </Link>

        <Link to="/collections" className="collection-card">
          <img
            src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=85"
            alt="City holiday"
          />
          <div className="collection-overlay">
            <small>03 · DISCOVERY</small>
            <h3>City Stories</h3>
          </div>
        </Link>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="reviews-section">
      <div className="reviews-inner">
        <p className="small-heading">STORIES FROM OUR TRAVELERS</p>
        <h2>Loved by people<br /><i>who explore the world.</i></h2>

        <div className="review-card">
          <div className="review-stars">★★★★★</div>
          <p className="review-quote">
            “Our trip was absolutely beautiful. Every destination
            was special, and the entire journey was planned perfectly.
            We made memories that will last forever.”
          </p>
          <div className="review-person">
            <div className="review-avatar">A</div>
            <div>
              <h4>Arun Kumar</h4>
              <p>Happy Traveler</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="newsletter">
      <p className="small-heading">STAY IN THE KNOW</p>
      <h2>A little inspiration,<br /><i>delivered.</i></h2>
      <p>
        Join our travel community for destination ideas,
        special offers and travel inspiration.
      </p>

      <form className="newsletter-form" onSubmit={(e) => {
        e.preventDefault();
        alert("Thank you for subscribing!");
      }}>
        <input type="email" placeholder="Your email address" required />
        <button type="submit">→</button>
      </form>

      <small>✦ No spam. Just beautiful journeys.</small>
    </section>
  );
}

function Sections() {
  return (
    <>
      <Destinations />
      <Deals />
      <Packages />
      <Collections />
      <Reviews />
      <Newsletter />
    </>
  );
}

export default Sections;
