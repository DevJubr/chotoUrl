import { useEffect, useState } from "react";
import { LoaderCon } from "../Home/__HomeStyled";
import { Section } from "./EdPageStyled";
import Item from "./Item";
import useFetch from "../../hook/useFetch";
import SmallHeader from "../smallHeader/SmallHeader";

const EdPageComponent = () => {
  const [data, setData] = useState(null);
  const [currentPage, setcurrentPage] = useState(1);
  const [currentLi, setcurrentLi] = useState(1);
  const [reloadComponent, setreloadComponent] = useState(false);
  const { fetchData } = useFetch();

  // Database update and rerender
  useEffect(() => {
    const data = fetchData(currentPage, 4);
    data
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reloadComponent, currentPage]);

  // chenge reaload state
  const hendelReload = () => {
    setreloadComponent(!reloadComponent);
  };

  // loading component
  if (data === null || !data?.urls) {
    return <LoaderCon>Loading...</LoaderCon>;
  }
  function muVal() {
    return;
  }
  return (
    <>
      <SmallHeader title={" Manage Your Short URLs."} />

      <Section>
        {data?.urls?.map((url) => {
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
      <div className="btttnss">
        <button onClick={() => setcurrentPage(currentPage - 1)}>left</button>
        <ul>
          <li className={1 === currentPage ? "active" : null} value={"1"}>
            1
          </li>
          <li className={2 === currentPage ? "active" : null} value={"2"}>
            2
          </li>
          <li className={3 === currentPage ? "active" : null} value={"3"}>
            3
          </li>
          <li className={4 === currentPage ? "active" : null} value={"4"}>
            4
          </li>
        </ul>
        <button onClick={() => setcurrentPage(currentPage + 1)}>rite</button>
      </div>
    </>
  );
};

export default EdPageComponent;
