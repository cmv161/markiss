import React from 'react';
import { Link } from 'react-router-dom';
import icon from './mark.png';

import './header.css';

const Header = ({
  productSwitch,
  searchProduct
}) => {

  return (

    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <Link to="/" className="navbar-brand">MarKissMarket</Link>
        <img src={icon} alt="logo" width="40" height="40"/>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarContent"
                aria-controls="navbarContent" aria-expanded="false">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mr-auto mb-2 item">
            <li className="nav-item ">
              <Link to="/product" id='feed'
                    onClick={(event) => productSwitch(event.currentTarget.id)}
                    className="nav-link">Корма</Link>
            </li>
            <li className="nav-item">
              <Link to="/product" id='vitamins'
                    onClick={(event) => productSwitch(event.currentTarget.id)}
                    className="nav-link">Витамины</Link>

            </li>
            <li className="nav-item">
              <Link to="/product" id='toilet'
                    onClick={(event) => productSwitch(event.currentTarget.id)}
                    className="nav-link">Наполнитель</Link>

            </li>
          </ul>
          <form action="" className="d-flex">
            <input type="search" placeholder="Поиск" className="form-control mr2"
                   onChange={(event) => searchProduct(event.target.value)}></input>
            <button className="btn btn-outline-success searc-button ml-5">Корзина</button>

            <div className="text-nowrap bd-highlight pl-3 pt-1 font-weight-bold">14 799 ₽</div>


          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
// <a  id='vitamins' onClick={(event)=>productSwitch(event.currentTarget.id)} className="nav-link ">Витамины</a>
