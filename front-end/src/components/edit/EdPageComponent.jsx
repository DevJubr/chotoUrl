import { StyledH1, StyledHeader } from "../Home/__HomeStyled";
import { Section } from "./EdPageStyled";
import Item from "./Item";

const EdPageComponent = () => {
  return (
    <>
      <StyledHeader>
        <StyledH1>Manage Your Short URLs.</StyledH1>
      </StyledHeader>

      <Section>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Section>
    </>
  );
};

export default EdPageComponent;
