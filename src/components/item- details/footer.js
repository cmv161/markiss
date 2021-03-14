import React, { Component } from 'react';

export default class Footer extends Component {

  state = {
    filter: 'descriptionFool'
  };
  buttons = [
    {
      name: 'descriptionFool',
      label: 'Описание'
    },
    {
      name: 'properties',
      label: 'Характеристики'
    },
    {
      name: 'review',
      label: 'Отзывы'
    }
  ];
  onToggleButton = (name) => {
    this.setState({
      filter: name
    });

  };

  render() {

    let productCard;
    const { filter } = this.state;
    const {
      name,
      descriptionFool,
      properties,
      review
    } = this.props;

    const propertiesList = (
      <React.Fragment>
        <div className="col-md-3">
          <p className="text-md-left pl-4">Тип</p>
          <p className="text-md-left pl-4">Для кого</p>
          <p className="text-md-left pl-4">Вкус</p>
        </div>
        <div className="col-md-3">
          <p className="text-md-left">{properties.type}</p>
          <p className="text-md-left">{properties.designedFor}</p>
          <p className="text-md-left">{properties.taste}</p>
        </div>
      </React.Fragment>
    );
    const descriptionFoolList = (
      <p className="text-md-left p-4"> {descriptionFool}</p>
    );

    const reviewList = review.map(({
      dignity,
      limitations,
      comment,
      number
    }) => {

      return (
        <div key={number} className="row">
          <div className="col">
            <p className="text-md-left pl-4"><strong>Достоинства</strong></p>

            <div className="row pl-4">
              <div className="col">
                <p className="text-md-left pl-4">{dignity}</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="text-md-left pl-4"><strong>Недостатки</strong></p>
                <div className="row pl-4">
                  <div className="col">
                    <p className="text-md-left pl-4">{limitations}</p>
                  </div>
                </div>

              </div>

            </div>
            <div className="row">
              <div className="col">
                <p className="text-md-left pl-4"><strong>Комментарий</strong></p>
                <div className="row pl-4">
                  <div className="col">
                    <p className="text-md-left pl-4">{comment}</p>
                  </div>
                </div>

              </div>
            </div>
            <hr></hr>
          </div>
        </div>
      );
    });

    switch (filter) {
      case 'descriptionFool':
        productCard = descriptionFoolList;
        break;
      case 'properties':
        productCard = propertiesList;
        break;
      case 'review':
        productCard = reviewList;
        break;
      default:
        productCard = descriptionFoolList;
        ;
    }

    const buttons = this.buttons.map(({
      name,
      label
    }) => {
      const isActive = filter === name;
      const clazz = isActive ? 'btn-primary' : 'btn-secondary';

      return (
        <div key={name} className="row mt-3">
          <div className="col">
            <button type="button" className={`btn  btn-lg btn-block ${clazz}`}
                    onClick={this.onToggleButton.bind(this, name)}> {label}</button>
          </div>
        </div>
      );
    });

    return (
      <div className="row  bg-white mt-5 rounded">
        <div className="col-md-3 my-2">
          {buttons}
        </div>
        <div className="col-md-8 p-4">
          <h3 className=" pl-4">{name}</h3>
          <div className="row">
            {productCard}
          </div>
        </div>
      </div>
    );
  }
}



