import axios from "axios";
import { useState } from "react";

const useUrl = ({
  setErrorMessage,
  setHaveError,
  url,
  setUrl,
  setloader,
  setIscopyed,
}) => {
  const [Respons, setRespons] = useState(null);
  return {
    hendelSubmit: async (event) => {
      event.preventDefault();
      setloader(true);
      try {
        if (!url) {
          throw new Error("url unavailbe");
        }

        const chsedData = localStorage.getItem(url);
        if (chsedData) {
          setRespons(JSON.parse(chsedData));
          setloader(false);
          setUrl("");
        } else {
          const response = await axios.post(
            "/api/v1/url",
            { url },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (response.status === 200) {
            setloader(false);
            setRespons(response.data.message);

            localStorage.setItem(
              response.data.message.longUrl,
              JSON.stringify(response.data.message)
            );
          } else {
            setloader(false);
            setErrorMessage(response.data);
            setHaveError(true);
          }
        }
      } catch (error) {
        console.log(error);
        setloader(false);
        setErrorMessage("An error occurred while submitting the form.");
        setHaveError(true);
      }
    },
    Respons,
    hendelClick: async (e, value) => {
      if (e.target.name === "copy") {
        setUrl("");
        setRespons(null);
        setIscopyed(true);
      }
      try {
        if (value != undefined) {
          await navigator.clipboard.writeText(value);
        }
      } catch (error) {
        console.error("Error copying to clipboard:", error);
      }
    },
  };
};

export default useUrl;
