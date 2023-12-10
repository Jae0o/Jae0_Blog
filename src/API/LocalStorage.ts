import { PostData } from "../Types/API/FirebaseTypes";
import {
  GetLocal,
  RemoveLocal,
  SetLocal,
} from "../Types/API/LocalStorageTypes";

export const setLocalStorage: SetLocal = post => {
  const time = JSON.stringify(new Date());
  post.updateAt = time;
  localStorage.setItem(post.id, JSON.stringify(post));
};

export const removeLocalStorage: RemoveLocal = id => {
  localStorage.removeItem(id);
};

export const getLocalStorage: GetLocal = id => {
  const get: string = localStorage.getItem(id) || "";
  const data: PostData = JSON.parse(get);
  return data ? data : false;
};
