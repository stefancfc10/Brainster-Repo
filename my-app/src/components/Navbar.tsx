import React from "react";
import { Link } from "react-router-dom";
import heroimg from "../images/raw/Girls-Listen-Music_0.jpg"

export const Navbar: React.FC = () => {
  return (
  <header>
<div className="hero">
            <img src={heroimg} alt="" />
            <div className="text">
                <Link to={"/artists"}><h1>MUSIC DB</h1></Link>
                
            </div>
        </div>

  </header>
  );
};
