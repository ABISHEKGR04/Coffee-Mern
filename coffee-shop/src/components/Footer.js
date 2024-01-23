

const Footer =() => {
    return (
    <footer className="footer">
    <div className="footer__container container">
      <h1 className="footer__title">Coffee<span>.</span>co</h1>
      <p className="footer__description">
        The best place to work <br />
        and be more productive.
      </p>

      <div className="footer__content grid">
        <div className="footer__data">
          <h2 className="footer__subtitle">Address</h2>
          <p className="footer__information">
            No.34, 5th Cross Street, Avenue Road <br />
            Anna Nagar, Chennai - 600030
          </p>
        </div>
        <div className="footer__data">
          <h2 className="footer__subtitle">Contact</h2>
          <p className="footer__information">
            987654321 <br />
            coffee.co@gmail.com
          </p>
        </div>
        <div className="footer__data">
          <h2 className="footer__subtitle">Open Timings</h2>
          <p className="footer__information">
            Monday - Saturday <br />
            9AM - 10PM<br/>
            Sunday <br/>
            7AM - 10PM
          </p>
        </div>
        <div className="footer__data">
          <p className="footer__newsletter-description">
            Subscribe to our newsletter
          </p>

          <div className="footer__newsletter">
            <input
              type="email"
              placeholder="Your email address"
              className="footer__input"
            />
            <button className="footer__button">
              <i className="bx bx-right-arrow-alt"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="footer__group">
        <ul className="footer__social">
          <a href="https://www.facebook.com/" target="_blank" className="footer__social-link">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="https://twitter.com/" target="_blank" className="footer__social-link">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" className="footer__social-link">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://www.youtube.com/" target="_blank" className="footer__social-link">
            <i className="bx bxl-youtube"></i>
          </a>
          <a href="https://in.linkedin.com/" target="_blank" className="footer__social-link">
            <i className="bx bxl-linkedin"></i>
          </a>
        </ul>

        <span className="footer__copy"> &#169; coffee.co. All rigths reserved </span>
      </div>
    </div>
  </footer>
    )
}

export default Footer;