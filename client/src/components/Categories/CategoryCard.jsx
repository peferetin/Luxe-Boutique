
// const CategoryCard = ({ name, description, image }) => {
//     return (
//         <div className="bg-gradient-to-r from-blue-500 to-purple-600 m-2 text-center rounded-lg p-4 max-w-md shadow-lg">
//             <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
//             <div className="p-4">
//                 <li className="flex list-none py-2 my-2 font-bold justify-center items-center text-white"> {name}</li>
//                 <p className="font-light text-white">{description}</p>
//             </div>
//         </div>
//     )
// }

// export default CategoryCard


const CategoryCard = ({ name, description, image }) => {
    return (
        <div className="border border-gray-200 p-4 rounded-lg shadow hover:shadow-md transition duration-300">
            {/* <div className="bg-gray-800 m-2 text-center rounded-lg p-4 max-w-md shadow-lg"> */}
            <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
                <li className="flex list-none py-2 my-2 font-bold justify-center items-center text-white"> {name}</li>
                <p className="font-light text-gray-300">{description}</p>
            </div>
        </div>
    )
}

export default CategoryCard