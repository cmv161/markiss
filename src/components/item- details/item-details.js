import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './item-details.css';
import DummyApiService from '../../services/dummy-api-service';
import ApiService from '../../services/api-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
const dummyApiService = new DummyApiService();

export default class ItemDetails extends Component {
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
    const { id } = this.props;

    this.dummyApiService
      .getAllData()
      .then((data) => {
        const newData = data.filter(item => item.key === id)
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
    console.log(prevProps)
    if (this.props != prevProps) {
      console.log(prevProps)
      this.updateProduct()
    }


  }

  renderItems(arr) {
    return arr.map(({ name, description, price, key, src }) => {
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <h1 className="outer" >{name}</h1>
            </div>
          </div>

          <div className="row">

            <div className="col-sm ">
              <img src={src} className="img-fluid" alt="..." />

            </div>
            <div className="col-sm">
              <span>{price}</span>
              <h5 className="">{name}</h5>
              {description}
              <p className="">{price} Р</p>
            </div>

          </div>
        </div>

        // <div  className="container-fluid">
        //   
        //   <div className="">
        //     
        //     <a href="#" className="btn btn-primary">В корзину</a>
        //   </div>
        // </div>
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





