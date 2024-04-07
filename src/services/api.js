import Axios from "axios";

Axios.defaults.baseURL = "https://dummyjson.com/";

export const fetchPosts = async (args) => {
  const response = await Axios.get(`posts`, {
    params: {
      limit: 6,
      ...args,
    },
  });
  console.log(response);
  return response.data;
};
