import React, { createContext,useState, useEffect} from 'react'


const Context = createContext()
const api = ("http://localhost:3000/products") 
const ContextProvider = ({children}) => {
    const [array, setArray] = useState([]);
    
    const getProduct = async () => {
        const res = await fetch(api);
        const data = await res.json();
        setArray(data);
      };
      useEffect(() => {
        getProduct();
      }, []);
      
     
    
      const goTop = () =>{
        window.scrollTo({top:0,left:0,behavior:'smooth'})
    }
 
  
      
     
    return(
        <Context.Provider value={{array,goTop}}>
            {children}
        </Context.Provider>
    )
}

export {Context,ContextProvider};