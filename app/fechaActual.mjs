export const fechaActual = () => {
  const data = Date.now();
  return {
    unix: data,
    utc: new Date(data).toUTCString(),
  };
};
export const fechaUnix = (date) => {
   return {
    unix: Date.parse(date),
    utc: new Date(date).toUTCString(),
  };
};


