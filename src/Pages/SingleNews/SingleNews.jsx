import React from "react";
import { useLoaderData, useParams } from "react-router";
import Header from "../../Components/Header/Header";
import { useState } from "react";
import { useEffect } from "react";
import RightSidebar from "../../Components/RiteSidebar/RightSidebar";

function SingleNews() {
  const [singleNews, setsingleNews] = useState({});
  const newsData = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const news = newsData.find((n) => n.id == id);

    setsingleNews(news);
  }, [newsData, id]);
  const { image_url, title, details } = singleNews;
  return (
    <div className="">
      <header className="w-11/12 mx-auto py-5">
        <Header></Header>
      </header>
      <div className="grid grid-cols-12">
        <div className="single-new col-span-9 px-5">
          <img src={image_url} alt="" />
          <h1 className="text-4xl font-semibold my-2">{title}</h1>
          <p className="text-justify">{details}</p>
        </div>

        <div className="rigside col-span-3 px-3">
          <RightSidebar></RightSidebar>
        </div>
      </div>
    </div>
  );
}

export default SingleNews;
