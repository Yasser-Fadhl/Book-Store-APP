import React from "react";
import "./Error.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
function Error() {
  return (
    <div className="error">
      <h2>Error</h2>

      <Link to="/" className="btn primary">
        Return Home Page
      </Link>
    </div>
  );
}

export default Error;
