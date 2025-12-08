import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { contextCreated } from '../Context/CreateComponentsContext';

const fetchData = (URL) => {
    return axios
     .get(URL)
     .then((res) => {
        return res.data;
     })
     .catch((err) =>{
        return [null, err];
     });
};
export const ApiCall = () => {
    const { data,setData } = useContext(contextCreated);
    console.log('~ data:', data);
    
}