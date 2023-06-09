import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyContext";
import { useParams, Link} from "react-router-dom";


const ProductDetails = ({item}) => {
    const {data,  updateData, addToCart} = useContext(MyContext);
    const id = useParams()
    const fetchData = () => {
        fetch(`https://course-api.com/javascript-store-single-product?id=${id.id}`)
        .then((res) => res.json())
    .then((data) =>  updateData(data))
       
    }

useEffect(() => {
fetchData()
}, [])



    return(
        <div className="singleProduct">
        <img src={data?.fields?.image[0].url}/>
        <div className="productDescription">
        <h2>{ data?.fields?.name}</h2>
        <h5>{ data?.fields?.price}</h5>
        <p>{data?.fields?.colors}</p>
        <p>{ data?.fields?.description}</p>
        <button onClick={()=>addToCart()}>Add to Cart</button>
        </div>
    </div>
)
}

export default ProductDetails; 