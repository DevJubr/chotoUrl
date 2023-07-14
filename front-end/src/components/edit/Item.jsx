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
import { AiOutlineDelete, AiOutlineEdit, AiOutlineSave } from "react-icons/ai";
import { useState } from "react";
import useFetch from "../../hook/useFetch";
const Item = ({ luri, suri, id, hendelReload }) => {
  //hooks
  const [editEnable, seteditEnable] = useState(false);
  const [editState, seteditState] = useState(luri);
  const { hendelUpdate, editHendel, hendelDelete } = useFetch();

  return (
    <Article>
      <Links>
        <UrlContainer>
          <RedDot />
          {editEnable ? (
            <Input
              type="text"
              value={editState}
              onChange={(ev) => seteditState(ev.target.value)}
            />
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
        <Button
          className="edit"
          onClick={(ev) =>
            editHendel(
              ev,
              seteditEnable,
              editEnable,
              id,
              editState,
              hendelReload,
              hendelUpdate
            )
          }
          name={editEnable ? "save" : "edit"}
        >
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
        <Button
          className="delete"
          onClick={() => hendelDelete(id, hendelReload)}
        >
          <AiOutlineDelete /> delete
        </Button>
      </Buttons>
    </Article>
  );
};

export default Item;
