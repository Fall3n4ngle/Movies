import { Box, Image, Title, Text, createStyles } from "@mantine/core";
import { forwardRef } from "react";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineMovie } from "react-icons/md";
import { Link } from "react-router-dom";

interface Props {
  image: string;
  text: string;
  year: number;
  rating: number;
  mediaType: "movie" | "tv" | "person";
  itemId: number;
}

const useStyles = createStyles(() => ({
  wrapper: {
    height: "5em",
    display: "flex",
    alignItems: "center",
    gap: "0.8em",
    padding: "0.3em 0.5em",
    cursor: "pointer",
  },
  imageWrapper: {
    maxWidth: "65px",
    width: "100%",
  },
  description: {
    flexGrow: 1,
  },
  rating: {
    display: "flex",
    alignItems: "center",
    gap: "0.5em",
  },
}));

export const ResultCard = forwardRef<HTMLDivElement, Props>(
  ({ image, text, year, rating, itemId, mediaType }, ref) => {
    const { classes } = useStyles();

    return (
      <Link to={`/${mediaType}/${itemId}`}>
        <Box className={classes.wrapper} ref={ref}>
          <Box className={classes.imageWrapper}>
            <Image
              src={`${image}`}
              alt={`${text} image`}
              radius="sm"
              withPlaceholder
              placeholder={<MdOutlineMovie />}
            />
          </Box>
          <Box className={classes.description}>
            <Title order={4}>{text}</Title>
            <Text fz="sm">{year}</Text>
          </Box>
          <Box className={classes.rating}>
            <Text fz="sm">{rating}</Text>
            <AiFillStar />
          </Box>
        </Box>
      </Link>
    );
  }
);

ResultCard.displayName = "Result card";
