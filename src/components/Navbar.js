import React, { useState } from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Travellers <i className="fab fa-typo"></i>
          </Link>
        </div>
      </nav>
    </div>
  );
}
