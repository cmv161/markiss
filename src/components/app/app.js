import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Header from '../header';
import ShoppingCart from '../shopping-cart';
import ItemList from '../item-list';
import ItemDetails from '../item- details';
import HomePage from '../home-page';
import Footer from '../footer';

import { withStoreService } from '../hoc';
// import { ReactReduxContext } from 'react-redux'
import { connect } from 'react-redux';
import SignIn from '../../signIn';

class App extends Component {
  state = {
    find: '',
  };
  category = this.props;

  componentDidUpdate() {
  }

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
    const { category } = this.props;
    const { find } = this.state;
    return (
      <Router>
        <div>
          <Header
            productSwitch={(event) => this.productSwitch(event)}
            searchProduct={(event) => this.searchProduct(event)}
          />
          <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/product" exact>
              <ItemList category={category} find={find}/>
            </Route>
            <Route
              path="/product/:id"
              render={({ match }) => {
                const { id } = match.params;

                return <ItemDetails id={+id}/>;
              }}
            />

            <Route path="/shoppingcart" exact>
              <ShoppingCart/>
            </Route>
            <Route path="/signin" exact>
              <SignIn/>
            </Route>

            <Redirect to="/"/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

// говорит что в компонент нужно передать свойство shoppingCart который берется из state.shoppingCart относится к connect
// const mapStateToProps = ({ shoppingCart }) => {
//   return { shoppingCart };
// };

const mapStateToProps = ({ categoryReducer }) => {
  // console.log(categoryReducer.category)
  return {
    // sum,
    category: categoryReducer.category,
  };
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

export default withStoreService()(connect(mapStateToProps)(App));
// mapDispathToProps
// connect используется для получения стор в компоненте апп
