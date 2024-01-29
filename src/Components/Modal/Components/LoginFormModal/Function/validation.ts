export const validation = {
  email: (value: string) => {
    const trimValue = value.trim();
    if (trimValue.length === 0) return "";

    return "";
  },

  password: (value: string) => {
    const trimValue = value.trim();

    if (trimValue.length === 0) return "";

    if (trimValue.length < 4) return "최소 글자수 미달";

    if (trimValue.length > 16) return "최대 글자수 초과";

    return "";
  },
};
