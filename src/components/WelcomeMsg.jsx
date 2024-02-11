import React from "react";

export default function WelcomeMsg({ todoArr }) {
  return (
    <>
      {todoArr.length === 0 && (
        <div className="m-3">
          <h3 className="bg-info p-2 w-75 rounded rounded-3 text-center m-auto">
            Your Todo is Empty, Enjoy Your Day..
          </h3>
        </div>
      )}
    </>
  );
}
