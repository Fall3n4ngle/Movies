import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { Table, Title } from "@mantine/core";
import { ItemDescription } from "@components";
import { POSTER_PATH } from "@shared/const/env";
import { useItemTitleStyles } from "@shared/styles/ItemTitle";

import { getPersonById } from "../../api/getPersonById";

export interface PersonDescriptionProps {
  personId: string;
}

export const PersonDescription: FC<PersonDescriptionProps> = ({ personId }) => {
  const { data: personDetails } = useQuery({
    queryFn: () => getPersonById(personId),
    queryKey: ["person", personId, "details"],
  });

  const { classes } = useItemTitleStyles();

  const description = (
    <>
      <Title order={2} size="h1" mb="md" className={classes.title}>
        {personDetails?.name ?? "No data"}
      </Title>
      <Title order={3} mb="sm" className={classes.subTitle}>
        About person
      </Title>
      <Table fontSize="md">
        <tbody>
          <tr>
            <td>Career: </td>
            <td>{personDetails?.known_for_department ?? "No data"}</td>
          </tr>
          <tr>
            <td>Birthday: </td>
            <td>{personDetails?.birthday ?? "No data"}</td>
          </tr>
          {personDetails?.deathday && (
            <tr>
              <td>Deathday: </td>
              <td>{personDetails?.known_for_department ?? "No data"}</td>
            </tr>
          )}
          <tr>
            <td>Place of birth: </td>
            <td>{personDetails?.place_of_birth ?? "No data"}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );

  return (
    <ItemDescription
      posterPath={`${POSTER_PATH}/${personDetails?.profile_path}`}
      posterAlt={`${personDetails?.name} poster`}
      overview={personDetails?.biography ?? "No overview yet"}
      description={description}
    />
  );
};
