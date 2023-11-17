import { database } from "./Firebase";
import { get, set, ref } from "firebase/database";
import { getListFunc, setAddListsFunc } from "../Types/API/FirebaseTypes";

export const setAddLists: setAddListsFunc = async (listType, value) => {
  try {
    await set(ref(database, `${listType}/${value}`), value);
  } catch (e) {
    throw Error(`${listType}을 추가하는 과정에서 Error가 발생`);
  }
};

export const getList: getListFunc = async (listType) => {
  try {
    return await get(ref(database, listType)) //
      .then((res) => (res.exists() ? Object.values(res.val()) : []));
  } catch (e) {
    throw Error(`${listType}을 불러오는 과정에서 Error가 발생`);
  }
};
