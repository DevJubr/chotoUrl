import { useState } from "react";
import {
  StyledHeader,
  StyledH1,
  Form,
  Input,
  FormGroup,
  Button,
  StyledError,
} from "./__HomeStyled";
import useUrl from "../../hook/useUrl";
import Loader from "../loader/Loader";

const HomeComponent = () => {
  const [url, setUrl] = useState("");
  const [haveError, setHaveError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { hendelSubmit } = useUrl({ setHaveError, setErrorMessage, url });

  return (
    <div className="Home">
      <StyledHeader>
        <StyledH1>Instantly Shorten Your URLs with Ease.</StyledH1>
      </StyledHeader>
      <Form onSubmit={hendelSubmit}>
        <FormGroup>
          <Input
            type="text"
            placeholder="Enter your long URL"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
          />
          {haveError && <StyledError>{errorMessage}</StyledError>}
          <Button type="submit">
            {haveError ? (
              <>
                generating <Loader />
              </>
            ) : (
              "Get Short Link "
            )}
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default HomeComponent;
