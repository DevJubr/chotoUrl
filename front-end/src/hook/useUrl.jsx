const useUrl = ({ setErrorMessage, setHaveError, url }) => {
  console.log(url);
  return {
    hendelSubmit: async (event) => {
      event.preventDefault();

      try {
        const response = await fetch("http://localhost:8000/url", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url }),
        });

        if (response.ok) {
          // Handle successful response here
        } else {
          const errorText = await response.text();
          setErrorMessage(errorText);
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
