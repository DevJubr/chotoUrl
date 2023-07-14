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
const Item = ({ luri, suri }) => {
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
            <Url>{luri.slice(0, 24)}...</Url>
          )}
        </UrlContainer>
        <UrlContainer>
          <GreenDot />
          <Url>{suri}</Url>
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
