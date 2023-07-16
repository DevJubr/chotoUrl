import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  width: 300px;
  height: 200px;
  padding: 2rem;
  border-radius: 0.6rem;
  background: #27262c;
  box-shadow: 9px 9px 17px #222126, -9px -9px 17px #2c2b32;
`;

export const Links = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
`;

export const Dot = styled.div`
  border-radius: 19px;
  width: 8px;
  height: 8px;
`;

export const RedDot = styled(Dot)`
  background: #ff7575;
  box-shadow: inset -1px -1px 3px #db6565, inset 1px 1px 3px #ff8585;
`;

export const GreenDot = styled(Dot)`
  background: #75ff91;
  box-shadow: inset -1px -1px 3px #65db7d, inset 1px 1px 3px #85ffa5;
`;

export const Url = styled.p`
  color: white;
  a {
    &:hover {
      border-bottom: 0.2px solid #dddddd5c;
    }
  }
`;

export const UrlContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled.button`
  background: none;
  border: none;
  color: var(--offText);
  text-transform: capitalize;
  border: 0.3px solid #ffffff38;
  padding: 0.322rem 0.6rem;
  border-radius: 0.2rem;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  cursor: pointer;
`;
export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  margin: 4rem 0;
  &.secAtive {
    width: 100%;
    height: 450px;
  }
  @media only screen and (max-width: 1200px) {
    &.secAtive {
      width: 100%;
      height: unset;
    }
  }
`;
export const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 0.55rem;
  background: #27262c;
  box-shadow: inset 6px 6px 7px #1b1b1f, inset -6px -6px 7px #333139;
  color: aliceblue;
  padding: 0.6rem;
`;
export const Btttnss = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 0;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const ListItem = styled.li`
  &.active {
    border-radius: 50%;
    background: #27262c;
    box-shadow: inset -4px -4px 8px #1c1b1f, inset 4px 4px 8px #323139;
    color: var(--text);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    font-size: 1.2rem;
    @media only screen and (max-width: 400px) {
      width: 2.4rem;
      height: 2.4rem;
      font-size: 0.8rem;
    }
  }
`;

export const ButtonPagi = styled.button`
  width: 4rem;
  height: 4rem;
  color: var(--text);
  border-radius: 50%;
  background: #27262c;
  box-shadow: inset -8px -8px 15px #1c1b1f, inset 8px 8px 15px #323139;
  border: none;
  outline: none;
  text-transform: capitalize;
  cursor: pointer;

  @media only screen and (max-width: 400px) {
    width: 3rem;
    height: 3rem;
    svg {
      height: 1rem;
      width: 1rem;
    }
  }
`;
