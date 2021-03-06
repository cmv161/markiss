import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './item-list.css';
import DummyApiService from '../../services/dummy-api-service';
import ApiService from '../../services/api-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';


export default class ItemList extends Component {


  state = {
    data: [],
    loading: true,
    error: false,
  };
  dummyApiService = new DummyApiService();
  updateProduct() {
    this.setState({
      loading: true
    })
    const { category } = this.props;
    const { find } = this.props;

    this.dummyApiService
      .getAllData()
      .then((data) => {
        const newData = data.filter(item => {
          if (find == '') {
            return item.category === category
          } else {
            return item.name.toLowerCase().indexOf(find.toLowerCase()) > -1 || item.description.toLowerCase().indexOf(find.toLowerCase()) > -1;}
        })
        this.setState({
          data: newData,
          loading: false
        })
      })
      .catch(this.onError)

  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    })
  }

  componentDidMount() {
    this.updateProduct()
  }
  componentDidUpdate(prevProps) {

    if (this.props != prevProps) {

      this.updateProduct()
    }


  }

  renderItems(arr) {

    return arr.map(({ name, description, price, key, src }) => {
      return (
        <div onClick = {()=>console.log(name)} key={key} className="col-lg-3 col-md-6">
          <img src={src} className="card-img-top person" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <div className="card"></div>
            {description}
            <div className="card"></div>
            <p className="card-text">{price} Р</p>
            <a href="#" className="btn btn-primary">В корзину</a>
          </div>
        </div>
      );
    });
  }

  render() {
    const { data, loading, error } = this.state;

    const hasData = !(loading || error)
    const spinner = loading ? <Spinner /> : null
    const errorMessage = error ? <ErrorIndicator /> : null
    const items = this.renderItems(data)
    const content = hasData ? items : null

    return (
      <section className="text-center">

        <div className="row wow fadeIn margin">
          {errorMessage}
          {content}
          {spinner}


        </div>
      </section>

    )
  }
}





