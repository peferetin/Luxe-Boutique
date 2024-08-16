
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
                return (
                    <ul>
                        <li>{localStorage.getItem(product)}</li>
                    </ul>
                )
            })}
        </>
    )
}

export default WishList