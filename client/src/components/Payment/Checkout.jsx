import { useState } from 'react'
import axios from 'axios'
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js'
import { useAuth } from '../../context/AuthContext'


const Checkout = () => {
    const { userData } = useAuth()
    const stripe = useStripe()
    const elements = useElements()
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement)

        const { paymentMethod, error } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement
        })
        if (error) {
            console.log(error)
            setError(error)
            return;
        }
        try {
            const response = await axios.post(`http://localhost:8000/api/order`, {
                userId: userData._id,
                paymentMethodId: paymentMethod.id
            })
            if (response.data) {
                setSuccess(true)
            }
        }
        catch (err) {
            setError('Payment failed')
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button type='submit' disabled={!stripe}>
                    Pay
                </button>
            </form>
            {error && <div>{error}</div>}
            {success && <div>Payment successful!</div>}
        </div>
    )
}


export default Checkout