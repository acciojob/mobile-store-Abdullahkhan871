import React, { useReducer } from 'react'
import ProductContext from './ProductContext'


const initialState = {
  type: null,
  products : []
}

function reducer(state, action){

  switch (action.type){
    case "add" :
    return {
      ...state,
      products : modify(state, action)
    }

    case "edit" :
      return {
      ...state,
      products : state.products.map(list => list.id == action.item.id ? action.item : list)
    }

    case "delete" :
      return {
        ...state,
        products : state.products.filter(list => list.id != action.item.id)
      }
    default :
    return state
  }
}

function modify(state, action){
        const elementExist = state.products.find(list => list.id == action.item.id)
        console.log(elementExist)
        if(elementExist){
          console.log("if")
          return state.products.map(list => list.id == action.item.id ? action.item : list)
        }else {
          console.log("else")
          return [...state.products, action.item]
        }
}
const ProductContextProvider = ({children}) => {
  const [allProduct, dispatchAllProduct] = useReducer(reducer,initialState)

  console.log(allProduct)

  return (
    <ProductContext.Provider value={{allProduct, dispatchAllProduct}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider