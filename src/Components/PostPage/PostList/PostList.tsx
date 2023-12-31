import { useEffect, useState } from "react";
import "./PostList.Style.css";
import { useParams } from "react-router-dom";
import PostListItem from "./Components/PostListItem";
import { getAllPostsList, getPostsList } from "../../../API/FirebaseDB";
import { FetchPostsList } from "./PostList.Types";
import { PostData } from "../../../API/Firebase.Types";
import { ADVICE_DEFAULT, ADVICE_LIST } from "../../../constants/variables";
import { BannerInfo } from "../PostPageType";
import { POST_BANNER_THUMBNAILS } from "../../../constants/URL";
import PostBanner from "../PostBanner/PostBanner";

const PostList = (): JSX.Element => {
  const [postsList, setPostsList] = useState<PostData[]>([]);
  const [bannerInfo, setBannerInfo] = useState<BannerInfo>({
    advice: ADVICE_DEFAULT,
    thumbnail: "",
  });

  const { category = "ALL" } = useParams();

  useEffect(() => {
    const fetchPostsList: FetchPostsList = async () => {
      if (category === "ALL") {
        const resAllPostsList: PostData[] = await getAllPostsList();
        setPostsList(resAllPostsList);
        return;
      }

      const resPostsList: PostData[] = await getPostsList(category);
      setPostsList(resPostsList);
    };
    fetchPostsList();
  }, [category]);

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
      <div className="ptlist__banner">
        <PostBanner
          thumbnail={bannerInfo.thumbnail}
          mainText={bannerInfo.advice.advice}
          subText={`- ${bannerInfo.advice.author}`}
        />
      </div>
      <div className="ptlist__content">
        <ul className="ptlist__list-container">
          {postsList &&
            postsList.map(post => (
              <PostListItem
                post={post}
                key={post.id}
              />
            ))}
        </ul>
      </div>
    </>
  );
};

export default PostList;
