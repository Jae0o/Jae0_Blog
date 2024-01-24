import { database } from "./Firebase";
import { get, set, ref } from "firebase/database";
import {
  SetPost,
  GetOptions,
  SetOptions,
  GetPost,
  GetPostsList,
  GetAllPostsList,
  PostData,
  ResponsePostsList,
} from "./Firebase.Types";

import { ERROR_MESSAGE } from "../constants/AlertMessage";

/* ============== Lists ============== */

export const setOptions: SetOptions = async (optionsType, value) => {
  try {
    await set(ref(database, `${optionsType}/${value}`), value);
  } catch (e) {
    throw Error(`${optionsType}${ERROR_MESSAGE.SET_OPTION_LIST}`);
  }
};

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

export const setPost: SetPost = async post => {
  try {
    const time = JSON.stringify(new Date());

    if (!post.createAt) {
      post.createAt = time;
    }

    post.updateAt = time;

    await set(ref(database, `Posts/${post.category}/${post.id}`), post);
  } catch (e) {
    throw Error(ERROR_MESSAGE.SET_POST);
  }
};

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

export const getAllPostsList: GetAllPostsList = async () => {
  const snapshot: ResponsePostsList = await get(ref(database, `Posts/`))
    .then(res => {
      if (res.exists()) {
        return res.val();
      }
    })
    .catch(() => {
      throw new Error(ERROR_MESSAGE.GET_ALL_POSTS_LIST);
    });

  const postsList: PostData[] = [];

  for (const key in snapshot) {
    const convertedList: PostData[] = Object.values(snapshot[key]);
    postsList.push(...convertedList);
  }

  return postsList;
};

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
