import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios'

const Product = (props) => {
    const { id } = useParams();
    const [Product, setProduct] = useState({})

    useEffect(() => {
        axios.get('http://localhost:8000/products/' + id)
            .then((res) => {
                setProduct(res.data.Product)
            })
    },[])

    


}