import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(-1);
  }, [navigate]);

  return null;
};

export default NotFoundPage;
