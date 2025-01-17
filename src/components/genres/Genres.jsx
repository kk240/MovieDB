import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);
  return (
    <div className="genres">
      {data?.map((g, i) => {
        if (!genres[g]?.name) return;
        return (
          <div className="genre" key={i}>
            {genres[g]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
