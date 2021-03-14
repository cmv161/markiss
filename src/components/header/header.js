import React from 'react';
import { Link } from 'react-router-dom';
import icon from './mark.png';

import './header.css';

import { connect } from 'react-redux';

const Header = ({
  productSwitch,
  searchProduct,
  shoppingCart
}) => {
  const sum = (shoppingCart.map((item) => +item.count)).reduce((a, b) => a + b, 0);
  const totalItem = shoppingCart.map((item) => +item.total);
  let totalPrice = (totalItem.reduce((a, b) => a + b, 0)).toLocaleString();

  if (totalPrice !== '0') {
    totalPrice = totalPrice + ' ₽';
  } else {
    totalPrice = null;
  }
  const doSomething = function (e) {
    e.preventDefault();
  };

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
          <form action="" className="d-flex" onSubmit={doSomething}>
            <input type="search" placeholder="Поиск" className="form-control mr2"
                   onChange={(event) => searchProduct(event.target.value)
                   }></input>
            <Link to="/shoppingcart" className="btn btn-outline-success  ml-5">
              Корзина
            </Link>
            <p className='ml-3 font-weight-bold text-success mr-1'>{sum}</p>
            <i className="cart-icon fa fa-shopping-cart"></i>
            <div
              className="text-nowrap bd-highlight pl-3 pt-1 font-weight-bold text-secondary">{totalPrice}</div>
          </form>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ shoppingCart }) => {
  return { shoppingCart };
};
const mapDispathToProps = {};

export default connect(mapStateToProps, mapDispathToProps)(Header);
