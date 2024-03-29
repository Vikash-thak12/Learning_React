// import React from 'react';

// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {

    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Vikash-thak12')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])
  return (
    <>
    <div className="bg-gray-600 text-center text-white text-3xl p-5"> Github Followers: {data.followers} 
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
    </>
  );
};

export default Github;

export const GithubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Vikash-thak12')
    return response.json();
}