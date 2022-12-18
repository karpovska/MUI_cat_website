import * as React from "react";
import {
  ImageList,
  ImageListItem,
  Container,
  Box,
  Typography,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
import { itemData } from "../data";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Colors} from "../../styles/index"

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
          <ImageListItemBar
            title={ item.title}
            actionIcon={<IconButton>
              <FavoriteIcon sx={{color:Colors.dove_gray, "&:hover": { color: Colors.info }}}/>
            </IconButton>}
          />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};

export default Content;
