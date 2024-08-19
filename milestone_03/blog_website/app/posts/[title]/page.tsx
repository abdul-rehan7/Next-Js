import React from "react";

export default async function Page({ params }) {
  const { title } = params;
  const fetchData = await fetch(`http://localhost:3000/api/posts/${title}`);
  const res = await fetchData.json();

  console.log("API Response:", res);

  return (
    <div className="bg-green-500 h-screen p-4">
      <h1>{res}</h1>
    </div>
  );
}
