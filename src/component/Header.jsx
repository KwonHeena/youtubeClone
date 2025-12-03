import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";

const Header = () => {
  const { keyword } = useParams();
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);

  return (
    <header>
      <div className="header_inner">
        <Link to="/">
          <FaYoutube />
          <h1>Youtube</h1>
        </Link>
        <div className="search_wrap">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={text}
              onChange={handleChange}
              placeholder="검색어 입력"
            />
            <button>
              <IoSearch />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
