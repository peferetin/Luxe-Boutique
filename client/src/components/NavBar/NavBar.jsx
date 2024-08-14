

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileMenu from "../NavBar/ProfileMenu.jsx";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

const NavBar = () => {
    let navigate = useNavigate();
    const { cart } = useCart();
    console.log(cart);

    return (

        <header className="flex justify-between px-10 py-3 border-b border-gray-700 bg-gray-800 text-white w-full">
            <div style={{ cursor: 'pointer' }} onClick={() => navigate('/')} className="flex gap-4 my-auto text-lg font-bold leading-6">
                <div>Luxe Boutique</div>
            </div>
            <nav className="flex flex-1 gap-5 pl-20 justify-around">
                <div className="flex gap-5 justify-between py-2.5 text-sm font-medium leading-5 whitespace-nowrap ml-28">
                    <Link to="/categories" className="hover:text-gray-300">Categories</Link>
                    <Link to="/contact" className="hover:text-gray-300">Contact</Link>
                </div>
                {/* <div className="flex gap-2">
                    <button onClick={() => navigate('/')} className="px-4 py-2.5 text-sm font-bold leading-5 text-center bg-blue-600 hover:bg-blue-500 rounded-xl text-white">
                        Shop Now
                    </button>
                    <div className="flex flex-col justify-center items-center p-2.5 w-10 h-10 rounded-xl bg-blue-600 hover:bg-blue-500">
                        <Link to='/wish-list'>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a90a00d6146e26ae98a2dd8e92d5cbe9cdd272d33a878f88e8f43efe16cd1d92?apiKey=cb130a580d494b2d8274b3edb32534b2&"
                                className="w-5 aspect-square"
                            />
                        </Link>
                    </div>
                </div> */}

                <Link className="flex" to='/carts'>
                    <div className="flex justify-center items-center mr-10">
                    <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">{cart ? cart.products.length : ''}</p>                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </div>
                </Link>

                <ProfileMenu />
            </nav>
        </header>


    );
};

export default NavBar;
