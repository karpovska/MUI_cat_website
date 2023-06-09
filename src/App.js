import { Stack } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Banner from "./components/Banner";
//import Colors from "./styles/index";
import theme from "./styles/index";
import ActionIcons from "./components/ActionIcons/ActionIcons";
import NavBar from "./components/Header/Header";
import Content from "./components/Content";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={10} alignItems="center">
        <NavBar />
        <ActionIcons />
        <Banner />
        <Content />
        <Footer />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
