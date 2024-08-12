import React, { useState } from 'react';

const Dresses = () => {
    const [dresses] = useState([
        { id: 1, name: 'Summer Floral Dress', image: 'https://example.com/summer-floral.jpg', price: '$39.99' },
        { id: 2, name: 'Evening Gown', image: 'https://example.com/evening-gown.jpg', price: '$89.99' },
        { id: 3, name: 'Casual Beach Dress', image: 'https://example.com/casual-beach.jpg', price: '$29.99' },
    ]);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-center mb-4">Dresses</h1>
            <p className="text-center mb-8">Discover our exclusive sales and offers.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {dresses.map((dress) => (
                    <div key={dress.id} className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src={dress.image} alt={dress.name} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{dress.name}</div>
                            <p className="text-gray-700 text-base">{dress.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dresses;