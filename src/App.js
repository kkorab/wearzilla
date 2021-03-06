import React, {useEffect, useState} from 'react';
import Home from './pages/Home';
import {Switch, Route, useLocation} from 'react-router-dom';
import Header from './components/Navbar/Header';
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
import { AnimatePresence } from 'framer-motion';
import AddCartModal from './components/AddCartModal';
import AddWishlistModal from './components/AddWishlistModal';
import MobileMenu from './components/Navbar/MobileMenu';
import Loader from './pages/Loader';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=>window.scrollTo(0,0),400);
  }, [location.pathname])

  useEffect(() => {
    window.addEventListener('load', () => {
      setLoading(false)
    })
    return window.removeEventListener('load', () => {
      setLoading(false)
    })
  })
  

  return (
    <>
      <GlobalContextProvider>
        {loading ? <Loader/> : null}
        <Modal/>
        <LoginModal/>
        <MobileMenu/>
        <AddCartModal/>
        <AddWishlistModal/>
        <Header location={location}/>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route path="/" exact component={Home}/>
            <Route path="/catalog" component={Catalog}/>
            <Route path="/sale" component={Sale}/>
            <Route path="/cart" component={Cart} />
            <Route path="/details/:slug" component={Details} />
            <Route path="/wishlist" component={Wishlist} />
            <Route component={Error} />
          </Switch>
        </AnimatePresence>
        <Footer/>
      </GlobalContextProvider>
    </>
  );
}

export default App;
