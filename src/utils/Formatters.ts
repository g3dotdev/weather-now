export const formatUnixTime = (time: number) => {
  return new Date(time).toLocaleTimeString("en-US", {
    timeZone: "America/Sao_Paulo",
    hour12: true,
  });
};
