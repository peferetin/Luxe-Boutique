
// import React from "react";
// import SearchBar from "../components/SearchBar";

// const HeroSection = () => {
//     return (
//         <section className="flex overflow-hidden relative flex-col justify-end items-start px-16 pt-20 pb-6 mt-9 w-full rounded-xl  min-h-[480px] max-md:px-5 max-md:max-w-full">
//             <img
//                 loading="lazy"
//                 src='https://img.freepik.com/premium-photo/exclusive-fashion-boutique-luxury-apparel-affluent-shopper_890960-1009.jpg'
//                 alt="Luxury shop background"
//                 className="object-cover absolute inset-0 size-full"
//             />
//             <h1 className="relative mt-48 text-5xl font-black tracking-tighter text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
//                 Discover Luxury Fashion
//             </h1>
//             <p className="relative mt-2 text-base leading-6 text-white max-md:max-w-full">
//                 Explore our curated collection of high-end fashion and accessories
//             </p>
//             <SearchBar />
//         </section>
//     );
// };

// export default HeroSection;

// import React from "react";
// import SearchBar from "../components/SearchBar";

// const HeroSection = () => {
//     return (
//         <>

//             <section className="flex overflow-hidden relative flex-col justify-end items-start px-16 pt-20 pb-6 mt-9 w-full rounded-xl min-h-[480px] max-md:px-5 max-md:max-w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">

//                 <div className="absolute inset-0 z-0">
//                     <img
//                         loading="lazy"
//                         src='https://img.freepik.com/premium-photo/exclusive-fashion-boutique-luxury-apparel-affluent-shopper_890960-1009.jpg'
//                         alt="Luxury shop background"
//                         className="object-cover w-full h-full"
//                     />
//                     <div className="absolute inset-0 bg-black opacity-50"></div> {/* Gradient overlay */}
//                 </div>
//                 <SearchBar />
//                 <div className="z-10">
//                     <h1 className="relative mt-48 text-5xl font-black tracking-tighter text-white shadow-lg max-md:mt-10 max-md:max-w-full max-md:text-4xl">
//                         Discover Luxury Fashion
//                     </h1>
//                     <p className="relative mt-2 text-base leading-6 text-white shadow max-md:max-w-full">
//                         Explore our curated collection of high-end fashion and accessories
//                     </p>

//                 </div>
//             </section>
//         </>
//     );
// };

// export default HeroSection;

// import React from "react";
// import SearchBar from "../components/SearchBar";

// const HeroSection = () => {
//     return (
//         <section className="relative flex items-center justify-center min-h-screen bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581404917879-53e19259fdda?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
//             <div className="absolute inset-0 bg-gray-900 opacity-75"></div> {/* Dark overlay */}
//             <div className="z-10 p-5 text-center">
//                 <h1 className="mb-4 text-6xl font-bold text-white md:text-8xl">
//                     Elegance Redefined
//                 </h1>
//                 <p className="mb-6 text-lg text-gray-300">
//                     Immerse yourself in a world where fashion meets sophistication.
//                 </p>
//                 <SearchBar />
//             </div>
//         </section>
//     );
// };

// export default HeroSection;
import React from "react";
import SearchBar from "../components/SearchBar";

const HeroSection = () => {
    return (
        <section className="relative flex items-center justify-center h-96 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581404917879-53e19259fdda?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
            <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            <div className="z-10 p-4 text-center">
                <h1 className="mb-2 text-4xl font-bold text-white sm:text-5xl">
                    Elegance Redefined
                </h1>
                <p className="mb-4 text-sm text-gray-300 sm:text-base">
                    Immerse in sophistication.
                </p>
                <SearchBar />
            </div>
        </section>
    );
};

export default HeroSection;