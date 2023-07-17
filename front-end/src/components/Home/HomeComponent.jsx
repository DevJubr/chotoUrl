import { useEffect, useState } from "react";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
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
  const [loader, setloader] = useState(false);
  const [Iscopyed, setIscopyed] = useState(false);
  const [haveError, setHaveError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { hendelSubmit, Respons, hendelClick } = useUrl({
    setHaveError,
    setErrorMessage,
    url,
    setUrl,
    setloader,
    setIscopyed,
  });

  useEffect(() => {
    if (Iscopyed) {
      const Timer = setTimeout(() => {
        setIscopyed(false);
      }, 100);

      return () => clearTimeout(Timer);
    }
  }, [Iscopyed]);

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
            value={
              Iscopyed ? url : Respons?.shortUrl ? `${Respons?.shortUrl}` : url
            }
            onChange={(event) => setUrl(event.target.value)}
          />
          {haveError && <StyledError>{errorMessage}</StyledError>}

          <Button
            type={Iscopyed ? "button" : "submit"}
            name={!loader && Respons?.shortUrl ? "copy" : null}
            onClick={(e) =>
              hendelClick(e, `http://localhost:8000/${Respons?.shortUrl}`)
            }
          >
            {(Iscopyed ? (
              <>
                copyed <IoCheckmarkDoneOutline />
              </>
            ) : null) ||
              (!loader && Respons?.shortUrl ? "copytocboadr" : null) ||
              (loader ? (
                <>
                  generating <Loader />
                </>
              ) : (
                "Shorten"
              ))}
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default HomeComponent;
