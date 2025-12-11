import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useParam, UseSearchParams } from 'react-router-dom';

const getData = (url) => {
    return axios
        .get(url)
        .then((res) => res)
        .catch((err) => err);
};

export const SingleUserPage = () => {
    const [data, setData] = useState({});
    console.log('~ data:', data);
    const { productID } = useParams();
    const api = 'https://fakestoreapi.com/products/${productID}';

    useEffect(() =>{
        getData(api)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, [productID]);

    return(
        <div>
            {
                
            }
        </div>
    )
}