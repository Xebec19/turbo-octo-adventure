import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import { Link, useRouteError } from "react-router-dom";

const Title = styled(Typography)`
  margin: auto;
  text-align: center;
  margin: 8px 0px 8px 0px;
`;

const Send = styled(Link)`
  display: block;
  color: dodgerblue;
  font-size: 2rem;
  text-align: center;
  margin: 8px 0px 8px 0px;
`;

const ErrorMessage = styled(Typography)`
  font-size: 2rem;
  text-align: center;
  margin: 8px 0px 8px 0px;
`;

export default function ErrorPage() {
  let error = useRouteError();
  console.log(error);

  return (
    <>
      <Title variant="h1" component="h1">
        Oops!
      </Title>
      <Send to="/">Go To Home</Send>
      <ErrorMessage color="textSecondary">
        {error.statusText || error.message}
      </ErrorMessage>
    </>
  );
}
