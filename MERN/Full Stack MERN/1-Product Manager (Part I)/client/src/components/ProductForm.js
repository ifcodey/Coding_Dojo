import React, { useState } from 'react'
import axios from 'axios'

const ProductForm = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/products/new', {
            title,
            description,
            price,
        })
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <h2>The New Products</h2>
            <p>Title &nbsp;
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </p>

            <p>Description &nbsp;
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </p>

            <p>Price &nbsp;
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            </p>

            <input type="sumbit" value="submit" />
        </form>
    )
}
export default ProductForm