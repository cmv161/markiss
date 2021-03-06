import React, { Component } from 'react';
import './item-details.css';
import DummyApiService from '../../services/dummy-api-service';
import Center from './center';
import Footer from './footer';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';

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
    });
    const { id } = this.props;

    this.dummyApiService
      .getAllData()
      .then((data) => {
        const newData = data.filter(item => item.key == id);
        this.setState({
          data: newData,
          loading: false
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
      console.log(prevProps);
      // this.updateProduct();
    }

  }

  renderItems(arr) {
    return arr.map(({
      name,
      description,
      price,
      key,
      src,
      src2,
      src3,
      descriptionFool,
      properties,
      review
    }) => {
      return (
        <div key={key}className="container test ">
          <div className="row">
            <h3>{name}</h3>
          </div>
          <div className="row">
            <p> Код товара: {key}</p>
          </div>

          <Center price={price} src={src} src2={src2} src3={src3}/>
          <Footer name={name} description={description} descriptionFool={descriptionFool} properties={properties} review={review}/>
        </div>
      );

    });
  }

  render() {
    const {
      data,
      loading,
      error
    } = this.state;

    const hasData = !(loading || error);
    const spinner = loading ? <Spinner/> : null;
    const errorMessage = error ? <ErrorIndicator/> : null;
    const items = this.renderItems(data);
    const content = hasData ? items : null;

    return (
      <div>
        {errorMessage}
        {content}
        {spinner}
      </div>

    );
  }
}


