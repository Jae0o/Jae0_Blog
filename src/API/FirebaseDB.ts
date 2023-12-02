import { database } from "./Firebase";
import { get, set, ref } from "firebase/database";
import { SetPost, GetListFunc, SetAddListsFunc, GetPostFunc } from "../Types/API/FirebaseTypes";
import { v4 } from "uuid";
import { removeLocalStorage } from "./LocalStorage";
import {
  ERROR_MESSAGE_GET_OPTION_LIST,
  ERROR_MESSAGE_GET_POST,
  ERROR_MESSAGE_SET_OPTION_LIST,
  ERROR_MESSAGE_SET_POST,
} from "../constants/AlertMessage";

/* ============== Lists ============== */

export const setAddLists: SetAddListsFunc = async (listType, value) => {
  try {
    await set(ref(database, `${listType}/${value}`), value);
  } catch (e) {
    throw Error(`${listType}${ERROR_MESSAGE_SET_OPTION_LIST}`);
  }
};

export const getList: GetListFunc = async (listType) => {
  try {
    return await get(ref(database, listType)) //
      .then((res) => {
        if (res.exists()) {
          return Object.values(res.val());
        }
        return [];
      });
  } catch (e) {
    throw Error(`${listType}${ERROR_MESSAGE_GET_OPTION_LIST}`);
  }
};

/* =============== POST =============== */

export const setPost: SetPost = async (post) => {
  try {
    const time = JSON.stringify(new Date());

    if (post.id === "newPost") {
      const newId = v4();
      post.id = newId;
      post.createAt = time;
    }

    post.updateAt = time;

    await set(ref(database, `Posts/${post.category}/${post.id}`), post) //
      .then(() => removeLocalStorage(post.id));
    return;
  } catch (e) {
    throw Error(ERROR_MESSAGE_SET_POST);
  }
};

export const getPost: GetPostFunc = async () => {
  try {
    return await get(ref(database, `Posts`)) //
      .then((res) => {
        if (res.exists()) {
          return res.val();
        }
        return [];
      });
  } catch (e) {
    throw new Error(ERROR_MESSAGE_GET_POST);
  }
};
