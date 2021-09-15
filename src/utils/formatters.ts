export const formatUnixTime = (time: number) => {
  return new Date(time).toLocaleTimeString("en-US", {
    hour12: true,
  });
};
