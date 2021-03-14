import React, { Component } from 'react';
import './shopping-cart.css';
import { connect } from 'react-redux';
import {
  shoppingCartAllDeleteRedux,
  shoppingCartDeleteRedux,
  shoppingCartPushRedux
} from '../../actions';
import { storage } from '../../utils/utils';
import { withRouter } from 'react-router-dom';

class ShoppingCart extends Component {

  componentDidUpdate() {
    storage('shoppingCart', this.props.shoppingCart);
  }

  onIncrement(key) {
    const {
      shoppingCartPushRedux,
      shoppingCart
    } = this.props;
    let item = shoppingCart.find(itemShopp => itemShopp.key === key);
    shoppingCartPushRedux(item);
  }

  onDecrement(key) {
    const {
      shoppingCart,
      shoppingCartDeleteRedux
    } = this.props;
    let item = shoppingCart.find(itemShopp => itemShopp.key === key);
    shoppingCartDeleteRedux(item);
  }

  onDelete(key) {
    const {
      shoppingCart,
      shoppingCartAllDeleteRedux
    } = this.props;
    let item = shoppingCart.find(itemShopp => itemShopp.key === key);
    shoppingCartAllDeleteRedux(item);
  }

  onItemSelected(key) {
    const { history } = this.props;
    history.push(`/product/${key}`);
  };

  render() {
    const { shoppingCart } = this.props;

    return shoppingCart.map((item, index) => {
      const {
        key,
        name,
        count,
        total,
        src
      } = item;
      return (
        <div key={key} className='container marginProduct bg-white'>
          <div className='row'>
            <div className="col-sm-1 mt-5">
              <h5 className="ml-3 mt-4">{index + 1}</h5>
            </div>
            <div className='col-sm-3'>
              <img onClick={() => this.onItemSelected(key)} key={key} height="205px"
                   src={src}
                   className="rounded ml-2" alt="..."></img>
            </div>
            <div className='col-sm-3'>
              <p className="mt-5 font-weight-bold">Наименование</p>
              <p className="">{name}</p>
            </div>
            <div className='col-sm-2'>
              <p className="font-weight-bold mt-5 ">Колличество</p>
              <p>{count} шт</p>
            </div>
            <div className='col-sm-1'>
              <p className="font-weight-bold mt-5">Цена</p>
              <p>{total} р</p>
            </div>
            <div className='col-sm-2 mt-5'>
              <button onClick={() => this.onDecrement(key)}
                      className="btn btn-outline-warning mt-3">
                <i className='fa fa-minus-circle'/>
              </button>
              <button onClick={() => this.onIncrement(key)}
                      className="btn btn-outline-success mx-2 mt-3">
                <i className='fa fa-plus-circle'/>
              </button>
              <button onClick={() => this.onDelete(key)} className="btn btn-outline-danger mt-3">
                <i className='fa fa-trash'/>
              </button>
            </div>
          </div>
        </div>
      );
    });
  }
}

const mapStateToProps = ({
  sum,
  shoppingCart
}) => {
  return {
    sum,
    shoppingCart
  };
};

const mapDispathToProps = {
  shoppingCartPushRedux,
  shoppingCartDeleteRedux,
  shoppingCartAllDeleteRedux
};
export default connect(mapStateToProps, mapDispathToProps)(withRouter(ShoppingCart));

