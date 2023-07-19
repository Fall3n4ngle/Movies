import { Box, Image, createStyles } from "@mantine/core";
import { FC } from "react";
import { IImage } from "@models";
import { POSTER_PATH } from "@shared/const/env";

interface Props {
  images: IImage[];
}

const useStyles = createStyles(() => ({
  wrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gridAutoFlow: "dense",
    gridAutoRows: "200px",
    gap: "10px",
  },
  galleryItem: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "10px",
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
}));

export const Gallery: FC<Props> = ({ images }) => {
  const { classes } = useStyles();

  return (
    <>
      <Box className={classes.wrapper}>
        {images.map((image) => (
          <Box className={classes.galleryItem} key={image.file_path}>
            <Image src={`${POSTER_PATH}/${image.file_path}`} className={classes.image} />
          </Box>
        ))}
      </Box>
    </>
  );
};
