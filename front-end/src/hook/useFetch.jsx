import axios from "axios";
const useFetch = () => {
  return {
    fetchAllUrls: async () => {
      const res = await axios.get("http://localhost:8000/api/v1/allurls");
      return res.data;
    },
  };
};

export default useFetch;
