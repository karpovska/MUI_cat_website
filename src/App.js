import { Stack } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Banner from "./components/Banner";
//import Colors from "./styles/index";
import theme from "./styles/index";
import ActionIcons from "./components/ActionIcons/ActionIcons";
import NavBar from "./components/Header/Header";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={10}>
        <NavBar />
        <ActionIcons />
        <Banner />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
