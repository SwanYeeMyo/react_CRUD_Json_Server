import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        address: '',
        age: '',
        position: ''
    });
    const { id } = useParams();
    useEffect(() => {
        axios.get('http://localhost:3000/users/' + id).then((res) => setValues(res.data)).catch((err) => console.log(err));
    }, []);
    const navigate = useNavigate();
    const updateHandler = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3000/users/' + id, values).then((res) => {
            console.log(res)
            navigate('/')
        }).catch((err) => console.log(err));

    }
    return (
        <>
            <div className="container mx-auto lg:mt-36 " onSubmit={updateHandler}>
                <form className="max-w-md p-3 shadow bg-white rounded-md mx-auto" >
                    <h5 className='text-left text-2xl mb-3 font-semibold'>Update New Users </h5>
                    <div className="mb-2">
                        <label htmlFor="text" className="block mb-2 text-left text-sm font-medium text-gray-900 ">Your name</label>
                        <input type="text" value={values.name} onChange={e => setValues({ ...values, name: e.target.value })} name='name' id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email" className="block mb-2 text-left text-sm font-medium text-gray-900 ">Your email</label>
                        <input type="email" value={values.email} onChange={e => setValues({ ...values, email: e.target.value })} name='email' id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="address" className="block mb-2 text-left text-sm font-medium text-gray-900 ">Your address</label>
                        <input type="address" value={values.address} onChange={e => setValues({ ...values, address: e.target.value })} name='address' id="address" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="age" className="block mb-2 text-left text-sm font-medium text-gray-900 ">Your age</label>
                        <input type="age" value={values.age} onChange={e => setValues({ ...values, age: e.target.value })} name='age' id="age" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="position" className="block mb-2 text-left text-sm font-medium text-gray-900 ">Your position</label>
                        <input type="position" value={values.position} onChange={e => setValues({ ...values, position: e.target.value })} name='position' id="position" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
                    </div>

                    <button type="submit" className="text-white bg-green-600 opacity-80 hover:opacity-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Update </button>
                </form>

            </div>
        </>
    )
}

export default Update