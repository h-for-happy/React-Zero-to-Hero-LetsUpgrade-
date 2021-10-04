import React from 'react';
import './Styles/Product.css'

function Product() {
    const products = [
        {
            product_name:"MEN'S JACKET",
            product_image_url: "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png",
            product_descp : "In hac habitasse platea dictumst. Quisque diam nulla, tempor ac pretium sed, fringilla vitae urna. Maecenas auctor dignissim tristique. Donec rutrum urna sit amet ante blandit feugiat. Sed a tincidunt felis. Etiam nulla quam, tincidunt in dignissim eu, molestie sed orci. Nulla facilisis dui sed arcu sodales tincidunt. Etiam in arcu ligula. "
         },
         {
            product_name:"WOMEN'S JACKET",
            product_image_url:"http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-better-than-naked-jacket-AVKL_NN4_hero.png",
            product_descp: "In hac habitasse platea dictumst. Quisque diam nulla, tempor ac pretium sed, fringilla vitae urna. Maecenas auctor dignissim tristique. Donec rutrum urna sit amet ante blandit feugiat. Sed a tincidunt felis. Etiam nulla quam, tincidunt in dignissim eu, molestie sed orci. Nulla facilisis dui sed arcu sodales tincidunt. Etiam in arcu ligula. "
           
         },
         {
            product_name:"WOMEN'S SINGLE-TRACK SHOE",
            product_image_url:"http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-single-track-shoe-ALQF_JM3_hero.png",
            product_descp: "In hac habitasse platea dictumst. Quisque diam nulla, tempor ac pretium sed, fringilla vitae urna. Maecenas auctor dignissim tristique. Donec rutrum urna sit amet ante blandit feugiat. Sed a tincidunt felis. Etiam nulla quam, tincidunt in dignissim eu, molestie sed orci. Nulla facilisis dui sed arcu sodales tincidunt. Etiam in arcu ligula. "
           
         },
         {
            product_name:"Enduro Boa Hydration Pack",
            product_image_url:"http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/enduro-boa-hydration-pack-AJQZ_JK3_hero.png",
            product_descp: "In hac habitasse platea dictumst. Quisque diam nulla, tempor ac pretium sed, fringilla vitae urna. Maecenas auctor dignissim tristique. Donec rutrum urna sit amet ante blandit feugiat. Sed a tincidunt felis. Etiam nulla quam, tincidunt in dignissim eu, molestie sed orci. Nulla facilisis dui sed arcu sodales tincidunt. Etiam in arcu ligula."
            
         },
         {
            product_name:"MEN'S JACKET",
            product_image_url:"http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png",
            product_descp: "In hac habitasse platea dictumst. Quisque diam nulla, tempor ac pretium sed, fringilla vitae urna. Maecenas auctor dignissim tristique. Donec rutrum urna sit amet ante blandit feugiat. Sed a tincidunt felis. Etiam nulla quam, tincidunt in dignissim eu, molestie sed orci. Nulla facilisis dui sed arcu sodales tincidunt. Etiam in arcu ligula."
           
         }
        
        ];

    return (
        <div className="Products">
            <h1>
                Products
            </h1>
            <div className="cards">
            {
                products.map((product,index)=>(
                    <div className="card" key={index}>
                        <div className="cardImg"><img src={product.product_image_url}/></div>
                        <div className="cardContent">
                            <h3>{product.product_name}</h3>
                            <p>{product.product_descp}</p>
                        </div>
                        <button className="btn">Buy Now</button>
                    </div>
                ))
            };
            </div>
        </div>
    )
}

export default Product
