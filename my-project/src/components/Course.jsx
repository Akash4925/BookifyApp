import React, { useEffect, useState } from 'react';
import Cards from "./Cards";
// import list from "../../public/list.json";
import axios from "axios";
import {Link} from "react-router-dom";

function Course() {
    const [book,setBook]=useState([])
    useEffect(()=>{
        const getBook=async()=>{
            try {
               const res = await axios.get("http://localhost:4001/book");
               console.log(res.data)
               setBook(res.data)
            } catch (error) {
                console.log(error)
            }
        };
        getBook();
    },[]);
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-10 px-4 mt-[4rem]'>
                <div className='mt-28 item-center justify-centre text-center'>
                    <h1 className='text-2xl md:text-4xl'> We're delighted to have you
                        <span className='text-pink-500'> Here! :)</span>
                    </h1>
                    <p className='mt-11'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est obcaecati molestiae quos! Deserunt cupiditate sequi totam assumenda quod minus dolorem dolor, itaque cumque quaerat impedit nulla odio ipsa ratione vel consequatur nostrum alias dolore beatae possimus? Odit, optio perspiciatis doloremque libero delectus voluptate, illum facere animi, quis maxime ex.
                    </p>
                    <Link to="/">
                    <button className=' mt-4 bg-pink-500 text-white px-3 py-2 rounded-md hover:bg-pink-700 duration-300'>Back    
                    </button>
                    </Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                    {
                        book.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Course