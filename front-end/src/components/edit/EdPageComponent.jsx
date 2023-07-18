import { useEffect, useState } from "react";
import { LoaderCon } from "../Home/__HomeStyled";
import { Btttnss, ButtonPagi, List, ListItem, Section } from "./EdPageStyled";
import Item from "./Item";
import useFetch from "../../hook/useFetch";
import SmallHeader from "../smallHeader/SmallHeader";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Specer } from "../history/__styledHistory";

const EdPageComponent = () => {
  const [loader, setloader] = useState(false);
  const [data, setData] = useState(null);
  const [currentPage, setcurrentPage] = useState(1);
  const [reloadComponent, setreloadComponent] = useState(false);
  const { fetchData, PaginationsBtn } = useFetch();

  // Database update and rerender
  useEffect(() => {
    setloader(true);
    const data = fetchData(currentPage, 6);
    data
      .then((result) => {
        setData(result);
        setloader(false);
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
  if (loader) {
    return <LoaderCon>Loading...</LoaderCon>;
  }
  if (data === null || !data?.urls) {
    return (
      <Specer>
        <SmallHeader title={" DB is MT."} />
      </Specer>
    );
  }

  return (
    <>
      <SmallHeader title={"Manage Your Short URLs."} />

      <Section
        className={
          PaginationsBtn(data.totalPage).length === data.totalPage
            ? "secAtive"
            : null
        }
      >
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
      <Btttnss>
        <ButtonPagi
          disabled={currentPage === 1}
          onClick={() => setcurrentPage(currentPage - 1)}
        >
          <AiOutlineLeft />
        </ButtonPagi>
        <List>
          {PaginationsBtn(data.totalPage).map((item) => {
            if (item < 5) {
              return (
                <ListItem
                  key={Math.ceil(item * 12)}
                  className={item + 1 === currentPage ? "active" : null}
                >
                  {item + 1}
                </ListItem>
              );
            } else {
              return (
                <>
                  <ListItem
                    className={item + 1 === currentPage ? "active" : null}
                  >
                    {item + 1}
                  </ListItem>
                  <p>...</p>
                </>
              );
            }

            return (
              <ListItem className={item + 1 === currentPage ? "active" : null}>
                {item + 1}
              </ListItem>
            );
          })}
        </List>
        <ButtonPagi
          disabled={currentPage === data.totalPage}
          onClick={() => setcurrentPage(currentPage + 1)}
        >
          <AiOutlineRight />
        </ButtonPagi>
      </Btttnss>
    </>
  );
};

export default EdPageComponent;
