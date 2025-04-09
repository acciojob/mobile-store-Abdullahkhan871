import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductContext from '../context/ProductContext';

const ProductPage = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const {allProduct, dispatchAllProduct} = useContext(ProductContext)


  console.log(id)

  const product = allProduct.products.find((item)=> item.id == id)
  console.log(product)


  if(!product) return <p>not found Product</p>

  return (
    <div>
                <div className="img-box">
                    <img src={product.image} />
                </div>
                <div className="content">
                    <h4>{product.title}</h4>
                    <p className="color">Black</p>
                    <span>{product.price}</span>
                    <button onClick={()=> navigate("/")}>Other Product</button>
                </div>
            </div>
  )
}

export default ProductPage

