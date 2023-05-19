import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID gilZDkq2DjNaoRkOybeDhgvlDlhyPlUEEaK3Lr7snng",
  },
});
