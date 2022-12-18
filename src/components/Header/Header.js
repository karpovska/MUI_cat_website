import { AppBar, Toolbar, Typography } from "@mui/material";
import "@fontsource/allison";
import NavMenu from "./NavMenu/NavMenu";
import BackMenu from "./BackMenu/BackMenu";
import RightIcons from "./RightIcons/RightIcons";
import { Colors } from "../../styles/index";

function NavBar() {
  return (
    <AppBar sx={{ background: "#fff" }}>
      <Toolbar>
        <BackMenu />
        <Typography
          variant="h2"
          sx={{
            flexGrow: 1,
            color: Colors.primary,
            textAlign: "center",
            fontFamily: '"Allison", "cursive"',
          }}
        >
          Cats&Friends
        </Typography>
        <NavMenu />
        <RightIcons />
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
