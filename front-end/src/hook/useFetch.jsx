import axios from "axios";
const useFetch = () => {
  const fetchData = async (page, limit) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/v1/allurls?page=${page}&limit=${limit}`
      );
      const jsonData = response.data;
      return jsonData;
    } catch (error) {
      console.error(error);
    }
  };

  const editHendel = (
    ev,
    seteditEnable,
    editEnable,
    id,
    editState,
    hendelReload,
    hendelUpdate
  ) => {
    seteditEnable(!editEnable);
    //
    if (ev.target.name === "save") {
      hendelUpdate(id, editState, hendelReload);
    }
  };

  //
  const hendelUpdate = async (_id, updatedUrl, hendelReload) => {
    //
    try {
      const response = await axios.patch(
        "http://localhost:8000/api/v1/urlupdate",
        { _id, updatedUrl },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        console.log("update successfully");
        hendelReload();
      }
    } catch (error) {
      console.log("update error :", error);
    }
  };

  //
  const hendelDelete = async (id, hendelReload) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/v1/url/${id}`
      );

      if (response.status === 200) {
        console.log("URL deleted successfully");
        hendelReload();
      }
    } catch (error) {
      console.error("An error occurred while deleting the URL", error);
    }
  };
  const PaginationsBtn = (ln) => {
    const length = [];
    for (let i = 0; i < ln; i++) {
      length.push(i);
    }
    return length;
  };
  return {
    PaginationsBtn,
    fetchData,
    editHendel,
    hendelUpdate,
    hendelDelete,
  };
};

export default useFetch;
