import * as React from "react";
import {
  ImageList,
  ImageListItem,
  Container,
  Box,
  Typography,
} from "@mui/material";
import { itemData } from "../data";

const Content = () => {
  return (
    <Container>
      <Box display="flex" justifyContent={"center"} sx={{ p: 4 }}>
        <Typography variant="h4">Waiting for their owners</Typography>
      </Box>
      <ImageList variant="masonry" cols={3} gap={10}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`/images/${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`/images/${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};

export default Content;
