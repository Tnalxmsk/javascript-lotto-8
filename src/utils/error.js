export const throwError = (errorMessage, type) => {
  throw new Error(errorMessage[type]);
};
