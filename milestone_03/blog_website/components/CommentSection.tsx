"use client";
import React, { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState("");

  const handleAddComment = () => {
    if (!name.trim() || !newComment.trim()) {
      setError("Both name and comment are required!");
      return;
    }

    const commentObject = { name, comment: newComment };
    setComments([...comments, commentObject]);
    setName(""); // Clear the name input after adding
    setNewComment(""); // Clear the comment input after adding
    setError(""); // Clear any existing error message
  };

  return (
    <div className=" flex justify-center items-center bg-gray-100  py-14">
      <div className=" flex flex-col justify-center items-start space-y-2 p-3">
        <h2 className="lg:text-2xl text-xl  font-bold ">Comments</h2>
        <ul className="lg:text-base text-sm">
          {comments.map((comment, index) => (
            <li key={index}>
              <span className="font-bold text-base lg:text-lg ">{comment.name}</span>: {comment.comment}
            </li>
          ))}
        </ul>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="flex flex-col lg:flex-row lg:space-x-2">
          <input
            className="p-2 rounded-md bg-gray-200"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
          <br />
          <input
            className="p-2 rounded-md bg-gray-200"
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment"
          />
        </div>
        <button className="py-2 px-4 rounded-lg bg-black active:bg-[#151515] text-white" onClick={handleAddComment}>Submit</button>
      </div>
    </div>
  );
};

export default CommentSection;
