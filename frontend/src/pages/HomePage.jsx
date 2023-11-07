import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Grid, useFormControlStyles } from "@chakra-ui/react";
import History from "../components/History";
import Chats from "../components/Chats";
import axios from "axios";
import { getFromLocalStorage } from "../utils/localStorage";
import { AUTH_KEY } from "../utils/constants";
import { getRecent } from "../utils/list";

function HomePage() {
  const [chatsHistory, setChatsHistory] = useState([]);
  const [recentChats, setRecentChats] = useState(getRecent(chatsHistory, 5));
  const navigate = useNavigate();
  const user = useAuth();

  useEffect(() => {
    if (!user) return navigate("/auth/login");

    axios
      .get("http://localhost:3001/api/user/me", {
        headers: {
          "auth-token": getFromLocalStorage(AUTH_KEY),
        },
      })
      .then(({ data }) => {
        setChatsHistory(data.user.chats.reverse());
        // console.log("res", res);
      })
      .catch((error) => {
        console.log("Error occured: ", error.message);
      });
  }, [user]);

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
      <History
        chatsHistory={chatsHistory}
        recentChats={recentChats}
        setRecentChats={setRecentChats}
      />
      <Chats
        chatsHistory={chatsHistory}
        setChatsHistory={setChatsHistory}
        recentChats={recentChats}
        setRecentChats={setRecentChats}
      />
    </Grid>
  );
}

export default HomePage;
