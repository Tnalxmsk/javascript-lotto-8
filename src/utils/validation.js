const EMPTY_VALUE = "[ERROR] 값이 입력되지 않았습니다. 다시 입력해 주세요.";

export const validateEmpty = (value) => {
  if (value.trim() === '') {
    throw new Error(EMPTY_VALUE);
  }
};
