import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Slider from './components/slider';
import ApiService from './services/api-service';
import SearchBox from './components/search-box';
import ItemList from './components/item-list';
import ItemDetails from './components/item- details';

import Spinner from './components/spinner';

import {BrowserRouter as Router, Route} from 'react-router-dom'

import {link} from 'react-router-dom'







const idd = '777777'

export default class App extends Component {
  state = {

    category: null,
    find: "",


  };

  productSwitch = (event) => {
    this.setState({ category: event })
  }

  searchProduct=(event)=>{
    this.setState({ find: event })
  }


  render() {
const {category,find}=this.state
    return (
    
  <Router>

      
      <div>
       <Header productSwitch={(event) => this.productSwitch(event)} searchProduct={(event)=>this.searchProduct(event)} />


<Route path= "/" component={Slider }   exact/>
<Route path= "/product"><ItemList category={category} find={find}/></Route> 

<Route path= "/test"><ItemDetails id={1}/></Route>

 
        {/* <Slider />  */}
        {/* <Spinner /> */}
        {/* <ItemList  category={category} find={find}/> */}




      </div>
</Router>
    )

  }


}



ReactDOM.render(<App />,
  document.getElementById('root'));