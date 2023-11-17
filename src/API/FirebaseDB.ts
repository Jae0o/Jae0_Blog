import { database } from "./Firebase";
import { get, set, ref } from "firebase/database";
import { SetPost, GetListFunc, SetAddListsFunc } from "../Types/API/FirebaseTypes";
import { v4 } from "uuid";

/* ============== Lists ============== */

export const setAddLists: SetAddListsFunc = async (listType, value) => {
  try {
    await set(ref(database, `${listType}/${value}`), value);
  } catch (e) {
    throw Error(`${listType}을 추가하는 과정에서 Error가 발생`);
  }
};

export const getList: GetListFunc = async (listType) => {
  try {
    return await get(ref(database, listType)) //
      .then((res) => (res.exists() ? Object.values(res.val()) : []));
  } catch (e) {
    throw Error(`${listType}을 불러오는 과정에서 Error가 발생`);
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

    await set(ref(database, `Posts/${post.category}/${post.id}`), post);
    return;
  } catch (e) {
    throw Error("Post를 업로드 하는중 실패했습니다.");
  }
};
