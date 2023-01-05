import React from "react";

const defaultTodos = [
    { text: 'Estudiar Para Calculo',completed:true },
    { text: 'Estudiar Para Algebra Lineal',completed:false },
    { text: 'Suma de cartas con spreed operator', completed:false},
    { text:'Agregar eliminar objeto en el carrito de compras',completed:false },
    { text:'comprar blog para ejercicios', completed:false },
    { text: 'demostraciones cociente producto (Calculo)', completed:false}
  ]
  
  function useLocalStorage(ItemName) {
    const [error,setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState([]);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(ItemName);
          let parsedItem;
  
  
          if (!localStorageItem){
  
            localStorage.setItem(ItemName, JSON.stringify([]));
            parsedItem = [];
          }else {
  
            parsedItem = JSON.parse(localStorageItem);
          } 
          setItem(parsedItem);
          setLoading(false);
        } catch (error) {
          setError(true);
        }
      }, 1000);
    }),[];
    
  
    
  
  
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(ItemName,stringifiedItem);
        setItem(newItem);
      } catch (error) {
        setError(true)
      }
    }
  
    return {item,saveItem,loading,error};
  }
export { useLocalStorage }  