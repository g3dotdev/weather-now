export const formatUnixTime = (time: number) => {
  return new Date(time * 1000).toLocaleTimeString("en-US", {
    timeZone: "America/Sao_Paulo",
    hour12: true,
  });
};
