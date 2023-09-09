import React from 'react';
import {useLocation} from "react-router-dom";

const PasswordChagne = () => {

    const searchParams = new URLSearchParams(document.location.search)
    console.log(searchParams.get("token"))

    //const term = queryParams.get("term")

    return (
        <div>
            <h1>dddd</h1>
        </div>
    );
};

export default PasswordChagne;