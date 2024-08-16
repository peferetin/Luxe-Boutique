import axios from 'axios';
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useParams } from 'react-router-dom';

const OrderDetails = () => {

    const [orderDetails, setOrderDetails] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const { orderId } = useParams();

    const fetchOrderDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/orders/${orderId}`);
            setOrderDetails(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrderDetails();
    }, [orderId]);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error</h1>;
    console.log(orderDetails);

    return (
        <>
            <div>
                <div style={{ padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '10px' }}>
                    <h3 style={{ margin: '0' }}>Order ID: {orderDetails._id}</h3>
                    <p style={{ margin: '0', color: '#424770' }}>Amount: ${orderDetails.totalPrice}</p>
                    <p style={{ margin: '0', color: '#424770' }}>Status: {orderDetails.status}</p>
                </div>
            </div>
            {orderDetails.products.map((product) => (
                <div key={product._id} style={{ padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '10px' }}>
                    <h3 style={{ margin: '0' }}>Product ID: {product._id}</h3>
                    <p style={{ margin: '0', color: '#424770' }}>Name: {product.name}</p>
                    <p style={{ margin: '0', color: '#424770' }}>Price: ${product.price}</p>
                </div>
            ))}

        </>

    );

}
export default OrderDetails;