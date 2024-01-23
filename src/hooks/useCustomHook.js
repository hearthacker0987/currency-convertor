// import { useEffect, useState } from "react";

// function useCustomHook(currency){

//     const [data,setData] = useState({})
//     let URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

//     useEffect(()=>{
//         fetch(URL)
//         .then((res) => res.json())
//         .then((res) => setData(res[currency]))
//         .catch((error)=>{
//             console.log(error);
//         })
//         console.log(data);

//     },[currency])


//     return data;
// }

// export default useCustomHook;


import React, { useEffect, useState } from 'react'

function useCustomHook(currency) {
    const [data,setData] = useState({})
    const URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
    
    useEffect(()=>{
        fetch(URL)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        .catch((error) => {
            console.log(error)
        })
    },[currency])

    return data;
}

export default useCustomHook
