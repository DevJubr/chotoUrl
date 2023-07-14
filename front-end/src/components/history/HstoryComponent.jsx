import { useEffect, useState } from "react";
import { StyledH1, StyledHeader } from "../Home/__HomeStyled";
import useFetch from "../../hook/useFetch";
import {
  MoreOutter,
  TableOutter,
  StyledTable,
  StyledTh,
  StyledTd,
} from "./__styledHistory";

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
      <StyledHeader>
        <StyledH1>
          Explore Your Short URL History and Navigate with Ease.
        </StyledH1>
      </StyledHeader>
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
                <tr>
                  <StyledTd>{item?.longUrl}</StyledTd>
                  <StyledTd>{item?.shortUrl}</StyledTd>
                  <StyledTd>{item?.history[0]?.createdTime}</StyledTd>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </TableOutter>
      </MoreOutter>
    </>
  );
};

export default HistoryComponent;
