import { useState } from "react";
import {
  StyledHeader,
  StyledH1,
  Form,
  Input,
  FormGroup,
  Button,
} from "./__HomeStyled";

const HomeComponent = () => {
  const [url, seturl] = useState("");
  console.log(url);
  return (
    <>
      <div className="Home">
        <StyledHeader>
          <StyledH1>Instantly Shorten Your URLs with Ease.</StyledH1>
        </StyledHeader>
        <Form>
          <FormGroup>
            <Input
              type="text"
              placeholder="enter your long url"
              value={url}
              onChange={(ev) => seturl(ev.target.value)}
            />
            <Button>get short link</Button>
          </FormGroup>
        </Form>
      </div>
    </>
  );
};

export default HomeComponent;
