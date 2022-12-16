import { Container } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Banner from "./components/Banner";
import Content from "./components/Content";
import Colors from "./styles/index";
import theme from "./styles/index";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: Colors.white }}>
        <Banner />
        <Content />
      </Container>
    </ThemeProvider>
  );
}

export default App;
