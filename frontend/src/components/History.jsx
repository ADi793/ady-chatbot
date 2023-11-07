import {
  Avatar,
  Box,
  HStack,
  Heading,
  Icon,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { TbMessageChatbot } from "react-icons/tb";

const History = () => {
  return (
    <Box>
      <Heading fontSize="2xl" paddingBottom={6}>
        History
      </Heading>
      <List h="calc(100vh - 210px)" overflowY="scroll" paddingRight={1}>
        <ListItem paddingBottom={4} cursor="pointer">
          <HStack>
            <Icon as={TbMessageChatbot} boxSize={6} />
            <Text
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              what is your name and how do you do
            </Text>
          </HStack>
        </ListItem>
        <ListItem paddingBottom={4}>
          <HStack>
            <Icon as={TbMessageChatbot} boxSize={6} />
            <Text
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              what is your name and how do you do
            </Text>
          </HStack>
        </ListItem>
        <ListItem paddingBottom={4}>
          <HStack>
            <Icon as={TbMessageChatbot} boxSize={6} />
            <Text
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              what is your name and how what we have todo
            </Text>
          </HStack>
        </ListItem>
        <ListItem paddingBottom={4}>
          <HStack>
            <Icon as={TbMessageChatbot} boxSize={6} />
            <Text
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              what is your name and how do you do
            </Text>
          </HStack>
        </ListItem>
        <ListItem paddingBottom={4}>
          <HStack>
            <Icon as={TbMessageChatbot} boxSize={6} />
            <Text
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              what is your name and how do you do
            </Text>
          </HStack>
        </ListItem>
        <ListItem paddingBottom={4}>
          <HStack>
            <Icon as={TbMessageChatbot} boxSize={6} />
            <Text
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              what is your name and how do you do
            </Text>
          </HStack>
        </ListItem>
        <ListItem paddingBottom={4}>
          <HStack>
            <Icon as={TbMessageChatbot} boxSize={6} />
            <Text
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              what is your name and how do you do
            </Text>
          </HStack>
        </ListItem>
        <ListItem paddingBottom={4}>
          <HStack>
            <Icon as={TbMessageChatbot} boxSize={6} />
            <Text
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              what is your name and how do you do
            </Text>
          </HStack>
        </ListItem>
        <ListItem paddingBottom={4}>
          <HStack>
            <Icon as={TbMessageChatbot} boxSize={6} />
            <Text
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              what is your name and how do you do
            </Text>
          </HStack>
        </ListItem>
        <ListItem paddingBottom={4}>
          <HStack>
            <Icon as={TbMessageChatbot} boxSize={6} />
            <Text
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              what is your name and how do you do
            </Text>
          </HStack>
        </ListItem>
        <ListItem paddingBottom={4}>
          <HStack>
            <Icon as={TbMessageChatbot} boxSize={6} />
            <Text
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              what is your name and how do you do
            </Text>
          </HStack>
        </ListItem>
        <ListItem paddingBottom={4}>
          <HStack>
            <Icon as={TbMessageChatbot} boxSize={6} />
            <Text
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              what is your name and how do you do
            </Text>
          </HStack>
        </ListItem>
        <ListItem paddingBottom={4}>
          <HStack>
            <Icon as={TbMessageChatbot} boxSize={6} />
            <Text
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              what is your name and how do you do
            </Text>
          </HStack>
        </ListItem>
        <ListItem paddingBottom={4}>
          <HStack>
            <Icon as={TbMessageChatbot} boxSize={6} />
            <Text
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              what is your name and how do you do
            </Text>
          </HStack>
        </ListItem>
        <ListItem paddingBottom={4}>
          <HStack>
            <Icon as={TbMessageChatbot} boxSize={6} />
            <Text
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              what is your name and how do you do
            </Text>
          </HStack>
        </ListItem>
      </List>

      <HStack
        position="fixed"
        bottom={0}
        zIndex={999}
        left={0}
        padding="15px"
        width="260px"
        bg="blackAlpha.900"
      >
        <Avatar size="md" name="Ryan Florence" />
        <Text color="white">Adi Siddiqui</Text>
      </HStack>
    </Box>
  );
};

export default History;
