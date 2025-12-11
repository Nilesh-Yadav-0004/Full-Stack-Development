import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { AuthContext } from './../Context/AuthContext';

const getData = (url) => {
    return fetch(url, {
        headers: {
            "x-api-key": "reqres_d6f2e92796c14bb291d4c4d359904514"
        }
    }).then((res) => res.json()).catch((err) => console.log(err));
}

const getCurrentPageFromUrl = (value) => {
    value = Number(value);

    if (typeof value === "number" && value <= 0) value = 1;

    if (!value) value = 1;

    return value;
}

export const User = () => {
    const [data, setData] = React.useState([]);
    const { toggelAuth } = React.useContext(AuthContext);
    const [SearchParams]
}