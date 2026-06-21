import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

function CategoryAdmin() {
    const [data, setData] = useState([])
    const { register, handleSubmit, reset } = useForm()

    const fetchCategories = async () => {
        const result = await axios.get(
            "https://shop1-8zlk.onrender.com/categories"
        )
        setData(result.data)
    }

    const onSubmit = async (data) => {
        await axios.post(
            "https://shop1-8zlk.onrender.com/categories",
            data
        )
        fetchCategories()
        reset()
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register('name')}
                    placeholder='Enter category name'
                    type="text"
                />

                <button type="submit">
                    Add Category
                </button>
            </form>

            <ul>
                {data.map((item) => (
                    <li key={item._id}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default CategoryAdmin