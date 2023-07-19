import { Button } from "@mantine/core";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(-1)}
      variant="subtle"
      leftIcon={<FaChevronLeft />}
      styles={() => ({
        root: {
          padding: 0,
          transition: "transform 0.2s linear",

          "&:hover": {
            background: "none",
            transform: "scale(1.1)",
          },
        },
      })}
    >
      Back
    </Button>
  );
};
