import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer: React.FC = () => {
  return (
    <footer className="container footer_color">
      <div className="row">
        <div className="col-md-3">
          <h4>Social share</h4>
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faInstagram} className="ms-2" />
        <FontAwesomeIcon icon={faTwitter} className="ms-2" />
        <FontAwesomeIcon icon={faLinkedinIn} className="ms-2" />
        </div>

        <div className="col-md-3">
          <h4 className="mb-4">Event info</h4>
          <p>Enter now</p>
          <p>Event info</p>
          <p>Course maps</p>
          <p>Race Pack</p>
          <p>Results</p>
          <p>FAQs</p>
          <p>Am I Registered?</p>
        </div>

        <div className="col-md-3">
          <h4 className="mb-4">Registration</h4>
          <p>Volunteers</p>
          <p>Gallery</p>
          <p>Press</p>
          <p>Results</p>
          <p>Privacy Policy</p>
          <p>Service Plus</p>
          <p>Contacts</p>
        </div>

        <div className="col-md-3">
          <h4 className="mb-4">Schedule</h4>
          <p>Gallery</p>
          <p>About</p>
          <p>Videos</p>
          <p>Results</p>
          <p>FAQs</p>
          <p>Results</p>
          <p>Volunteers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

