import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const url = 'http://localhost:3000/users';
    const [data, setData] = useState({
        name: '',
        email: '',
        address: '',
        age: '',
        position: ''
    });
    const navigate = useNavigate();
    const submitHandler = (e) => {
        if (data.name !== '' && data.email !== '' && data.address !== '' && data.age !== '' && data.position !== '') {
            e.preventDefault();
            axios.post(url, data).then((res) => {
                console.log(res.data);
                navigate('/');
            }).catch((err) => console.log(err))
        } else {
            alert('Please Fill The Form first ');
        }

    }


    return (
        <>

            <div className="container mx-auto lg:mt-36 ">
                <form className="max-w-md p-3 shadow bg-white rounded-md mx-auto" onSubmit={submitHandler}>
                    <h5 className='text-left text-2xl mb-3 font-semibold'>Creat New Users </h5>
                    <div className="mb-2">
                        <label htmlFor="text" className="block mb-2 text-left text-sm font-medium text-gray-900 ">Your name</label>
                        <input type="text" onChange={e => setData({ ...data, name: e.target.value })} name='name' id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email" className="block mb-2 text-left text-sm font-medium text-gray-900 ">Your email</label>
                        <input type="email" onChange={e => setData({ ...data, email: e.target.value })} name='email' id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="address" className="block mb-2 text-left text-sm font-medium text-gray-900 ">Your address</label>
                        <input type="address" onChange={e => setData({ ...data, address: e.target.value })} name='address' id="address" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="age" className="block mb-2 text-left text-sm font-medium text-gray-900 ">Your age</label>
                        <input type="age" onChange={e => setData({ ...data, age: e.target.value })} name='age' id="age" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="position" className="block mb-2 text-left text-sm font-medium text-gray-900 ">Your position</label>
                        <input type="position" onChange={e => setData({ ...data, position: e.target.value })} name='position' id="position" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
                    </div>

                    <button type="submit" className="text-white bg-green-600 opacity-80 hover:opacity-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Register new account</button>
                </form>

            </div>
        </>
    )
}

export default Create