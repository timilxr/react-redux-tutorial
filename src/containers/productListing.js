import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import axios from 'axios';
import ProductComponent from './productComponent';

const ProductListing = () => {
    const products = useSelector(state=>state);
    const dispatch = useDispatch();
    console.log(products);

    const fetchProducts = async () =>{
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch(err=>{
            console.log("Err",err);
        });
        dispatch(setProducts(response.data));
    }

    useEffect(()=>{
        fetchProducts();
    },[fetchProducts]);

    console.log("products", products);
    return(
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListing;