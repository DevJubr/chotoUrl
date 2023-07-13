import { AiOutlineDelete, AiOutlineEdit, AiOutlineSave } from "react-icons/ai";
import {
  Article,
  Button,
  Buttons,
  GreenDot,
  Input,
  Links,
  RedDot,
  Url,
  UrlContainer,
} from "./EdPageStyled";
import { useState } from "react";
const Item = () => {
  const [editEnable, seteditEnable] = useState(false);

  const editHendel = () => {
    seteditEnable(!editEnable);
  };

  return (
    <Article>
      <Links>
        <UrlContainer>
          <RedDot />
          {editEnable ? (
            <Input type="text" value={"ongejdhfwugfwu.com"} />
          ) : (
            <Url>longejdhfwugfwu.com</Url>
          )}
        </UrlContainer>
        <UrlContainer>
          <GreenDot />
          <Url>longejdhfwugfwu.com</Url>
        </UrlContainer>
      </Links>

      <Buttons>
        <Button className="edit" onClick={editHendel}>
          {editEnable ? (
            <>
              <AiOutlineSave /> save
            </>
          ) : (
            <>
              <AiOutlineEdit /> edit
            </>
          )}
        </Button>
        <Button className="delete">
          <AiOutlineDelete /> delete
        </Button>
      </Buttons>
    </Article>
  );
};

export default Item;
