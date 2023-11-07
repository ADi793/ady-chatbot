import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Grid } from "@chakra-ui/react";
import History from "../components/History";
import Chats from "../components/Chats";

function HomePage() {
  const navigate = useNavigate();
  const user = useAuth();

  useEffect(() => {
    if (!user) navigate("/auth/login");
  });

  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
      paddingLeft="15px"
      paddingTop="25px"
    >
      <History />
      <Chats />
    </Grid>
  );
}

export default HomePage;
