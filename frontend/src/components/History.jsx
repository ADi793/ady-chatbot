import {
  Avatar,
  Box,
  HStack,
  Heading,
  Icon,
  List,
  ListItem,
  Text,
  useToast,
} from "@chakra-ui/react";
import { TbMessageChatbot } from "react-icons/tb";
import useAuth from "../hooks/useAuth";

const History = ({ chatsHistory, recentChats, setRecentChats }) => {
  const user = useAuth();
  const toast = useToast();

  const handleHistoryChatClick = (chat) => {
    const recentChat = recentChats.find(
      (recentChat) => recentChat._id === chat._id
    );

    if (recentChat) {
      toast({
        title: "Already Opened.",
        description:
          "We've already opened for you please scroll the chats to see.",
        status: "success",
        duration: 1500,
        isClosable: true,
      });
    } else {
      setRecentChats((prev) => [...prev, chat]);
      toast({
        title: "Chat Opened.",
        description: "We've opened for you please scroll the chats to see.",
        status: "success",
        duration: 1500,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      <Heading fontSize="2xl" paddingBottom={6}>
        History
      </Heading>
      <List h="calc(100vh - 210px)" overflowY="scroll" paddingRight={1}>
        {Array.isArray(chatsHistory) &&
          chatsHistory.map((chat) => (
            <ListItem
              paddingBottom={4}
              cursor="pointer"
              key={chat._id}
              onClick={
                () => handleHistoryChatClick(chat)
                // toast({
                //   title: "Account created.",
                //   description: "We've created your account for you.",
                //   status: "success",
                //   duration: 1500,
                //   isClosable: true,
                // })
              }
            >
              <HStack>
                <Icon as={TbMessageChatbot} boxSize={6} />
                <Text
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }}
                >
                  {chat.question}
                </Text>
              </HStack>
            </ListItem>
          ))}
      </List>
      <HStack
        position="fixed"
        bottom={0}
        zIndex={999}
        left={0}
        padding="15px"
        paddingY="12px"
        width="265px"
        bg="blackAlpha.900"
      >
        <Avatar size="md" name={user.name} borderRadius="12px" />
        <Text color="white">{user.name}</Text>
      </HStack>
    </Box>
  );
};

export default History;
