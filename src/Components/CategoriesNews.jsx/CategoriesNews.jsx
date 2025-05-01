import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../NewsCard/NewsCard";

function CategoriesNews() {
  const [filtaredNews, setfFiltaredNews] = useState([]);
  const allNews = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    if (id == "0") {
      setfFiltaredNews(allNews);
      return;
    } else if (id == "1") {
      const catsNews = allNews.filter((n) => n.others.is_today_pick == true);
      setfFiltaredNews(catsNews);
    } else {
      const catsNews = allNews.filter((n) => n.category_id == id);
      setfFiltaredNews(catsNews);
    }
  }, [allNews, id]);

  return (
    <div>
      <h2>total post {filtaredNews.length}</h2>
      <NewsCard></NewsCard>
    </div>
  );
}

export default CategoriesNews;
