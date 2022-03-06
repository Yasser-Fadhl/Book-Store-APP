import React from "react";
import "./body.css";
import { Link } from "react-router-dom";
function Body() {
  return (
    <div class="row" className="grid-container ">
      <div class=" item1">
        {/* <img class="img" src="bookstorebody1.jpeg" alt="Bookstore" /> */}
        <h2 class="text">
          Join Our Bookstores
          <br />
          <Link to="/register">
            <button>Register Now</button>
          </Link>
        </h2>
      </div>
      {/* <div class="leftcolumn item2"> */}
      <div class="card item2">
        <a href="#">
          {" "}
          <h2>Browse the Childer Section</h2>
        </a>
        <h6>Founded on Dec 7, 2020</h6>
        <section>
          <a href="#">
            {" "}
            <img class="fakeimg" src="bookstoreChildren.jpg" />
          </a>
        </section>
        <p>
          Fugiat veniam nulla dolor nisi dolor esse. Tempor aliquip Lorem dolore
          exercitation id qui ipsum amet labore ea sint. Sint et tempor qui non
          dolor exercitation. Voluptate quis et in deserunt ea incididunt enim
          et minim culpa qui. Nisi sunt cillum qui duis ullamco Lorem eu eu sunt
          pariatur. Consequat anim enim id cillum nisi. Labore incididunt
          deserunt aute culpa ipsum duis culpa ad irure enim veniam eu anim. Et
          fugiat et cupidatat quis. Amet deserunt qui consectetur culpa do
          reprehenderit mollit magna ad commodo dolor. Eiusmod laborum ea
          consequat dolore. Dolore cillum dolor aliqua minim laborum dolor
          occaecat eu minim aliqua pariatur ullamco.
        </p>

        <p>
          Sunt in culpa qui officia deserunt mollit anim id est laborum
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco.
        </p>
      </div>
      <div class="card item3">
        <h2>TITLE HEADING</h2>
        <h5>Title description, Sep 2, 2017</h5>
        <div class="fakeimg" height="200px">
          Image
        </div>
        <p>Some text..</p>
        <p>
          Sunt in culpa qui officia deserunt mollit anim id est laborum
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco.
        </p>
      </div>
      {/* </div> */}
      {/* <div class="rightcolumn"> */}
      <div class="card item5">
        <h2>About Me</h2>
        <div class="fakeimg" height="100px">
          Image
        </div>
        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
      </div>
      <div class="card item4">
        <h3>Popular Post</h3>
        <div class="fakeimg">
          <p>Image</p>
        </div>
        <div class="fakeimg">
          <p>Image</p>
        </div>
        <div class="fakeimg">
          <p>Image</p>
        </div>
      </div>
      <div class="card item6">
        <h3>Follow Me</h3>
        <p>Some text..</p>
      </div>
    </div>
  );
  // </div>
}

export default Body;
