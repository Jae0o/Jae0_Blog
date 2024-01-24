export interface AlertContext {
  TAG: string;
  CATEGORY: string;
}

export interface AlertEdit {
  UPLOAD_SUCCESS: string;
  UPLOAD_FAIL: string;
}

export interface ErrorMessage {
  SET_OPTION_LIST: string;
  GET_OPTION_LIST: string;
  SET_POST: string;
  GET_POSTS_LIST: string;
  GET_ALL_POSTS_LIST: string;
  GET_POST: string;
  UPLOAD_STORAGE_IMAGE: string;
}
