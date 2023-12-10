import {
  AlertContext,
  AlertEdit,
  ErrorMessage,
} from "../Types/Constants/AlertMessageType";

export const ALERT_CONTEXT: AlertContext = {
  TAG: "Tag List 불러오기 과정중 문제가 발생했습니다. 🥹",
  CATEGORY: "Category List 불러오기 과정중 문제가 발생했습니다. 🥹",
};

export const ALERT_EDIT: AlertEdit = {
  UPLOAD_SUCCESS: "업로드에 성공하였습니다! 👍",
  UPLOAD_FAIL: "업로드에 실패했습니다! 🖐️",
};

export const ERROR_MESSAGE: ErrorMessage = {
  SET_OPTION_LIST: "을 추가하는 과정에서 ERROR 발생.",
  GET_OPTION_LIST: "을 불러오는 과정에서 ERROR 발생.",
  SET_POST: "Post를 업로드하는 중 ERROR 발생.",
  GET_POSTS_LIST: "Posts를 불러오는 중 ERROR 발생.",
  GET_ALL_POSTS_LIST: "모든 Posts를 불러오는 중 ERROR 발생.",
  GET_POST: "Post를 불러오는 중 ERROE 발생.",
};
