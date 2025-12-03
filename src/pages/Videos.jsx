import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Videos = () => {
  const API_KEY = "AIzaSyBlQ4zpUqnIzLEc3a9q2g8qeve9YhBJMQQ";

  const { data, isLoading, isError } = useQuery({
    queryKey: ["videos"],
    queryFn: async () => {
      const response = await fetch("/data/youtube.json");

      if (!response.ok) {
        throw new Error("불러오기 실패");
      }
      return await response.json();
    },
  });

  if (isLoading) return <p>로딩중...</p>;
  if (isError) return <p>에러가 발생했습니다</p>;

  const { keyword } = useParams();
  return (
    <section>
      {keyword ? `🔍${keyword}` : "🚨"}
      {console.log(data)}
      <ul className="thumbnail_wrap">
        {data.items.map((item) => (
          <li key={item.id}>
            <a href="">
              <div className="thumbnail">
                <img src={item.snippet.thumbnails.high.url} alt="" />
              </div>
              <div className="title">{item.snippet.title}</div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Videos;
