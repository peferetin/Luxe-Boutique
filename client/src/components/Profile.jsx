import { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth } from '../context/AuthContext.jsx'
import { useNavigate } from 'react-router-dom'


const Profile = () => {
    const { userData } = useAuth()
    let navigate = useNavigate()

    const [user, setUser] = useState({
        email: '',
        address: {
            name: '',
            lastName: '',
            street: {
                addressLine1: '',
                number: ''
            },
            city: '',
            postalCode: '',
        }
    })

    const getUserById = async () => {
        console.log('Hello')
        try {
            const response = await axios.get(`http://localhost:8000/api/users/${userData._id}`)
            setUser(response.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleChange = (e) => {
        console.log(e)
        setUser({ ...user, [e.target.name]: e.target.value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.put(`http://localhost:8000/api/users/${userData._id}`, { user })
            if (response.data) {
                alert('User info has been updated')
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (!userData) {
            navigate('/')
        } else {
            getUserById()
        }
    }, [])


    return (
        <>
            {userData && user.address && (

                <form onSubmit={handleSubmit} className='max-w-lg ml-6'>
                    <div className="space-y-12 ">


                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Profile Menu : {userData && userData.email}</h2>
                            <div className="sm:col-span-3">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={user.email}
                                        onChange={handleChange}
                                        type="text"
                                        name="email"
                                        id="email"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>


                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                        First name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            value={user.address.name}
                                            onChange={handleChange}
                                            type="text"
                                            name="name"
                                            id="name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Last name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            value={user.address.lastName}
                                            onChange={handleChange}
                                            type="text"
                                            name="lastName"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>




                                <div className="col-span-full">
                                    <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                        Street address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            value={user.address.street.addressLine1}
                                            onChange={(e) => {
                                                setAddress({
                                                    ...user, street: {
                                                        ...user.address.street,
                                                        addressLine1: e.target.value
                                                    }
                                                })
                                            }}
                                            type="text"
                                            name="street"
                                            id="street-address"
                                            autoComplete="street-address"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                        Street address Number
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            value={user.address.street.number}
                                            onChange={(e) => {
                                                setAddress({
                                                    ...user, street: {
                                                        ...user.address.street,
                                                        number: e.target.value
                                                    }
                                                })
                                            }}
                                            type="text"
                                            name="street-1"
                                            id="street-address"
                                            autoComplete="street-address"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2 sm:col-start-1">
                                    <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                        City
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            value={user.address.city}
                                            onChange={handleChange}
                                            type="text"
                                            name="city"
                                            id="city"
                                            autoComplete="address-level2"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>



                                <div className="sm:col-span-2">
                                    <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                        ZIP / Postal code
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            value={user.address.postalCode}
                                            onChange={handleChange}
                                            type="text"
                                            name="postalCode"
                                            id="postal-code"
                                            autoComplete="postal-code"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Update User Information
                        </button>
                    </div>
                </form>
            )

            }
        </>
    )

}
export default Profile;
