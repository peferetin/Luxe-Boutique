import React, { useState } from 'react';

const Handbags = () => {
    const [handbags] = useState([
        { id: 1, name: 'Classic Leather Tote', image: 'https://example.com/classic-tote.jpg', price: '$49.99' },
        { id: 2, name: 'Stylish Satchel', image: 'https://example.com/stylish-satchel.jpg', price: '$59.99' },
        { id: 3, name: 'Trendy Crossbody Bag', image: 'https://example.com/trendy-crossbody.jpg', price: '$39.99' },
    ]);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-center mb-4">Handbags</h1>
            <p className="text-center mb-8">Browse our latest collections.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {handbags.map((handbag) => (
                    <div key={handbag.id} className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src={handbag.image} alt={handbag.name} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{handbag.name}</div>
                            <p className="text-gray-700 text-base">{handbag.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Handbags;