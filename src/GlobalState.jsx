import React, {useState, createContext, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import {items} from './Data';

export const GlobalContext = createContext();

export const GlobalContextProvider = (props) => {
    const copiedItems = copyItems(items);
    const [showAddModal, setShowAddModal] = useState(false);
    const [chooseSize, setChooseSize] = useState(false);
    const [showAddModalWishlist, setShowAddModalWishlist] = useState(false);
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || copiedItems);
    const [isMobileSize, setIsMobileSize] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [detailsProduct, setDetailsProduct] = useState(null);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || []);
    const [whatSize, setWhatSize] = useState('M');
    const location = useLocation();

    function copyItems(arr) {
        let tempProducts = [];
        arr.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        })
        return tempProducts;
    } 

    const showModalItemCart = () => {
        setShowAddModal(true);
        setTimeout(() => setShowAddModal(false), 3000)
    }

    const showModalItemWishlist = () => {
        setShowAddModalWishlist(true);
        setTimeout(() => setShowAddModalWishlist(false), 3000)
    }

    const copyDataProducts = () => {
        let tempProducts = [];
        items.forEach(item => {
            const singleItem = {...item};
            wishlist.forEach(wish => {
                if (wish.id === singleItem.id) {
                    singleItem.inWishlist = true;
                }
            })
            tempProducts = [...tempProducts, singleItem];
        })
        setProducts(tempProducts);
    }

    const getItem = (id) => {
        const chosenItem = products.find(product => product.id === id);
        return chosenItem;
    }

    const handleDetails = (id) => {
        const item = getItem(id);
        return setDetailsProduct(item);
    }

    const addToCart = (id, size) => {
        let tempProducts = [...products];
        const index = products.indexOf(getItem(id));
        const item = tempProducts[index];
        item.inCart = true;
        item.quantity = 1;
        const price = item.price;
        item.total = price;
        item.size = size;

        setCart([...cart, item])
        setProducts(tempProducts);
        showModalItemCart();
    }

    const addToWishlist = (id) => {
        let tempProducts = [...products];
        const index = products.indexOf(getItem(id));
        const item = tempProducts[index];
        item.inWishlist = true;

        setWishlist([...wishlist, item])
        setProducts(tempProducts);
        showModalItemWishlist();
    }

    const removeFromWishlist = (id) => {
        let tempProducts = [...products];
        let tempWishlist = [...wishlist];

        tempWishlist = tempWishlist.filter(item => item.id !== id);
        const index = tempProducts.indexOf(getItem(id));
        let removedProduct = tempProducts[index];

        removedProduct.inWishlist = false;

        setWishlist([...tempWishlist]);
        setProducts([...tempProducts]);
    }

    const increment = (id) => {
        let tempCart = [...cart];

        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const item = tempCart[index];

        item.quantity = item.quantity + 1;
        item.total = item.quantity * item.price;

        setCart([...tempCart])
    }

    const decrement = (id) => {
        let tempCart = [...cart];
        
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const item = tempCart[index];
        
        item.quantity = item.quantity - 1;
        if ( item.quantity === 0) {
            removeItem(id);
        }
        else {
            item.total = item.quantity * item.price;
            setCart([...tempCart]);
        }
    }

    const removeItem = (id) => {
        let tempProducts = [...products];
        let tempCart = [...cart];

        tempCart = tempCart.filter(item => item.id !== id);
        const index = tempProducts.indexOf(getItem(id));
        let removedProduct = tempProducts[index];

        removedProduct.inCart = false;
        removedProduct.quantity = 0;
        removedProduct.total = 0;

        setCart([...tempCart]);
        setProducts([...tempProducts]);
    }

    const clearCart = () => {
        setCart([]);
        copyDataProducts();
    }

    const addTotals = () => {
        let subTotal = 0;
        cart.map(item => (subTotal += item.total))
        const total = subTotal;

        return total.toFixed(2);
    }


    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist])

   
    
    useEffect(() => {
        const handleWindowSize = () => {
            if (window.innerWidth < 800) {
                setIsMobileSize(true);
            }
            else {
                setIsMobileSize(false);
            }
        }
        window.addEventListener('resize', handleWindowSize);
        handleWindowSize();
        return () => window.removeEventListener('resize', handleWindowSize);
    }, [isMobileSize])



    return (
        <GlobalContext.Provider value={{
            mobileContext: [isMobileSize, setIsMobileSize],
            productsContext: [products, setProducts],
            modalContext: [showLoginModal, setShowLoginModal],
            detailsContext: [detailsProduct, setDetailsProduct],
            functionsContext: [getItem, handleDetails, addToCart, increment, decrement, removeItem, addTotals, addToWishlist, removeFromWishlist, clearCart],
            cartContext: [cart, setCart],
            wishlistContext: [wishlist, setWishlist],
            showAddedItemModal: [showAddModal, setShowAddModal],
            showAddedItemModalWishlist: [showAddModalWishlist, setShowAddModalWishlist],
            chooseSizeContext: [chooseSize, setChooseSize],
            sizeContext: [whatSize, setWhatSize],
            location: location
            }}>
            {props.children}    
        </GlobalContext.Provider>
    )
}
