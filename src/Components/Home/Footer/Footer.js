import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div className="py-5 text-light">
          <div className="container">
            <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1">
              <div className="col text-start d-flex flex-column align-self-center">
                <h5>
                  <i
                    className="fa-brands fa-facebook-f mx-2 text-primary"
                    aria-hidden="true"
                  ></i>
                  <i
                    className="fa-brands fa-twitter mx-2 text-info"
                    aria-hidden="true"
                  ></i>
                  <i
                    className="fa-brands fa-instagram mx-2 text-danger"
                    aria-hidden="true"
                  ></i>
                  <i className="fa fa-envelope mx-2" aria-hidden="true"></i>
                </h5>
                <h5 className="mt-4 logo">
                  <span className="text-danger">o</span>
                  <span className="text-warning">n</span>
                  <span className="text-info">s</span>
                  <span className="text-success">Auto </span>
                  <span className="text-light">&copy; 2021</span>
                </h5>
              </div>
              <div className="col text-start">
                <h3 className="text-primary">Company</h3>
                <ul className="list-unstyled text-secondary">
                  <li>About</li>
                  <li>Events</li>
                  <li>Become a tour guid</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div className="col text-start">
                <h3 className="text-warning">Platform</h3>
                <ul className="list-unstyled text-secondary">
                  <li>Partners</li>
                  <li>News & Blogs</li>
                  <li>Career</li>
                  <li>FAQs</li>
                </ul>
              </div>
              <div className="col text-start">
                <h3 className="text-danger">Subscribe</h3>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-outline-danger"
                    type="button"
                    id="button-addon2"
                  >
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
