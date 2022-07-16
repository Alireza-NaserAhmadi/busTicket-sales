export const TIKET = "TIKET";

export const showTiket = (data) => {
  return {
    type: TIKET,
    payload: data,
  };
};
