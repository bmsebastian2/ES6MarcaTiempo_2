export const PORT = process.env.PORT ?? "8080";

export const isErrorData = (data) => isNaN(Date.parse(data)) ?? false;
