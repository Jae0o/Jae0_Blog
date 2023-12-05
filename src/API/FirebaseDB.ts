import { database } from "./Firebase";
import { get, set, ref } from "firebase/database";
import {
  SetPost,
  GetOptionsFunc,
  SetOptionsFunc,
  GetPostFunc,
  GetPostsList,
  GetAllPostsList,
  PostDataType,
  ResponcePostsListType,
} from "../Types/API/FirebaseTypes";
import { v4 } from "uuid";
import { removeLocalStorage } from "./LocalStorage";
import { ERROR_MESSAGE } from "../constants/AlertMessage";
import { POST_LIST_THUMBNAIL } from "../constants/URL";

/* ============== Lists ============== */

export const setOptions: SetOptionsFunc = async (optionsType, value) => {
  try {
    await set(ref(database, `${optionsType}/${value}`), value);
  } catch (e) {
    throw Error(`${optionsType}${ERROR_MESSAGE.SET_OPTION_LIST}`);
  }
};

export const getOptions: GetOptionsFunc = async optionsType => {
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

    if (post.id === "newPost") {
      const newId = v4();
      post.id = newId;
      post.createAt = time;
    }

    post.thumbnail = POST_LIST_THUMBNAIL[post.category];
    post.updateAt = time;

    await set(ref(database, `Posts/${post.category}/${post.id}`), post) //
      .then(() => removeLocalStorage(post.id));
    return;
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
    throw new Error();
  }
};

export const getAllPostsList: GetAllPostsList = async () => {
  try {
    const snapshot: ResponcePostsListType = await get(ref(database, `Posts/`)) //
      .then(res => {
        if (res.exists()) {
          return res.val();
        }
      });
    const postsList: PostDataType[] = [];

    for (const key in snapshot) {
      const convetedList: PostDataType[] = Object.values(snapshot[key]);
      postsList.push(...convetedList);
    }

    return postsList;
  } catch (e) {
    throw new Error();
  }
};

export const getPost: GetPostFunc = async (category, postId) => {
  try {
    return await get(ref(database, `Posts/${category}/${postId}`)) //
      .then(res => {
        if (res.exists()) {
          return res.val();
        }
        return [];
      });
  } catch (e) {
    throw new Error(ERROR_MESSAGE.GET_POST);
  }
};
