export const fechaActual = () => {
  const data = Date.now();
  return {
    unix: data,
    utc: new Date(data).toUTCString(),
  };
};


