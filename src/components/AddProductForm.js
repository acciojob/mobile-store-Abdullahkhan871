import React, { useContext, useRef, useState } from 'react'
import ProductContext from '../context/ProductContext';

const AddProductForm = () => {
    const [id, setId] = useState(1);
    const {allProduct, dispatchAllProduct} = useContext(ProductContext);
    const productData = useRef({title : "", description : "", image : "",price : ""});
    
    function handleProductData(e){
        e.preventDefault();

        const {title, description, image, price} = productData.current;


        if(!(title.trim() && description.trim() && image.trim() && price.trim())){
            alert("Please fill all inputs")
            return;
        }
        else if(!Number(price)){
            alert("Price must be a number")
            return;
        }
        setId((pre)=> pre+1);
        dispatchAllProduct({
            type : "add",
            item : {id,title, description, image, price}
        })

        productData.current = {title : "", description : "", image : "",price : ""}
        e.target.reset();
    }   
  return (
    <form onSubmit={handleProductData}>
        <label htmlFor='title'> 
            Title
            <input id='title' placeholder='title' onChange={(e)=> productData.current.title = e.target.value}/>
        </label>
        <label htmlFor='description'> 
            Description
            <textarea id='description' placeholder='Description' onChange={(e)=> productData.current.description = e.target.value}/>
        </label>
        <label htmlFor='image'> 
            Image
            <input id='image' placeholder='image' onChange={(e)=> productData.current.image = e.target.value}/>
        </label>
        <label htmlFor='price'> 
            Price
            <input id='price' placeholder='price' onChange={(e)=> productData.current.price = e.target.value}/>
        </label>
        <button type='reset'>Delete</button>
        <button type='submit'>Save</button>
    </form>
  )
}

export default AddProductForm