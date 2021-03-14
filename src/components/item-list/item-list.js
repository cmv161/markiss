import React, { Component } from 'react';
import './item-list.css';
import DummyApiService from '../../services/dummy-api-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { shoppingCartPushRedux } from '../../actions';
import { storage } from '../../utils/utils';

class ItemList extends Component {

  state = {
    data: [],
    loading: true,
    error: false,
    brand: [],
    visibleBrand: [],
    priceMin: '',
    priceMax: ''
  };
  dummyApiService = new DummyApiService();

  updateProduct() {
    this.setState({
      loading: true,
    });
    const { category } = this.props;
    const { find } = this.props;

    this.dummyApiService
      .getAllData()
      .then((data) => {
        const newData = data.filter(item => {
          if (find === '') {
            return item.category === category;
          } else {
            return item.name.toLowerCase()
              .indexOf(find.toLowerCase()) > -1 || item.description.toLowerCase()
              .indexOf(find.toLowerCase()) > -1;
          }
        });

        let columnLeft = new Set(); /*уникальный бренд*/
        let priceArrr = [];
        newData.forEach((item) => priceArrr.push(item.price)); /*собираем цену товаров*/
        let min = Math.min.apply(null, priceArrr);
        let max = Math.max.apply(null, priceArrr);
        newData.forEach(item => columnLeft.add(item.name)); /*собираем уникальный бренд*/
        this.setState({
          data: newData,
          loading: false,
          brand: Array.from(columnLeft),
          visibleBrand: Array.from(columnLeft),
          priceMin: min,
          priceMax: max,
        });
      })
      .catch(this.onError);

  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    });
  };

  componentDidMount() {
    this.updateProduct();
  }

  componentDidUpdate(prevProps) {
    storage('shoppingCart', this.props.shoppingCart);
    if (this.props.category !== prevProps.category || this.props.find !== prevProps.find) {
      this.updateProduct();
    }

  }

  onItemSelected = (key) => {
    const { history } = this.props;
    history.push(`/product/${key}`);
  };

  addShoppingCart(event, arrItem, price,) {
    const { shoppingCartPushRedux } = this.props;
    shoppingCartPushRedux(arrItem);
    event.stopPropagation();
  }

  renderItems(arr, shoppingCart = []) {

    return arr.map((item, index) => {
      const {
        name,
        description,
        price,
        key,
        src
      } = item;
      let cartButton = 'В корзину';
      let cartButtonStyle = 'btn btn-primary ';

      if ((shoppingCart.find(itemShopp => itemShopp.key === item.key) && true) || false) {
        cartButton = 'В корзине';
        cartButtonStyle = 'btn btn-success';
      }

      return (<div onClick={() => this.onItemSelected(key)} key={key}
                   className="col-sm-2 imageListSize bg-white m-3 cursorpointer">
        <div className="card-body ">
          <img height="215px" src={src} className="" alt="..."/>
          <h5 className="card-title">{name}</h5>
          <div className="card"></div>
          {description}
          <div className="card"></div>
          <p className="card-text">{price} Р</p>
          <button onClick={(event) => this.addShoppingCart(event, arr[index], price)}
                  className={cartButtonStyle}>{cartButton}</button>
        </div>
      </div>);
    });
  }

  changePriceMin(min) {
    this.setState({
      priceMin: +min,
    });
  }

  changePriceMax(max) {

    this.setState({
      priceMax: +max,
    });
  }

  renderPrice() {
    const {
      priceMin,
      priceMax
    } = this.state;
    return (
      <div className='row m-2'>
        <hr></hr>
        <p><strong>Цена</strong></p>
        <div className='col-sm-6'>
          <input type="search" placeholder={priceMin} className="form-control"
                 onChange={(event) => this.changePriceMin(event.target.value)}></input>
        </div>
        <div className='col-sm-6'>
          <input type="search" placeholder={priceMax} className="form-control "
                 onChange={(event) => this.changePriceMax(event.target.value)}
          ></input>
        </div>
      </div>
    );

  }

  renderColumn(arr) {
    return arr.map((item, index) => {
      return (
        <div key={item} className="form-check">
          <input onClick={() => this.brandToggle(item)} defaultChecked={true}
                 className="form-check-input" type="checkbox"
                 value="" id={index}/>
          <label className="form-check-label" htmlFor="defaultCheck1">
            {item}
          </label>
        </div>
      );
    });
  }

  brandPriceFilter(data, brand) {
    const {
      priceMin,
      priceMax
    } = this.state;
    const searchBrand = data.filter((item) => {
      if (brand.indexOf(item.name) !== -1) return true;
      return false;
    });

    const searchPrice = searchBrand.filter((item) => {
      if (item.price >= priceMin && item.price <= priceMax) return true;
      return false;
    });

    return searchPrice;

  }

  brandToggle(item) {
    this.setState((state) => {
      if (state.brand.indexOf(item) !== -1) {
        const index = state.brand.indexOf(item);
        state.brand.splice(index, 1);
        return {
          brand: state.brand
        };
      } else if (state.brand.indexOf(item) === -1) {
        state.brand.push(item);
        return {
          brand: state.brand
        };
      }
    });
  }

  columnLeft(column, priceFilter) {
    return (
      <div className="columnLeft bg-white m-3">
        <p><strong>Производитель</strong></p>
        {column}
        {priceFilter}
      </div>
    );
  }

  render() {
    const { shoppingCart } = this.props;
    const {
      data,
      loading,
      error,
      brand,
      visibleBrand
    } = this.state;
    const hasData = !(loading || error);
    const spinner = loading ? <Spinner/> : null;
    const errorMessage = error ? <ErrorIndicator/> : null;

    const visibleItems = this.brandPriceFilter(data, brand);
    const items = this.renderItems(visibleItems, shoppingCart);
    const column = this.renderColumn(visibleBrand);
    const priceFilter = this.renderPrice(visibleItems);
    const content = hasData ? items : null;
    const columnLeft = loading ? null : this.columnLeft(column, priceFilter);

    return (
      <div className="marginTopList ">
        {columnLeft}
        <div className="contentProductList">
          <div className="row">
            {errorMessage}
            {content}
            {spinner}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ shoppingCart }) => {
  return { shoppingCart };
};

const mapDispathToProps = {
  shoppingCartPushRedux
};

export default connect(mapStateToProps, mapDispathToProps)(withRouter(ItemList));
