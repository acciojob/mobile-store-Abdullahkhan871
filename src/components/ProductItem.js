import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductItem = ({item}) => {
  const navigate = useNavigate();
  return (
    <div>
        <div className="img-box">
            <img src={item.image} />
        </div>
        <div className="content">
            <h4>{item.title}</h4>
            <span>{item.price}</span>
            <button onClick={()=> navigate(`/product/${item.id}`)}>Buy</button>
        </div>
    </div>
  )
}

export default ProductItem