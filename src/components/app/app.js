import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../header';
import ShoppingCart from '../shopping-cart';
import ItemList from '../item-list';
import ItemDetails from '../item- details';
import Slider from '../slider';
import { withStoreService } from '../hoc';
// import { ReactReduxContext } from 'react-redux'
import { connect } from 'react-redux';

class App extends Component {

  state = {
    category: null,
    find: '',
  };

  componentDidMount() {
    // для записи в стор нужно получить данные и передать действия в сторе
    // чтобы получить данные нужно вызвать метод из сервиса а сервис можем получить из контекста при
    // помощи компонента высшего порядка withStoreService
    // -что бы у компонента Апп появился доступ к сервису его нужно обернуть в withStoreService
  }

  productSwitch = (event) => {
    this.setState({ category: event });
    this.render();
  };

  searchProduct = (event) => {

    this.setState({ find: event });
  };

  render() {

    const {
      category,
      find
    } = this.state;
    return (
      <div>
        <Header productSwitch={(event) => this.productSwitch(event)}
                searchProduct={(event) => this.searchProduct(event)}/>
        <Route path="/" component={Slider} exact/>
        <Route path="/product" exact><ItemList category={category} find={find}/></Route>
        <Route path="/product/:id"
               render={({ match }) => {
                 const { id } = match.params;

                 return <ItemDetails id={+id}/>;
               }}/>
        <Route path="/shoppingcart" exact><ShoppingCart/></Route>

      </div>);
  }
}

// говорит что в компонент нужно передать свойство shoppingCart который берется из state.shoppingCart относится к connect
const mapStateToProps = ({ shoppingCart }) => {
  return { shoppingCart };
};

// обычная функция которая принимает dispatch и возвращает объект где ключи это свойства пропс которые
// мы будем присваиваем нашему компоненту а значение это функция которую мы будем вызывать
// -bindActionCreators обернет экшен креатер и сделает так что как только мы вызываем itemLoaded
// она автоматически будет создавать нужное действие  и передовать его в метод dispatch
// -оптимизация , вместо того чтобы передовать функцию в качестве второго аргумента в конект
// можно передать обьект, если вместо функции передовать обьект то обьект в качестве первого аргумента
// попадет в bindActionCreators
// и фактически выполнится это действие
// return bindActionCreators({
//   itemLoaded
// }, dispatch)

// const mapDispathToProps={

// }

export default withStoreService()(
  connect(mapStateToProps)(App));
// mapDispathToProps
// connect используется для получения стор в компоненте апп
