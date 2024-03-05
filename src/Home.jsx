import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Create from './CRUD/Create';

const Home = () => {
    const [data, setData] = useState([]);
    const url = 'http://localhost:3000/users';
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(url).then(res => setData(res.data)).catch(err => console.log(err))
    }, []);
    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure you want to Delete ?');
        if (confirm) {
            axios.delete('http://localhost:3000/users/' + id).then((res) => {
                location.reload();
                console.log(res.data);
            }).Create((err) => console.log(err))
        }
    }
    return (

        <>
            <div className="container mx-auto mt-5">

                <div className='flex items-center justify-between md:mb-3 lg:mb-3'>
                    <div>
                        <h3 className='text-3xl font-semibold font-mono'>List</h3>
                    </div>
                    <div>
                        <Link to="/create" className='p-2 bg-blue-400 text-white max-w-36 rounded-md '>Create List</Link>
                    </div>
                </div>

                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Id
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Address
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Age
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Position
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((d, i) =>
                                <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {d.id}
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {d.name}
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {d.email}
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {d.address}
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {d.age}
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {d.position}
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <div className='flex gap-3 '>
                                            <Link to={`/read/${d.id}`} className='bg-blue-400 p-1 rounded-md '>Read</Link>
                                            <Link to={`/update/${d.id}`} className='bg-green-400 p-1 rounded-md '>Update</Link>
                                            <button onClick={e => handleDelete(d.id)} className='bg-red-400 p-1 rounded-md '>Delete</button>
                                        </div>
                                    </th>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )

}

export default Home