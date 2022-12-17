import { List, Typography, Grid, ListItemText, ListItem } from "@mui/material";
import { Box } from "@mui/system";
import Colors from "../../styles/index";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <Box
      sx={{
        background: "#333",
        color: "white",
        p: 10,
        pt: 10,
        pb: 10,
        fontsize: "14px",
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        <Grid item md={6} lg={4}>
          <Typography
            variant="body1"
            textTransform="uppercase"
            marginBottom="1em"
          >
            About us
          </Typography>
          <Typography variant="caption2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <Box sx={{ mt: 4, color: "#d5d5d5" }}>
            <FacebookIcon sx={{ mr: 2 }}></FacebookIcon>
            <TwitterIcon sx={{ mr: 2 }}></TwitterIcon>
            <InstagramIcon sx={{ mr: 2 }}></InstagramIcon>
          </Box>
        </Grid>
        <Grid item md={6} lg={2}>
          <Typography
            variant="body1"
            textTransform="uppercase"
            marginBottom="1em"
          >
            Information
          </Typography>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Lorem ipsum
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Privacy & Policy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Terms & Conditions
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <Typography
            variant="body1"
            textTransform="uppercase"
            marginBottom="1em"
          >
            My account
          </Typography>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Initiative and projects
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Favorite animals
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Account
              </Typography>
            </ListItemText>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
