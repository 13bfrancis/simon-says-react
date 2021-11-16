export const wait = (timeInMS: number) => {
  return new Promise((resolve) => setTimeout(resolve, timeInMS));
};
