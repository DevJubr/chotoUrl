import { useEffect, useState } from "react";
import { StyledH1, StyledHeader } from "../Home/__HomeStyled";
import { Section } from "./EdPageStyled";
import Item from "./Item";
import Loader from "../loader/Loader";
import useFetch from "../../hook/useFetch";

const EdPageComponent = () => {
  const [data, setData] = useState(null);
  const [reloadComponent, setreloadComponent] = useState(false);
  const { fetchData } = useFetch();

  //
  useEffect(() => {
    const data = fetchData();
    data
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reloadComponent]);

  //
  const hendelReload = () => {
    setreloadComponent(!reloadComponent);
  };

  //
  if (data === null) {
    return (
      <>
        <Loader />
        Loading...
      </>
    );
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
