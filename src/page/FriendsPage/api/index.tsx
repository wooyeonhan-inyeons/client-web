import { BACK_URL } from "../../../constants/GlobalConstants";

export const getFriends = () => {
  return fetch(`${BACK_URL}/friends`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("key")}`,
    },
  }).then((response) => response.json());
};

export const getSum = () => {
  return fetch(`${BACK_URL}/friends/sum`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("key")}`,
    },
  }).then((response) => response.json());
};
