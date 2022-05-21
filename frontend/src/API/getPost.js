import axios from "@/API/axios";

const getPost = () => {
  return axios.get("api/restaurants").then((response) => {
    console.log(response);
  });
};

export default {
  getPost,
};
// axios.get("http://localhost:1337/api/restaurants").then((response) => {
//   console.log(response);
// });
