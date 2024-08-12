

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
        <header className="flex justify-between px-10 py-3 border-b border-gray-200 max-md:flex-wrap max-md:px-5 w-full bg-gray-100">
            <div style={{ cursor: 'pointer' }} onClick={() => navigate('/')} className="flex gap-4 my-auto text-lg font-bold leading-6 text-gray-800">
                <div className="flex-1 shrink-0 my-auto h-4" />
                <div>Luxe Boutique</div>
            </div>
            <nav className="flex flex-1 gap-5 pl-20 max-md:flex-wrap justify-around">
                <div className="flex gap-5 justify-between py-2.5 text-sm font-medium leading-5 whitespace-nowrap text-gray-800">
                    <Link to="/categories" className="hover:text-gray-600">Categories</Link>
                    <Link to="/contact" className="hover:text-gray-600">Contact</Link>
                    {/* <Link to="/sale" className="hover:text-gray-600">Sales</Link> */}
                </div>
                <div className="flex gap-2">
                    <button onClick={() => navigate('/')} className="px-4 py-2.5 text-sm font-bold leading-5 text-center bg-gray-200 hover:bg-gray-300 rounded-xl text-ellipsis text-gray-800">
                        Shop Now
                    </button>
                    <div className="flex flex-col justify-center items-center p-2.5 w-10 h-10 rounded-xl bg-slate-200 hover:bg-slate-300">
                        <Link to='/wish-list'>
                            <div className="flex justify-center items-center">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a90a00d6146e26ae98a2dd8e92d5cbe9cdd272d33a878f88e8f43efe16cd1d92?apiKey=cb130a580d494b2d8274b3edb32534b2&"
                                    className="w-5 aspect-square"
                                />
                            </div>
                        </Link>
                    </div>
                </div>
                <Link to='/carts'>
                    <div className=" bg-gray-100 flex justify-center items-center">
                        <div className="">
                            <div className=" ">
                                <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">{cart.products && cart.products.length}</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="file:h-5 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </div>
                    </div>
                </Link>
                <div className="">

                    <ProfileMenu />
                </div>

            </nav>
        </header>
    );
};

export default NavBar;
