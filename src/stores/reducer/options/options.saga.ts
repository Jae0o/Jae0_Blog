import { getOptions } from "@/api";
import { OptionsType } from "@/types/original";
import { PayloadAction } from "@reduxjs/toolkit";

import { optionsAction } from "./options.slice";

import { call, put, takeLatest } from "redux-saga/effects";

const fetchOptions = async (tagName: string) => {
  return await getOptions(tagName);
};

export const fetchOptionsAction = (option: OptionsType) => ({
  type: "options/fetchOptions",
  payload: option,
});

const watchOptions = function* (actions: PayloadAction<OptionsType>) {
  const data: string[] = yield call(fetchOptions, actions.payload);

  yield put(
    optionsAction.changeOptions({ newList: data, option: actions.payload }),
  );
};

const watchOptionsSaga = function* () {
  yield takeLatest("options/fetchOptions", watchOptions);
};

export default watchOptionsSaga;
