import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Read = () => {
    const [data, setData] = useState([]);

    const { id } = useParams();
    useEffect(() => {
        axios.get('http://localhost:3000/users/' + id).then(res => setData(res.data)).catch(err => console.log(err))
    }, [])

    return (
        <div className="container mx-auto mt-36">
            <div className="max-w-md mx-auto shadow-md rounded-md p-5 bg-white">
                <div className='mb-3'>
                    <Link to='/'>
                        <button className='bg-black text-white p-1 rounded-md w-16'>
                            Back
                        </button></Link>
                </div>
                <div className='text-left'>
                    <div className='flex gap-3 justify-between items-center mb-3'>
                        <h3 className='text-2xl font-semibold'>Name :{data.name} </h3>
                        <h4 className='text-lg font-semibold'>Age : {data.age}</h4>
                    </div>
                    <div className='text-slate-400'>
                        <h5>Email : {data.email}</h5>
                        <h5>Address :{data.address}</h5>
                        <h5>Position : {data.position} </h5>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Read