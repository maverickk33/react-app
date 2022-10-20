import React from "react";
import {
  faContactCard,
  faFontAwesome,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  let appState = useSelector((state) => state.cart);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand text-light">Navbar</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link text-light">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item">Action</a>
                <a className="dropdown-item">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled text-white">Disabled</a>
            </li>
          </ul>

          <form className="form-inline my-2 my-lg-0 d-flex ">
            <input
              className="form-control mr-sm-2 m-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success  my-sm-2 " type="submit">
              Search
            </button>
          </form>
        </div>
        <div style={{ marginRight: "100px", position: "relative" }}>
          <i
            class=" fas fa-cart-shopping text-light"
            style={{ fontSize: "28px" }}
          ></i>
          <span
            className="badge badge-secondary bg-danger position-absolute"
            style={{ borderRadius: "50px", top: "-8px", left: "20px" }}
          >
            {appState}
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
