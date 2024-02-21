import React from "react";
import logo from "../../img/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons'; 
import 'bootstrap/dist/css/bootstrap.min.css';

export const Header: React.FC = () => {
  return (
    <nav className="container bg_white">
      <img src={logo} alt="" className="img-fluid " />
      <div className="ms-3">
        <a href="">home</a>
        <a href="">bikes</a>
        <a href="">gear</a>
        <a href="">parts</a>
        <a href="">tires</a>
        <a href="">service-info</a>
        <a href="">catalogues</a>
        <a href="">contact</a>
      </div>
      <div>
        <FontAwesomeIcon icon={faSearch} />
        <FontAwesomeIcon icon={faShoppingBag} className="ms-2"/>
      </div>
    </nav>
  );
};

