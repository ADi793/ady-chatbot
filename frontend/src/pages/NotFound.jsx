import { Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      as="main"
      h="calc(100vh - 63px)"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Button colorScheme="teal" variant="solid" onClick={() => navigate("/")}>
        Back to home
      </Button>
    </Box>
  );
};

export default NotFound;
