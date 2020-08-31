import React from "react";

export interface LikeProps {
  onClick: () => any;
  isLiked: boolean;
}

const Like: React.SFC<LikeProps> = ({ onClick, isLiked }) => {
  const className = isLiked ? "fas" : "far";
  return (
    <i
      className={className + " fa-heart"}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    ></i>
  );
};

export default Like;
