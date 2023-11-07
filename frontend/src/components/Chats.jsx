import {
  Box,
  Button,
  Icon,
  InputGroup,
  InputRightElement,
  Textarea,
  Avatar,
  HStack,
  Text,
} from "@chakra-ui/react";
import { MdSend } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import useAuth from "../hooks/useAuth";
import Chat from "./Chat";
import { getFromLocalStorage } from "../utils/localStorage";
import { AUTH_KEY } from "../utils/constants";
import axios from "axios";
import { getRecent } from "../utils/list";

const socket = io("http://localhost:3001/");

const Chats = ({
  chatsHistory,
  setChatsHistory,
  recentChats,
  setRecentChats,
}) => {
  const user = useAuth();
  const [question, setQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    socket.emit("join", `user_${user.email}`);
    socket.on("chat_answer", async (chat) => {
      try {
        setIsLoading(false);
        setQuestion("");
        setRecentChats((prev) =>
          prev.map((recentChat) => (recentChat.answer ? recentChat : chat))
        );
        const savedChat = await axios.post(
          "http://localhost:3001/api/user/chats",
          chat,
          {
            headers: {
              "auth-token": getFromLocalStorage(AUTH_KEY),
            },
          }
        );
        setChatsHistory((prev) => [chat, ...prev]);
      } catch (error) {
        console.log("Error: ", error.message);
      }
    });

    return () => socket.disconnect();
  }, []);

  useEffect(() => {
    if (recentChats.length === 0) {
      setRecentChats(getRecent(chatsHistory, 5));
    }
  }, [chatsHistory]);

  const handleChatSubmit = () => {
    setIsLoading(true);
    setRecentChats([...recentChats, { question }]);
    socket.emit("chat_question", {
      auth_token: getFromLocalStorage(AUTH_KEY),
      data: {
        question,
      },
    });
  };

  return (
    <Box
      h="calc(100vh - 170px)"
      overflowY="scroll"
      overflowX="hidden"
      paddingTop="52px"
    >
      <Box>
        <Box>
          {Array.isArray(recentChats) &&
            recentChats.map((chat, key) => <Chat chat={chat} key={key} />)}
        </Box>
      </Box>
      <Box
        style={{
          position: "fixed",
          bottom: 0,
          left: "268px",
          right: "3px",
        }}
      >
        <InputGroup bg="white">
          <Textarea
            placeholder="Send a message"
            value={question}
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
          />
          <InputRightElement
            top="50%"
            transform="translateY(-50%)"
            marginRight={2}
          >
            <Button
              variant="outline"
              size="md"
              isDisabled={!question || isLoading}
              onClick={handleChatSubmit}
            >
              <Icon as={MdSend} boxSize={5} />
            </Button>
          </InputRightElement>
        </InputGroup>
      </Box>
    </Box>
  );
};

export default Chats;
