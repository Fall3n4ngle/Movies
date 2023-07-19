import { Box, Chip, createStyles } from "@mantine/core";
import { IGenre } from "@models";
import { FC, useState } from "react";

interface Props {
  genres: IGenre[];
  onAddGenre(genre: number): void;
  onRemoveGenre(genre: number): void;
}

const useStyles = createStyles((theme) => ({
  genresWrapper: {
    paddingRight: "10px",
    paddingLeft: "10px",
    display: "flex",
    gap: "1.8rem",
    flexWrap: "nowrap",
    overflowX: "scroll",

    "&::-webkit-scrollbar": {
      display: "none",
    },

    " -ms-overflow-style": "none",
    "scrollbar-width": "none",

    [theme.fn.largerThan("sm")]: {
      paddingRight: "20px",
      paddingLeft: "20px",
      gap: "2rem",
    },
  },
}));

export const GenresList: FC<Props> = ({ genres, onAddGenre, onRemoveGenre }) => {
  const { classes } = useStyles();

  const [allGenres, setAllGenres] = useState(genres);
  const [selectedGenres, setSelectedGenres] = useState<IGenre[]>([]);

  const handleAdd = (genre: IGenre) => {
    setSelectedGenres((prev) => [...prev, genre]);
    setAllGenres((prev) => prev.filter((g) => g.id !== genre.id));
    onAddGenre(genre.id);
  };

  const handleRemove = (genre: IGenre) => {
    setSelectedGenres((prev) => prev.filter((g) => g.id !== genre.id));
    setAllGenres((prev) => [...prev, genre]);
    onRemoveGenre(genre.id);
  };

  return (
    <Box className={classes.genresWrapper}>
      {selectedGenres.map((genre) => (
        <Chip key={genre.id} onClick={() => handleRemove(genre)} checked>
          {genre.name}
        </Chip>
      ))}
      {allGenres.map((genre) => (
        <Chip key={genre.id} onClick={() => handleAdd(genre)}>
          {genre.name}
        </Chip>
      ))}
    </Box>
  );
};
