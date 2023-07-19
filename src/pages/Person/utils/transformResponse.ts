import { IPersonCredits } from "../models/PersonCredits";

export const transformResponse = (response: IPersonCredits) => {
  if (response.cast) {
    response.cast = response.cast.sort((a, b) => {
      if (a.vote_average && b.vote_average) {
        return b.vote_average - a.vote_average;
      }
      return 1;
    });
  }

  if (response.crew) {
    response.crew = response.crew.sort((a, b) => {
      if (a.vote_average && b.vote_average) {
        return b.vote_average - a.vote_average;
      }
      return 1;
    });
  }

  return response;
};
