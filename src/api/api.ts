import {
  BASE_URL,
  ESNTL_ID,
  AUTH_KEY,
  ROW_SIZE,
  MISSING_TARGET,
} from "../const/consts";

export const getData = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}?esntlId=${ESNTL_ID}&authKey=${AUTH_KEY}&rowSize=${ROW_SIZE}&writngTrgetDscds=${MISSING_TARGET}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const responseText = await response.text();
    try {
      const result = JSON.parse(responseText);
      console.log("✅ API OK");
      return result;
    } catch (e) {
      console.error(e);
    }
  } catch (e) {
    console.error(e);
  }
};
