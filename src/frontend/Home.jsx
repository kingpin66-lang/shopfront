import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Home() {
    let [data, setData] = useState([])
    let fetchCat = async () => {
        let res = await axios.get("https://shop1-8zlk.onrender.com/categories"
        )
        setData(res.data)
    }
    useEffect(() => {
        fetchCat()
    }, [])
    return (
        <>
            <div className="container text-center mx-auto">
                <h1>MY SHOP</h1>
                {data.map((a) => (
                    <h2 key={a._id}>{a.name}</h2>
                ))}
            </div>
        </>
    )
}

export default Home
