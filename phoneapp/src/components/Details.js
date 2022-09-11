import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
export default function Details() {
    let [product, setProduct] = useState(null);
    let {id} = useParams();
  
    useEffect( () => {
      console.log(id);
      axios.get(`http://localhost:1234/products/${id}`).then(response => {
        setProduct(response.data);
      })
     }, [id]);
  
     return (
      <div>
        <h1>
            Product Details
        </h1>
        {
          product? <div>
                Title : {product.title} <br />
                Info : {product.info}
            </div> : <p> No Product!!! </p> 
        }
        </div>
    )
  
}
