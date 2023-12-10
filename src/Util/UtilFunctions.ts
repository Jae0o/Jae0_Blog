import { ConvertDateFormat } from "../Types/Util/UtilFunctionsType";

export const convertDateFormat: ConvertDateFormat = date => {
  const dateType = new Date(date);

  const year: number = dateType.getUTCFullYear();
  const month: string = (dateType.getUTCMonth() + 1)
    .toString()
    .padStart(2, "0");
  const day: string = dateType.getUTCDate().toString().padStart(2, "0");

  return `${year}.${month}.${day}`;
};
