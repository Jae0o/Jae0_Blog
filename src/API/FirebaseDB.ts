import { database } from "./Firebase";
import { get, set, ref } from "firebase/database";
import { setCategoryFunc, getCategoryFunc, setLabelFunc, getLabelFunc } from "../Types/API/FirebaseTypes";

export const setCategory: setCategoryFunc = async (category) => {
  try {
    if (category.length < 2) return console.log("2글자 이상 필요합니다");

    await set(ref(database, `catogory/${category}`), category);
  } catch (e) {
    throw Error("setCategory 과정에서 Error가 발생");
  }
};

export const getCategory: getCategoryFunc = async () => {
  try {
    return await get(ref(database, "catogory")) //
      .then((res) => (res.exists() ? Object.values(res.val()) : []));
  } catch (e) {
    throw Error("getCategory 과정에서 Error가 발생");
  }
};

export const setLabel: setLabelFunc = async (label) => {
  try {
    if (label.length < 2) return console.log("2글자 이상 필요합니다");

    await set(ref(database, `label/${label}`), label);
  } catch (e) {
    throw Error("setLabel 과정에서 Error가 발생");
  }
};

export const getLabel: getLabelFunc = async () => {
  try {
    return await get(ref(database, "label")) //
      .then((res) => (res.exists() ? Object.values(res.val()) : []));
  } catch (e) {
    throw Error("getLabel 과정에서 Error가 발생");
  }
};
