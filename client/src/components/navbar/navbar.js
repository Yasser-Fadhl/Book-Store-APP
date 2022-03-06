// import "bootstrap/dist/css/bootstrap.min.css";
import "./nabar.css";
import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light navPosition container-fluid">
      {/* <div class="container-fluid"> */}
      {/* <a class="navbar-brand" href="#">DonJon Company</a> */}
      {/* <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button> */}
      {/* <div class="collapse navbar-collapse " id="navbarSupportedContent"> */}
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 navList">
        <li class="nav-item">
          <Link to="/" class="nav-link active home item1 " aria-current="page">
            Home
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/about" class="nav-link home item2 ">
            About Us
          </Link>
        </li>

        <li class="nav-item dropdown item3">
          <a
            class="nav-link dropdown-toggle home"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Products and Sevices
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link to="/books" class="dropdown-item">
                Book Store
              </Link>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item item4 ">
          <Link to="/login" class="nav-link home">
            Login
          </Link>
        </li>
        <li class="  nav-item item5 ">
          <a class="nav-link disabled home">Contact us</a>
        </li>
      </ul>

      <form class="d-flex ">
        <input
          class="form-control me-2 search"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      {/* </div> */}
      {/* </div> */}
    </nav>
  );
}

export default Navbar;
