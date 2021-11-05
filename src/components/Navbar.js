import React , {useState} from "react";
import "./navbar.css";
import './font.css'
import {
  Nav,
  NavContainer, 
  NavLogo,
  NavItem,
  NavLinks,
  NavMenu,
  MobileIcon,
} from './NavbarStyles';
import { FaBars } from 'react-icons/fa'; 
const Navbar = () => {

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return (
    <>
    <Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
    <NavContainer>
       <NavLogo href="#">GeeksForGeeks</NavLogo>
       <MobileIcon>
        <FaBars />
       </MobileIcon>
       <NavMenu>
         <NavItem>
           <NavLinks href="#">About</NavLinks>
         </NavItem>
         <NavItem>
           <NavLinks href="#">Services</NavLinks>
         </NavItem>
         <NavItem>
           <NavLinks href="#">Events</NavLinks>
         </NavItem>
         <NavItem>
           <NavLinks href="#">Contact</NavLinks>
         </NavItem>
         <NavItem>
           <NavLinks href="#">Sign In</NavLinks>
         </NavItem>
       </NavMenu>
    </NavContainer>
 </Nav>

    <div className={colorChange ? 'navbar colorChange' : 'navbar'}>

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
    </>
  );
};

export default Navbar;
