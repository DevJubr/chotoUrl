import { useEffect, useState } from "react";
import useFetch from "../../hook/useFetch";
import { LoaderCon } from "../Home/__HomeStyled";

import {
  MoreOutter,
  TableOutter,
  StyledTable,
  StyledTh,
  StyledTd,
  ParentOfTble,
  Specer,
} from "./__styledHistory";
import SmallHeader from "../smallHeader/SmallHeader";

const HistoryComponent = () => {
  // hooks
  const [loader, setloader] = useState(false);
  const [Data, setData] = useState([]);
  const { getAllHistory } = useFetch();

  // fetch data from database
  useEffect(() => {
    setloader(true);
    const data = getAllHistory();

    data
      .then((result) => {
        setData(result);
        setloader(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // loading component
  if (loader) {
    return <LoaderCon>Loading...</LoaderCon>;
  }
  if (!Data?.message) {
    return (
      <Specer>
        <SmallHeader title={" DB is MT."} />
      </Specer>
    );
  }

  return (
    <>
      <SmallHeader
        title={"  Explore Your Short URL History and Navigate with Ease."}
      />

      <ParentOfTble>
        <MoreOutter>
          <TableOutter>
            <StyledTable>
              <thead>
                <tr>
                  <StyledTh>long url</StyledTh>
                  <StyledTh>short url</StyledTh>
                  <StyledTh>created at</StyledTh>
                </tr>
              </thead>
              <tbody>
                {Data?.message?.map((item) => (
                  <tr key={item._id}>
                    <StyledTd>
                      <a target="_blank" href={item?.longUrl}>
                        {/Mobi|Android/i.test(navigator.userAgent)
                          ? item?.longUrl.slice(0, 22)
                          : item?.longUrl.slice(0, 42)}
                        ...
                      </a>
                    </StyledTd>
                    <StyledTd>
                      <a target="_blank" href={item?.shortUrl}>
                        {item?.shortUrl}
                      </a>
                    </StyledTd>
                    <StyledTd>{item?.history[0]?.createdTime}</StyledTd>
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          </TableOutter>
        </MoreOutter>
      </ParentOfTble>
    </>
  );
};

export default HistoryComponent;
