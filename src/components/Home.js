import React, { useContext } from 'react'
import AddProductForm from './AddProductForm'
import ProductContext from '../context/ProductContext'
import EditProductForm from './EditProductForm'
import ProductItem from './ProductItem'

const Home = () => {

  const {allProduct, dispatchAllProduct} = useContext(ProductContext)

 
  return (
    <div className='products'>
      {
        allProduct.products.length > 0 && (
          <>
          {
            allProduct.products.map(list => <ProductItem key={list.id} item={list}/>)
          }
          </>
        )
      }
    </div>
  )
}

export default Home