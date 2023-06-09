import React, { createContext, useState, useEffect, useReducer } from "react";
import { CardComponent } from "../components/CardComponent";
import CheckoutModal from "../components/CheckoutForm";

const MyContext = createContext()

const MyContextProvider = ({children}) => {
    const [data, setData] = useState([]);
    //const [cart, dispatch] = useReducer(cartReducer, [])
    const [cart, setCart] = useState([]);
    const [isModal, setIsModal] = useState([]);
  
    useEffect(() => {
      fetch("https://course-api.com/javascript-store-products")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.log('error', error)
        });
    }, []);
    console.log(data)
   

    const updateData = (newData) => {
      setData(newData);
    };

  const toggleModal = () => {
    setIsModal(!isModal)
  }

  // 'const cartReducer = (state, action) => {
    
  //   switch(action.type) {
  //     case 'add':
  //       return [...cart, action.payload];
  //     case 'remove': 
  //     return state.filter(item => item.id !== action.payload.id)
  //   }
  // }'
    const addToCart = (item) => {
        setCart([...cart, item]);
     console.log(cart, 'this is cart')
      };
    
    const removeFromCart = (itemId) => {
      setCart(cart.filter((item) => item?.fields?.id !== itemId))
    }

   
    return(
        <MyContext.Provider value={{data, addToCart,updateData, cart, removeFromCart, toggleModal}}>
            {children}
        </MyContext.Provider>
    );
};

export { MyContext, MyContextProvider };