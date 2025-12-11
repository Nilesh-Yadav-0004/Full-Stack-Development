import React from 'react';
import { Link, useParams } from 'react-router-dom';

const getData = (url) => {
    return fetch(url, {
        headers: {
            'x-api-key': 'reqres_d6f2e92796c14bb291d4c4d359904514',
        },
    })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const SinglePage = () => {
    const params = useParams();
    const [singleUserData, setSingleUseData] = React.useState({});
    console.log('useParam hook', params);

    React.useEffect((
        
    ))
}