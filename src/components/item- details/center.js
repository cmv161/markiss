import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shoppingCartPushRedux } from '../../actions';
import { storage } from '../../utils/utils';

class Center extends Component {
  state = {
    image: this.props.src
  };

  onToggleImage = (name) => {
    console.log(name);
    this.setState({
      image: name
    });

  };

  render() {
    const {
      src,
      src2,
      src3,
      price,
      arr,
      keyItem,
      shoppingCartPushRedux,
      shoppingCart
    } = this.props;
    storage('shoppingCart', shoppingCart);
    const { image } = this.state;

    const addShoppingCart = () => {
      shoppingCartPushRedux(arr[0]);
    };

    let cartButton = 'В корзину';
    let cartButtonStyle = 'btn btn-primary  mt-4  btn-lg';

    if ((shoppingCart.find(itemShopp => itemShopp.key === keyItem) && true) || false) {

      cartButton = 'В корзине';
      cartButtonStyle = 'btn btn-success  mt-4  btn-lg';
    }

    return (
      <div className="row  bg-white p-4 rounded">
        <div className="col-md-1">
          <img onClick={this.onToggleImage.bind(this, src)} height="80px"
               src={src}
               className=" rounded " alt="..."></img>
          <img onClick={this.onToggleImage.bind(this, src2)} height="80px"
               src={src2}
               className=" rounded mt-2" alt="..."></img>
          <img onClick={this.onToggleImage.bind(this, src3)} height="80px"
               src={src3}
               className=" rounded mt-2" alt="..."></img>
        </div>
        <div className="col-md-3">
          <img height="245px"
               src={image}
               className="rounded" alt="..."></img>
        </div>
        <div className="col-md-3 offset-md-1 p-4">
          <h3 className="p-3">{price} ₽</h3>
          <button onClick={() => addShoppingCart()} type="button"
                  className={cartButtonStyle}>{cartButton}
          </button>
        </div>
      </div>
    );
  }

};

const mapStateToProps = ({ shoppingCart }) => {
  return { shoppingCart };
};
const mapDispathToProps = {
  shoppingCartPushRedux
};

export default connect(mapStateToProps, mapDispathToProps)(Center);


