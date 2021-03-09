import React, { Component } from 'react';
import './item-list.css';
import DummyApiService from '../../services/dummy-api-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { withRouter } from 'react-router-dom';

class ItemList extends Component {

  state = {
    data: [],
    loading: true,
    error: false,
    brand: [],
    visibleBrand: []
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
          if (find == '') {
            return item.category === category;
          } else {
            return item.name.toLowerCase()
              .indexOf(find.toLowerCase()) > -1 || item.description.toLowerCase()
              .indexOf(find.toLowerCase()) > -1;
          }
        });
        let columnLeft = new Set;
        newData.forEach(item => columnLeft.add(item.name));
        this.setState({
          data: newData,
          loading: false,
          brand: Array.from(columnLeft),
          visibleBrand: Array.from(columnLeft),
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

    if (this.props != prevProps) {

      this.updateProduct();
    }

  }

  onItemSelected = (key) => {
    const { history } = this.props;
    console.log(key);
    history.push(`/product/${key}`);

  };

  renderItems(arr) {

    return arr.map(({
      name,
      description,
      price,
      key,
      src
    }) => {

      return (<div onClick={() => this.onItemSelected(key)} key={key}
                   className="col-sm-2 imageListSize bg-white m-3  ">
        <div className="card-body">
          <img height="215px" src={src} className="" alt="..."/>
          <h5 className="card-title">{name}</h5>
          <div className="card"></div>
          {description}
          <div className="card"></div>
          <p className="card-text">{price} Р</p>
          <a href="#" className="btn btn-primary">В корзину</a>
        </div>
      </div>);
    });
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

  search(data, brand) {
    const search = data.filter((item) => {
      if (brand.indexOf(item.name) !== -1) return true;
    });
    return search;
  }

  brandToggle(item) {
    this.setState((state) => {
      if (state.brand.indexOf(item) != -1) {
        const index = state.brand.indexOf(item);
        state.brand.splice(index, 1);
        return {
          brand: state.brand
        };
      } else if (state.brand.indexOf(item) == -1) {
        state.brand.push(item);
        return {
          brand: state.brand
        };
      }
    });
  }

  render() {
    const {
      data,
      loading,
      error,
      brand,
      visibleBrand
    } = this.state;

    const visibleItems = this.search(data, brand);
    const hasData = !(loading || error);
    const spinner = loading ? <Spinner/> : null;
    const errorMessage = error ? <ErrorIndicator/> : null;
    const items = this.renderItems(visibleItems);
    let column = this.renderColumn(visibleBrand);
    const content = hasData ? items : null;

    return (
      <div className="marginTopList ">
        <div className="columnLeft bg-white m-3">
          <p><strong>Производитель</strong></p>

          {column}

        </div>

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

export default withRouter(ItemList);


