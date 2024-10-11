import React from "react";

const NewUserNotification = ({ userName }) => {
  return (
    <>
      <div className="flex items-center mt-4">
        <div className="flex-grow h-px bg-gray-300"></div>
        <span className="mx-4 font-bold">{userName} Joined!</span>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>
    </>
  );
};

export default NewUserNotification;
