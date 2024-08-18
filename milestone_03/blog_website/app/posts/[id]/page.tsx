'use client'
import React from "react";
import { useEffect, useState } from "react";

const page = ({params}:any) => {
    console.log(params)
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the API route
    fetch("/api/posts")
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setData(data[0]); // Set the first post's data
        }
      });
  }, []);


  return <div>Post 1</div>;
};

export default page;
