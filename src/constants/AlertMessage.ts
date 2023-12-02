import {
  AlertContextType,
  AlertEditType,
  ErrorMessageTyps,
} from "../Types/Constants/AlertMessageType";

export const ALERT_CONTEXT: AlertContextType = {
  TAG: "Tag List 불러오기 과정중 문제가 발생했습니다. 🥹",
  CATEGORY: "Category List 불러오기 과정중 문제가 발생했습니다. 🥹",
  POST: "Post List 불러오기 과정중 문제가 발생했습니다. 🥹",
};

export const ALERT_EDIT: AlertEditType = {
  UPLOAD_SUCCESS: "업로드에 성공하였습니다! 👍",
  UPLOAD_FAIL: "업로드에 실패했습니다! 🖐️",
};

export const ERROR_MESSAGE: ErrorMessageTyps = {
  SET_OPTION_LIST: "을 추가하는 과정에서 ERROR 발생.",
  GET_OPTION_LIST: "을 불러오는 과정에서 ERROR 발생.",
  SET_POST: "Post를 업로드하는 중 ERROR 발생.",
  GET_POST: "Post를 불러오는 중 ERROE 발생.",
};
