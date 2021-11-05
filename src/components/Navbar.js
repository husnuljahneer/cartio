import React from "react";
import "./navbar.css";
import './font.css'

const Navbar = () => {
  return (
    <div className="navbarCenter" style={{ backgroundColor: "transparent" }}>

      <div
        className="d-flex justify-content-between my-3 align-items-center"
        style={{ width: "85%", backgroundColor: "transparent" }}
      >

        <div style={{ fontSize: "1.5rem" }}>
          <i class="fa-solid fa-bars text-light " style={{ color: "black" }}></i>
        </div>

        <div style={{ fontSize: "1.5rem" }}>
        <h1
          className="font-link light text-light text-center "
          style={{ fontWeight: "900" }}
        >
              CARTIO.
        </h1>
      </div>
      
      <div style={{ fontSize: "1.5rem" }}>
        <i
          class="icons fa-solid fa-magnifying-glass text-light"
          style={{ color: "black" }}
        ></i>
        <i
          class="icons fas fa-shopping-cart text-light"
          style={{ color: "black" }}
        ></i>
        <i
          class="icons fa-solid fa-right-to-bracket text-light"
          style={{ color: "black" }}
        ></i>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
