import { Card, Flex, Image, Text, Title } from "@mantine/core";
import { FC } from "react";
import { BsPersonCircle } from "react-icons/bs";

interface Props {
  image: string;
  character: string;
  name: string;
}

export const PersonCard: FC<Props> = ({ image, character, name }) => {
  return (
    <Card shadow="sm" padding="sm" radius="md">
      <Card.Section>
        <Image
          src={image}
          alt={`${name} photo`}
          height={270}
          placeholder={<BsPersonCircle size="4em" />}
          withPlaceholder
        />
      </Card.Section>
      <Card.Section p="xs">
        <Flex direction="column" align="center" gap="0.2rem" justify="center">
          <Title order={4} fw="bold">
            {character}
          </Title>
          <Text>{name}</Text>
        </Flex>
      </Card.Section>
    </Card>
  );
};
