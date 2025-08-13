import { Link } from 'react-router-dom';
import small_logo from './assets/small_Logo.png';

function Footer() {
  return (
    <footer>
      <img src={small_logo} alt="Little lemon small logo"/>
      <div className="doormat-nav">
        <h4>Doormat Navigation</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/">Menu</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><Link to="/">Order Online</Link></li>
          <li><Link to="/">Login</Link></li>
        </ul>
      </div>

      <div className="contact-info">
        <h4>Contact</h4>
        <ul>
          <li><p>Address: 123 Main St, Chicago, IL</p></li>
          <li><p>Phone: (123) 456-7890</p></li>
          <li><p>Email: contact@littlelemon.com</p></li>
        </ul>
      </div>

      <div className="social-media">
        <h4>Social Media Links</h4>
        <ul>
          <li><a href="https://www.facebook.com">Facebook</a></li>
          <li><a href="https://www.instagram.com">Instagram</a></li>
          <li><a href="https://www.twitter.com">Twitter</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;