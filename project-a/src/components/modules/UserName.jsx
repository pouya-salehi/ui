import React from "react";

function UserName() {
  return (
    <div className="flex items-center gap-2 shadow rounded-md">
      <img
        src="./images/couper.png"
        alt="couper"
        className="rounded-full h-16"
      />
      <div className="flex flex-col">
        <h3>Couper.ir</h3>
        <span className="text-gray-400 text-sm">cooperstudio2024@gmail.com</span>
      </div>
    </div>
  );
}

export default UserName;
