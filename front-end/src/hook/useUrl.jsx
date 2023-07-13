import axios from "axios";

const useUrl = ({ setErrorMessage, setHaveError, url }) => {
  return {
    hendelSubmit: async (event) => {
      event.preventDefault();

      try {
        if (!url) {
          throw new Error("url unavailbe");
        }
        const response = await axios.post(
          "http://localhost:8000/api/v1/url",
          { url },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          // Handle successful response here
        } else {
          setErrorMessage(response.data);
          setHaveError(true);
        }
      } catch (error) {
        console.log(error);
        setErrorMessage("An error occurred while submitting the form.");
        setHaveError(true);
      }
    },
  };
};

export default useUrl;
