// import axios from "axios";
// export const withCredentials = (url) => {
//   return `${url}api/?key=${process.env.REACT_APP_CLIENT_API_KEY}`;
// };
// export const request = async (url, query, page = 0) => {
//   const result = await axios(url, query, page);
//   return result.data;
// };

import axios from "axios";
const fetchImagesWithQuery = (query, page = 1) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${process.env.REACT_APP_CLIENT_API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((result) => result.data.hits);
};
export default {
  fetchImagesWithQuery,
};
