import React from 'react';
import Home from './pages/Home';
import {Switch, Route} from 'react-router-dom';
import Header from './components/Navbar/Header';
import Contact from './pages/Contact';
import Catalog from './pages/Catalog';
import Sale from './pages/Sale';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Error from './pages/Error';
import {GlobalContextProvider} from './GlobalState';
import Modal from './components/Modal';
import LoginModal from './components/LoginModal';
import Details from './pages/Details';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <GlobalContextProvider>
        <Modal/>
        <LoginModal/>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/catalog" component={Catalog}/>
          <Route path="/sale" component={Sale}/>
          <Route path="/cart" component={Cart} />
          <Route path="/details/:slug" component={Details} />
          <Route path="/wishlist" component={Wishlist} />
          <Route component={Error} />
        </Switch>
        <Footer/>
      </GlobalContextProvider>
    </>
  );
}

export default App;
