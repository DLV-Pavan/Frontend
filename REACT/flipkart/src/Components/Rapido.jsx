import React from 'react';
import "../App.css";

export default function Rapido() {
  return (
    <div className="rapido-landing-page">
      {/* Navigation Header */}
      <header className="border-bottom sticky-top bg-white">
        <div className="container">
          <nav className="navbar navbar-expand-lg py-3">
            <a className="navbar-brand d-flex align-items-center" href="#">
              <img src="./assets/NewLogo (1).png" alt="Rapido Logo" />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
                <a className="nav-link active fw-semibold" aria-current="page" href="#">Home</a>
                <a className="nav-link fw-semibold" href="#">About Us</a>
                <a className="nav-link fw-semibold" href="#">Safety</a>
                <a className="nav-link fw-semibold" href="#">Careers</a>
                <a className="nav-link fw-semibold" href="#">Blog</a>
                <a className="nav-link fw-semibold" href="#">Press</a>
                <a className="nav-link fw-semibold" href="#">Contact Us</a>
                <a className="btn btn-warning fw-bold px-4 py-2 rounded-pill mt-2 mt-lg-0" href="#">
                  Download App
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 pe-lg-5">
              <h1 className="hero-title mb-2">
                India’s #1<br />Ride-hailing App
              </h1>
              <p className="hero-subtitle">
                Quick, Affordable rides at your doorstep
              </p>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="custom-input-group d-flex align-items-center mb-3">
                  <i className="bi bi-geo-alt-fill text-dark me-3 fs-5"></i>
                  <input
                    type="text"
                    className="form-control p-0"
                    placeholder="Enter Pickup Location"
                    required
                  />
                </div>

                <div className="custom-input-group d-flex align-items-center mb-4">
                  <i className="bi bi-record-circle-fill text-dark me-3 fs-5"></i>
                  <input
                    type="text"
                    className="form-control p-0"
                    placeholder="Enter Drop Location"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-book-ride w-100">
                  Book Ride
                </button>
              </form>
            </div>

            <div className="col-lg-6 text-center mt-4 mt-lg-0">
              <img
                src="https://content-cus.rapido.bike/image/banner_image_new.png"
                alt="Rapido Vehicles"
                className="img-fluid rounded-4 shadow-sm"
                onError={(e) => { e.target.src = 'https://placehold.co/600x400/e2e8f0/1e293b?text=Rapido+Vehicles'; }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="services-title">Our Services</h2>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-info">
                  <h3 className="service-name">Bike-Taxi</h3>
                  <p className="service-desc">Beat traffic, ride quicker</p>
                </div>
                <div className="service-img-wrapper">
                  <img src="./assets/bike.png" alt="Bike-Taxi" className="service-img" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-info">
                  <h3 className="service-name">Auto</h3>
                  <p className="service-desc">Everyday autos, made easy</p>
                </div>
                <div className="service-img-wrapper">
                  <img src="./assets/auto.png" alt="Auto" className="service-img" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-info">
                  <h3 className="service-name">Cab</h3>
                  <p className="service-desc">Comfort for every journey</p>
                </div>
                <div className="service-img-wrapper">
                  <img src="./assets/cab.png" alt="Cab" className="service-img" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-info">
                  <h3 className="service-name">Parcel</h3>
                  <p className="service-desc">Quick, secure & insured deliveries</p>
                </div>
                <div className="service-img-wrapper">
                  <img src="./assets/parcel.png" alt="Parcel" className="service-img" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-info">
                  <h3 className="service-name">Travel and Stay</h3>
                  <p className="service-desc">One app, entire journey</p>
                </div>
                <div className="service-img-wrapper">
                  <img src="./assets/travel.png" alt="Travel and Stay" className="service-img" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-info">
                  <h3 className="service-name">Metro Ticket</h3>
                  <p className="service-desc">Rides to and from the metro</p>
                </div>
                <div className="service-img-wrapper">
                  <img src="./assets/metro.png" alt="Metro Ticket" className="service-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <div className="container">
          <h2 className="offer-title">What we offer</h2>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card offer-card">
                <div className="offer-img-container">
                  <img src="./assets/cabdriver.png" alt="Quick Pickup" className="offer-img" />
                </div>
                <h3 className="offer-heading">Quick Pickup</h3>
                <p className="offer-text">Pickups within minutes that help you save time on every ride. A Rapido is always nearby when you need to get moving.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card offer-card">
                <div className="offer-img-container">
                  <img src="./assets/bestfares.png" alt="Best Fares" className="offer-img" />
                </div>
                <h3 className="offer-heading">Best Fares</h3>
                <p className="offer-text">Affordable prices designed for everyday rides. Travel more, spend less without compromising on comfort.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card offer-card">
                <div className="offer-img-container">
                  <img src="./assets/nevertoofar.png" alt="Never Too Far" className="offer-img" />
                </div>
                <h3 className="offer-heading">Never Too Far</h3>
                <p className="offer-text">Present across 400+ cities and counting. Wherever you go, find a Rapido ride close by.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Earn with Rapido Section */}
      <section className="earn-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="earn-img-wrapper">
                <img src="./assets/Earnwithrapido.png" alt="Earn with Rapido Captains" className="earn-img" />
              </div>
            </div>

            <div className="col-lg-6">
              <h2 className="earn-title">Earn with Rapido</h2>
              <p className="earn-desc">Become a Rapido Captain. Ride when you want, work how you want, and earn on your own terms.</p>
              <a href="#" className="btn btn-earning btn-lg">Start Earning &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="download-section">
        <div className="container text-center">
          <h2 className="Download-title">Download Now</h2>

          <div className="row g-4 justify-content-center">
            <div className="col-lg-6 col-md-6">
              <div className="download-card">
                <div className="badge-container">
                  <img src="./assets/NewLogo (1).png" alt="Rapido" className="badge-logo-img" />
                </div>
                <div className="download-text text-start">
                  Bike-Taxi,<br />Auto & Cabs
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="download-card">
                <div className="badge-container">
                  <img src="./assets/rapidoCap.png" alt="Rapido Captain" className="badge-logo-img" />
                </div>
                <div className="download-text text-start">
                  Drive &<br />Earn
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-2 col-md-4 col-6">
              <h5 className="footer-title">Customer app</h5>
              <a href="#" className="store-btn">
                <img src="./assets/play_store.svg" alt="Get it on Google Play" />
              </a>
              <a href="#" className="store-btn">
                <img src="./assets/app_store.svg" alt="Download on the App Store" />
              </a>
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <h5 className="footer-title">Captain app</h5>
              <a href="#" className="store-btn">
                <img src="./assets/play_store.svg" alt="Get it on Google Play" />
              </a>
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <ul className="footer-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Safety</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 col-6">
              <ul className="footer-links">
                <li><a href="#">Customer Terms - Bike Taxi</a></li>
                <li><a href="#">Customer Terms - Cabs and Auto</a></li>
                <li><a href="#">Corporate Affairs</a></li>
                <li><a href="#">Captain Terms - Bike Taxi</a></li>
                <li><a href="#">Captain Terms - Cabs and Auto</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <h5 className="footer-title">Follow Us</h5>
              <div className="social-links">
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="text-center">
            <p className="copyright-text">&copy; 2026 Roppen Transportation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}