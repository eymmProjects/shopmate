import React from "react";
import shirt from "../assets/Bitmap.png";
export const Card = () => {
  // const { name, price, image, description } = product;

  return (
    <div className="card flex flex-col items-center justify-center  p-4 border border-gray-300 rounded-lg shadow">
      {/* <img src={image} alt={name} className="w-full h-auto mb-4 rounded-lg" />
      <div className="card-content">
        <h2 className="text-lg font-bold mb-2">{name}</h2>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <p className="text-lg font-semibold mb-2">${price}</p>
        <button className="btn btn-primary">Add to Cart</button>
      </div> */}
      <img src={shirt} alt="" className="w-full  w-60 h-100 mb-4 rounded-lg" />
      <div className="card-content">
        <h2 className="text-2xl font-medium  text-center mb-2">
          New Look T-Shirt In Gradient Fade
        </h2>
        <h2 className="text-4xl text-blue-600 font-bold text-center mb-2">
          {" "}
          P 5000
        </h2>
      </div>
    </div>
  );
};
