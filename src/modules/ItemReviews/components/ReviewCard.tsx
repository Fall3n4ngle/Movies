import { Avatar, Card, Group, Spoiler, Text, Title, createStyles } from "@mantine/core";
import { FC } from "react";

interface Props {
  avatarPath: string;
  author: string;
  createdAt: string | undefined;
  updatedAt: string | undefined;
  content: string;
}

const useStyles = createStyles((theme) => ({
  content: {
    fontSize: "0.8rem",
    textAlign: "justify",

    [theme.fn.largerThan("sm")]: {
      fontSize: "0.9rem",
    },

    [theme.fn.largerThan("md")]: {
      fontSize: "1rem",
    },
  },
  title: {
    fontSize: "1.4rem",

    [theme.fn.largerThan("md")]: {
      fontSize: "1.5rem",
    },
  },
}));

export const ReviewCard: FC<Props> = ({ author, avatarPath, content, createdAt, updatedAt }) => {
  const { classes } = useStyles();

  const date = new Date(updatedAt ?? createdAt ?? "").toUTCString();

  return (
    <Card radius="lg" p="md">
      <Group align="center">
        <Avatar src={avatarPath} radius="xl" size="md" variant="filled" />
        <Title order={2} className={classes.title}>
          {author}
        </Title>
        <Text italic fz="sm">
          {date}
        </Text>
      </Group>
      <Spoiler
        maxHeight={120}
        hideLabel="Show less"
        showLabel="Show more"
        mt="lg"
        className={classes.content}
      >
        {content}
      </Spoiler>
    </Card>
  );
};
