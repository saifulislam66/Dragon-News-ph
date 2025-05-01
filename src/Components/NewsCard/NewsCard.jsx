import React from "react";
import { FaStar, FaEye, FaShareAlt, FaRegCommentDots } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    published_date,
    image_url,
    details,
    rating,
    total_view,
  } = news;

  return (
    <div className="max-w-xl mx-auto  shadow-md rounded-xl overflow-hidden border p-4 space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={author?.img || "https://via.placeholder.com/40"}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold text-sm">{author?.name}</p>
            <p className="text-xs text-gray-500">
              {new Date(author?.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-600 text-xl">
          <FaRegCommentDots />
          <FaShareAlt />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold leading-snug hover:underline cursor-pointer">
        {title}
      </h2>

      {/* Image */}
      <img
        className="w-full h-48 object-cover rounded-md"
        src={image_url}
        alt="News"
      />

      {/* Description */}
      <p className="text-sm text-gray-700">
        {details.slice(0, 200)}...
        <span className="text-red-500 font-medium cursor-pointer">
          {" "}
          Read More
        </span>
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-black ml-1">{rating?.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
