export const SEND_DAY = "SEND_DAY";

export const selDay = (data) => {
  return {
    type: SEND_DAY,
    payload: data,
  };
};
