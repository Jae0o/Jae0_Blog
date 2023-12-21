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
import { v4 } from "uuid";
import { ERROR_MESSAGE } from "../constants/AlertMessage";
import { POST_LIST_THUMBNAIL } from "../constants/URL";

/* ============== Lists ============== */

export const setOptions: SetOptions = async (optionsType, value) => {
  try {
    await set(ref(database, `${optionsType}/${value}`), value);
  } catch (e) {
    throw Error(`${optionsType}${ERROR_MESSAGE.SET_OPTION_LIST}`);
  }
};

export const getOptions: GetOptions = async optionsType => {
  try {
    return await get(ref(database, optionsType)).then(res => {
      if (res.exists()) {
        return Object.values(res.val());
      }
      return [];
    });
  } catch (e) {
    throw Error(`${optionsType}${ERROR_MESSAGE.GET_OPTION_LIST}`);
  }
};

/* =============== POST =============== */

export const setPost: SetPost = async post => {
  try {
    const time = JSON.stringify(new Date());
    console.log(post);
    if (post.id === "newPost") {
      const newId = v4();
      post.id = newId;
      post.createAt = time;
    }

    post.thumbnail = POST_LIST_THUMBNAIL[post.category];
    post.updateAt = time;

    console.log(`Posts/${post.category}/${post.id}`);
    await set(ref(database, `Posts/${post.category}/${post.id}`), post);
  } catch (e) {
    throw Error(ERROR_MESSAGE.SET_POST);
  }
};

export const getPostsList: GetPostsList = async category => {
  try {
    return await get(ref(database, `Posts/${category}`)) //
      .then(res => {
        if (res.exists()) {
          return Object.values(res.val());
        }
        return [];
      });
  } catch (e) {
    throw new Error(ERROR_MESSAGE.GET_POSTS_LIST);
  }
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
      return [];
    })
    .catch(() => {
      throw Error(ERROR_MESSAGE.GET_POST);
    });
};
