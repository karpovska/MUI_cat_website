import * as React from "react";
import { ImageList, ImageListItem } from "@mui/material";
import { itemData } from "../data";

const Content = () => {
  return (
    <ImageList
      variant="masonry"
      cols={3}
      gap={10}
      classes={{ root: { margin: "auto" } }}
      sx={{ width: "90%", margin: "auto" }}
    >
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
  );
};

export default Content;
