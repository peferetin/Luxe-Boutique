
import React from "react";
import ProductCard from "../components/ProductCard.jsx";


const WishList = () => {
    let products = Object.keys(localStorage);


    return (
        <>
            <h1>Welcome to the wish list</h1>
            {products.map(product => {
                let productData;
                try {
                    // Get the item from localStorage and parse it as JSON
                    const item = localStorage.getItem(product);
                    productData = JSON.parse(item);
                } catch (e) {
                    console.error(`Error parsing JSON for product ${product}:`, e);
                    return null; // Skip this product if JSON parsing fails
                }

                // Assuming productData has properties 'name' and 'image'
                return (

                    // <ul key={product}>
                    //     <li>{productData.name}</li> {/* Display the product name */}
                    //     <li>
                    //         <img src={productData.image} alt={productData.name} /> {/* Display the product image */}
                    //     </li>
                    // </ul>

                    <div>
                        <ProductCard {...productData} key={product} />
                    </div>
                );
            })}
        </>
    );
};

export default WishList;


// const WishList = () => {
//     let products = Object.keys(localStorage)
//     return (
//         <>
//             <h1>Welcome to the wish list</h1>
//             {products.map(product => {
//                 const productData = JSON.parse(localStorage.getItem(product));
//                 return (
//                     <ul key={product}>
//                         <li>{productData.name}</li>
//                         <li>
//                             <img src={productData.image} alt={productData.name} />
//                         </li>
//                     </ul>
//                 )
//             })}
//         </>
//     )
// }
// export default WishList