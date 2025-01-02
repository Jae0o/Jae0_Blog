"use client";

import { useGetAllPostList } from "@/lib/api";

const HomePostList = () => {
  const { data } = useGetAllPostList();

  console.log(data);
  return <div>HomePostList</div>;
};

export default HomePostList;
