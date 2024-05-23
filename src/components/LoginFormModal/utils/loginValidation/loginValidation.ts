import { LOGIN_VALIDATION } from "@/constants";

const PASSWORD_MIN_LENGTH = 4;
const PASSWORD_MAX_LENGTH = 12;
const PASSWORD_REG = /^(?=.*[[\]{}()<>\\])/;

const EMAIL_REG = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const loginValidation = {
  email: (value: string) => {
    const trimValue = value.trim();

    if (trimValue.length === 0) {
      return LOGIN_VALIDATION.CHECK_EMAIL_LENGTH_ZERO;
    }

    if (!trimValue.match(EMAIL_REG)) {
      return LOGIN_VALIDATION.CHECK_EMAIL_REG;
    }

    return "";
  },

  password: (value: string) => {
    const trimValue = value.trim();

    if (trimValue.length === 0) {
      return LOGIN_VALIDATION.CHECK_PASSWORD_LENGTH_ZERO;
    }

    if (trimValue.length < PASSWORD_MIN_LENGTH) {
      return LOGIN_VALIDATION.CHECK_PASSWORD_MIN_LENGTH;
    }

    if (trimValue.length > PASSWORD_MAX_LENGTH) {
      return LOGIN_VALIDATION.CHECK_PASSWORD_MAX_LENGTH;
    }

    if (trimValue.match(PASSWORD_REG)) {
      return LOGIN_VALIDATION.CHECK_PASSWORD_REG;
    }

    return "";
  },
};
