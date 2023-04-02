import React from "react";
import { Skeleton } from "@mui/material";

const Loading = () => {
  return (
    <>
      <ul className="skaleton_list">
        {Array.from(new Array(8)).map(() => (
          <li className="skaleton-card">
            <Skeleton
              variant="rectangular"
              style={{ width: "100%", height: "250px", marginBottom: "5px" }}
            />
            <Skeleton
              variant="rectangular"
              style={{ width: "40%", height: "20px", marginBottom: "10px" }}
            />
            <Skeleton
              variant="rectangular"
              style={{ width: "60%", height: "20px", marginBottom: "10px" }}
            />
            <Skeleton
              variant="rectangular"
              style={{ width: "90%", height: "20px", marginBottom: "10px" }}
            />
            <Skeleton
              variant="rectangular"
              style={{ width: "25%", height: "35px", marginBottom: "10px" }}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Loading;
