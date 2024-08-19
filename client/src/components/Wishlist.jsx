
// const WishList = () => {

//     let products = Object.keys(localStorage)

//     return (
//         <>
//             <h1>Welcome to the wish list</h1>
//             {products.map(product => {
//                 return (
//                     <ul>
//                         <li>{localStorage.getItem(product)}</li>
//                     </ul>
//                 )
//             })}
//         </>
//     )
// }

// export default WishList


const WishList = () => {

    let products = Object.keys(localStorage)
    return (
        <>
        <h1>Welcome to the wish list</h1>
        {products.map(product => {
            // Get the item from localStorage and parse it as JSON
            const productData = JSON.parse(localStorage.getItem(product));

            // Assuming productData has properties 'name' and 'imageURL'
            return (
                <ul key={product}>
                    <li>{productData.name}</li> {/* Display the product name */}
                    <li>
                        <img src={productData.image} alt={productData.name} />
                    </li> {/* Display the product image */}
                </ul>
            )
        })}
    </>
    )
}

export default WishList