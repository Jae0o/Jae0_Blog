import { get, ref, set } from "firebase/database";
import { ERROR_MESSAGE } from "@/constants";
import { PostData } from "@/types/original";
import { database } from "./firebase";

/* ============== Lists ============== */

type SetOptions = (optionsType: string, value: string) => Promise<void>;

export const setOptions: SetOptions = async (optionsType, value) => {
  try {
    await set(ref(database, `${optionsType}/${value}`), value);
  } catch (e) {
    throw Error(`${optionsType}${ERROR_MESSAGE.SET_OPTION_LIST}`);
  }
};

type GetOptions = (optionsType: string) => Promise<string[] | false>;

export const getOptions: GetOptions = async optionsType => {
  return await get(ref(database, optionsType))
    .then(res => {
      if (res.exists()) {
        const fetchedOptions: string[] = Object.values(res.val());
        return fetchedOptions;
      }
      return false;
    })
    .catch(() => {
      console.error(`${optionsType}${ERROR_MESSAGE.GET_OPTION_LIST}`);
      return false;
    });
};

/* =============== POST =============== */

type SetPost = (post: PostData) => Promise<void>;

export const setPost: SetPost = async post => {
  const time = JSON.stringify(new Date());

  if (!post.createAt) {
    post.createAt = time;
  }

  post.updateAt = time;

  await set(ref(database, `Posts/${post.category}/${post.id}`), post);
};

type GetPostsList = (category: string) => Promise<PostData[] | false>;

export const getPostsList: GetPostsList = async category => {
  return await get(ref(database, `Posts/${category}`))
    .then(res => {
      if (res.exists()) {
        const fetchedList: PostData[] = Object.values(res.val());
        return fetchedList;
      }
      return false;
    })
    .catch(error => {
      console.error(error);
      return false;
    });
};

type GetAllPostsList = () => Promise<PostData[] | false>;
interface ResponsePostsList {
  [key: string]: { [key: string]: PostData };
}

export const getAllPostsList: GetAllPostsList = async () => {
  const fetchedPostList: ResponsePostsList | false = await get(
    ref(database, `Posts/`),
  )
    .then(res => {
      if (res.exists()) {
        const fetchedList: ResponsePostsList = res.val();
        return fetchedList;
      }
      return false;
    })
    .catch(() => {
      console.error(ERROR_MESSAGE.GET_ALL_POSTS_LIST);
      return false;
    });

  if (!fetchedPostList) {
    return false;
  }

  const postsList: PostData[] = [];

  for (const key in fetchedPostList) {
    const convertedList: PostData[] = Object.values(fetchedPostList[key]);
    postsList.push(...convertedList);
  }

  return postsList;
};

type GetPost = (category: string, postId: string) => Promise<PostData | false>;

export const getPost: GetPost = async (category, postId) => {
  return await get(ref(database, `Posts/${category}/${postId}`))
    .then(res => {
      if (res.exists()) {
        return res.val();
      }
      return false;
    })
    .catch(() => {
      return false;
    });
};

interface DeletePost {
  postCategory: string;
  postId: string;
}
export const deletePost = async ({ postCategory, postId }: DeletePost) => {
  await set(ref(database, `Posts/${postCategory}/${postId}`), null);
};
