import { GetLocalFunc, RemoveLocalFunc, SetLocalFunc } from "../Types/API/LocalStorageTypes";
import { PostDataType } from "../Types/Components/Edit/EditorTypes";

export const setLocalStorage: SetLocalFunc = (post) => {
  const time = JSON.stringify(new Date());
  post.updateAt = time;
  localStorage.setItem(post.id, JSON.stringify(post));
};

export const removeLocalStorage: RemoveLocalFunc = (id) => {
  localStorage.removeItem(id);
};

export const getLocalStorage: GetLocalFunc = (id) => {
  const get: string = localStorage.getItem(id) || "";
  const data: PostDataType = JSON.parse(get);
  return data ? data : false;
};
