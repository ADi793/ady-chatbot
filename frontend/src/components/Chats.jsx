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

const socket = io("http://localhost:3001/", {
  auth: {
    token: "abc",
  },
});

const Chats = () => {
  const user = useAuth();
  const [question, setQuestion] = useState("");
  const [recentChats, setRecentChats] = useState([
    {
      question: "hy",
      answer: "hy",
    },
    {
      question: "how are you",
      answer:
        "kdjfkl ajkfdj fjkd jfkdajflkdjfkadsl; jfkldsja flkd jkfdlaj fdlkjf lkdjf dklj         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, placeat         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, placeat         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, placeat         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, placeat         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, placeat                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, placeat         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, placeat.         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, placeat.        ",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    socket.emit("join", `user_${user.email}`);
    socket.on("greeting", (message) => {
      console.log(message);
    });
    socket.on("chat_answer", (chat) => {
      console.log("chat", chat);
      setIsLoading(false);
      setQuestion("");
      const newChats = recentChats.map((recentChat) => {
        console.log("recentChat", recentChat);
        return recentChat.answer ? recentChat : chat;
      });

      console.log("newChats", newChats);

      setRecentChats((prev) =>
        prev.map((recentChat) => (recentChat.answer ? recentChat : chat))
      );
    });

    return () => socket.disconnect();
  }, []);

  const handleChatSubmit = () => {
    setIsLoading(true);
    console.log("getFromLocalStorage(AUTH_KEY)", getFromLocalStorage(AUTH_KEY));
    console.log("emitting message");
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
          left: "288px",
          right: "10px",
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
