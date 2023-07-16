import { useEffect, useState } from "react";
import useFetch from "../../hook/useFetch";
import {
  MoreOutter,
  TableOutter,
  StyledTable,
  StyledTh,
  StyledTd,
  ParentOfTble,
} from "./__styledHistory";
import SmallHeader from "../smallHeader/SmallHeader";

const HistoryComponent = () => {
  const [Data, setData] = useState([]);
  const { fetchData } = useFetch();
  useEffect(() => {
    const data = fetchData();
    data
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        console.error(err);
      });
    setData;
  }, []);

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
                {Data?.map((item) => (
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
