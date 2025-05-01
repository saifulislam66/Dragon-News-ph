import React from "react";
import { FaStar, FaEye, FaShareAlt, FaRegCommentDots } from "react-icons/fa";

const NewsCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-xl overflow-hidden border p-4 space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://via.placeholder.com/40"
            alt="Author"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold text-sm">Awlad Hossain</p>
            <p className="text-xs text-gray-500">2022-08-21</p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-600 text-xl">
          <FaRegCommentDots />
          <FaShareAlt />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold leading-snug hover:underline cursor-pointer">
        Biden Pledges Nearly $3 Billion To Ukraine In <br />
        Largest U.S. Military Aid Package Yet
      </h2>

      {/* Image */}
      <img
        className="w-full h-48 object-cover rounded-md"
        src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80"
        alt="News"
      />

      {/* Description */}
      <p className="text-sm text-gray-700">
        Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe,
        Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States,
        Worthy News (Worthy News) – U.S. President Joe Biden has announced
        nearly $3 billion in new U.S. military a...{" "}
        <span className="text-red-500 font-medium cursor-pointer">
          Read More
        </span>
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-black ml-1">4.9</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye />
          <span>499</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
