import { useEffect, useState } from "react";
import { StyledH1, StyledHeader } from "../Home/__HomeStyled";
import { Section } from "./EdPageStyled";
import Item from "./Item";

const EdPageComponent = () => {
  const [data, setData] = useState(null);
  const [reloadComponent, setreloadComponent] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/allurls");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [reloadComponent]);

  const hendelReload = () => {
    setreloadComponent(!reloadComponent);
  };

  if (data === null) {
    // Display loading state while waiting for the data
    return <div>Loading...</div>;
  }
  return (
    <>
      <StyledHeader>
        <StyledH1>Manage Your Short URLs.</StyledH1>
      </StyledHeader>

      <Section>
        {data.map((url) => {
          return (
            <Item
              key={url._id}
              id={url._id}
              luri={url.longUrl}
              suri={url.shortUrl}
              hendelReload={hendelReload}
            />
          );
        })}
      </Section>
    </>
  );
};

export default EdPageComponent;
