import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";
import Main from "../Components/UI/Main";

export default function Public() {
  return (
    <Main>
      <Typography variant="h4" component="h1">
        Sign with Linkedin
      </Typography>
      <IconButton>
        <LinkedInIcon fontSize="large" />
      </IconButton>
    </Main>
  );
}
