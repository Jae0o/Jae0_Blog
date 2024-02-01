import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostData } from "@/API/Firebase.Types";
import { getAllPostsList, getPostsList } from "@/API/FirebaseDB";
import AlertModal from "@/Components/Modal/Components/AlertModal/AlertModal";
import useModal from "@/Components/Modal/Hooks/useModal";
import PostBanner from "@/Components/PostBanner/PostBanner";
import PostBannerDecoration from "@/Components/PostBannerDecoration/PostBannerDecoration";
import { GET_POST_LIST_ERROR } from "@/constants/AlertMessage";
import { POST_BANNER_THUMBNAILS } from "@/constants/URL";
import { ADVICE_DEFAULT, ADVICE_LIST } from "@/constants/variables";
import { BannerInfo } from "../PostPageType";
import PostListItem from "./Components/PostListItem";
import "./PostList.Style.css";
import { FetchPostsList } from "./PostList.Types";

const PostList = (): React.ReactNode => {
  const [postsList, setPostsList] = useState<PostData[]>([]);
  const { isShowModal, openModal, closeModal } = useModal();
  const { category = "ALL" } = useParams();
  const navigation = useNavigate();
  const [bannerInfo, setBannerInfo] = useState<BannerInfo>({
    advice: ADVICE_DEFAULT,
    thumbnail: "",
  });

  useEffect(() => {
    const fetchPostsList: FetchPostsList = async () => {
      if (category === "ALL") {
        const resAllPostsList = await getAllPostsList();

        resAllPostsList ? setPostsList(resAllPostsList) : navigation("/");
        return;
      }

      const resPostsList = await getPostsList(category);

      if (!resPostsList) {
        openModal();
        return;
      }
      setPostsList(resPostsList);
    };
    fetchPostsList();
  }, [category, navigation, openModal]);

  useEffect(
    function makeRandomBanner() {
      const randomNum: number = Math.random() * 10;
      const randomIndex: number = Math.floor(randomNum);
      setBannerInfo({
        advice: ADVICE_LIST[randomIndex],
        thumbnail: POST_BANNER_THUMBNAILS[randomIndex],
      });
    },
    [category],
  );

  return (
    <>
      <article className="outlet__ptlist">
        <div className="ptlist__banner">
          <PostBannerDecoration />
          <PostBanner
            thumbnail={bannerInfo.thumbnail}
            mainText={bannerInfo.advice.advice}
            subText={`- ${bannerInfo.advice.author}`}
          />
        </div>

        <ul className="ptlist__list-container">
          {postsList &&
            postsList.map(post => (
              <PostListItem
                post={post}
                key={post.id}
              />
            ))}
        </ul>
      </article>

      <AlertModal
        isShow={isShowModal}
        onClose={closeModal}
        message={GET_POST_LIST_ERROR}
      />
    </>
  );
};

export default PostList;
