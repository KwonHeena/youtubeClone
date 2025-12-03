import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const Videos = () => {
  const API_KEY = "AIzaSyBlQ4zpUqnIzLEc3a9q2g8qeve9YhBJMQQ";
  // const [searchPharams] = useSearchParams()
  // const query = searchPharams.get('query')

  const { data, isLoading, isError } = useQuery({
    queryKey: ["videos"],
    queryFn: async () => {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=KR&maxResults=20&key=${API_KEY}`);
      

      if (!response.ok) {
        throw new Error("불러오기 실패");
      }
      return await response.json();
    },
    refetchInterval : 30 * 60 * 1000
  });

  // if (!query) return <p>검색어가 없습니다.</p>;
  if (isLoading) return <p>로딩중...</p>;
  if (isError) return <p>에러가 발생했습니다</p>;

  const { keyword } = useParams();
  return (
    <section>
      {keyword ? `🔍${keyword}` : "🚨"}
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
