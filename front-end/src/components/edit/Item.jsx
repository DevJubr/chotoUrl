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
import axios from "axios";
const Item = ({ luri, suri, id, hendelReload }) => {
  const [editEnable, seteditEnable] = useState(false);
  const [editState, seteditState] = useState(luri);
  const editHendel = (ev) => {
    seteditEnable(!editEnable);

    if (ev.target.name === "save") {
      const hendelUpdate = async (_id, updatedUrl) => {
        try {
          const response = await axios.patch(
            "http://localhost:8000/api/v1/urlupdate",
            { _id, updatedUrl },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (response.status === 200) {
            console.log("update successfully");
          }
        } catch (error) {
          console.log("updated error :", error);
        }
      };
      hendelUpdate(id, editState);
      hendelReload();
    }
  };

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
          onClick={editHendel}
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
        <Button className="delete">
          <AiOutlineDelete /> delete
        </Button>
      </Buttons>
    </Article>
  );
};

export default Item;
