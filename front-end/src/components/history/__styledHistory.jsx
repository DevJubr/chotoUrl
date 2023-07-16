import styled from "styled-components";

export const MoreOutter = styled.div`
  padding: 1.5rem 0rem 0rem 2rem;
  border-radius: 30px;
  background: #27262c;
  box-shadow: 5px 5px 10px #1b1a1e, -5px -5px 10px #33323a;
  margin: 3.3rem 0 0 0;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const TableOutter = styled.div`
  width: 100%;
  overflow: auto;
  height: 600px;
  background: transparent;

  &::-webkit-scrollbar {
    width: 18px;
    height: 20px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #27262c;
    box-shadow: inset -5px -5px 10px #1b1a1e, inset 5px 5px 10px #33323a;
  }

  &::-webkit-scrollbar-corner {
    background: none;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: transparent;
  text-transform: lowercase;
  font-size: 0.8rem;
`;

export const ParentOfTble = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledTh = styled.th`
  text-transform: capitalize !important;
  text-align: left;
  padding: 1rem;
  position: sticky;
  top: 0;
  left: 0;
  background: #27262c;
`;

export const StyledTd = styled.td`
  text-align: left;
  padding: 1rem;

  a {
    /* transition: all 0.3s; */
    &:hover {
      border-bottom: 0.2px solid #dddddd5c;
    }
  }
`;
