// import {useState, useEffect} from "react";

// function useCurrencyInfo(currency) {

//     const [data, setData] = useState({});
//     useEffect(() => {
//         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//         .then((res) => res.json())
//         .then((res) => setData(res[currency]));

//         console.log(data);

//     }, [currency])

//     console.log(data)
//     return data;
// }


// export default useCurrencyInfo;



import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;





// import { useState, useEffect } from "react";

// function useCurrencyInfo(currency) {
//     const [data, setData] = useState({});
//     let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`


//     useEffect(() => {
//         fetch(url)
//             .then((res) => {
//                 if (!res.ok) {
//                     throw new Error('Failed to fetch currency data');
//                 }
//                 return res.json();
//             })
//             .then((res) => {
//                 setData(res[currency]);
//                 console.log(res[currency]); // Log the currency data
//             })
//             .catch((error) => {
//                 console.error('Error fetching currency data:', error);
//             });
//     }, [currency]);

//     return data;
// }

// export default useCurrencyInfo;
