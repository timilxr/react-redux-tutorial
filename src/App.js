import './App.css';
import Header from './containers/header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import ProductListing from './containers/productListing';
import ProductDetails from './containers/productDetails';
// import ProductComponent from './containers/productComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetails} />
          {/* <Route path="/" exact component={ProductListing} /> */}
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
