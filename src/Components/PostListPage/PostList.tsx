import React from "react";

const PostList: React.FC = () => {
  const {
    state: { list },
  }: CategoryLocationType = useLocation();

  return <li></li>;
};

export default PostList;
