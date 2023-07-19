import { FC, RefObject, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Box, Flex, Pagination, Text } from "@mantine/core";
import { POSTER_PATH } from "@shared/const/env";

import { getItemReviews } from "../api/getItemReviews";

import { ReviewCard } from "./ReviewCard";

export interface ItemReviewsProps {
  variant: "movie" | "tv";
  itemId: string;
  titleRef: RefObject<HTMLHeadElement>;
}

export const ItemReviews: FC<ItemReviewsProps> = ({ itemId, variant, titleRef }) => {
  const [page, setPage] = useState(1);

  const { data: reviews } = useQuery({
    queryKey: [variant, itemId, "reviews"],
    queryFn: () => getItemReviews(itemId, variant),
  });

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    titleRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (!reviews?.results.length) {
    return <Text>No reviews yet</Text>;
  }

  return (
    <Box>
      <Flex direction="column" gap="lg">
        {reviews.results.map((review) => (
          <ReviewCard
            key={review.id}
            author={review.author ?? "No author"}
            avatarPath={`${POSTER_PATH}/${review.author_details?.avatar_path}`}
            content={review.content ?? "No content"}
            createdAt={review.created_at}
            updatedAt={review.updated_at}
          />
        ))}
      </Flex>
      {reviews.total_pages > 1 && (
        <Flex justify="center" align="center" mt="xl">
          <Pagination total={reviews.total_pages} value={page} onChange={handlePageChange} />
        </Flex>
      )}
    </Box>
  );
};
