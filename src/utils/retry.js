export const withRetry = async (task, onError) => {
  while (true) {
    try {
      return await task();
    } catch (error) {
      onError?.(error);
    }
  }
};
