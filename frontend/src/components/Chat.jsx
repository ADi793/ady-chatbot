import { Avatar, HStack, Text } from "@chakra-ui/react";
import { BeatLoader } from "react-spinners";
import React from "react";

const Chat = ({ chat }) => {
  return (
    <>
      <HStack paddingY="12px" paddingLeft={6} paddingRight={2}>
        <Avatar
          borderRadius="12px"
          size="md"
          name="Adil Siddiqui"
          colorScheme="green.800"
          display="flex"
          alignSelf="start"
        />
        <Text fontWeight="normal">{chat.question}</Text>
      </HStack>
      <hr />
      <HStack
        bg="gray.100"
        paddingY="12px"
        paddingLeft={6}
        paddingRight={2}
        // alignItems="initial"
      >
        <Avatar
          borderRadius="12px"
          size="md"
          name="Adil Siddiqui"
          colorScheme="green.800"
          display="flex"
          alignSelf="start"
        />
        {chat.answer ? (
          <Text
            fontWeight="normal"
            as="pre"
            // overflowWrap="break-word"
            style={{
              whiteSpace: "pre-wrap", // Enable text wrapping
            }}
          >
            {chat.answer}
          </Text>
        ) : (
          <BeatLoader size={10} color="white" />
        )}
        {/* <Text fontWeight="normal">{chat.answer}</Text> */}
      </HStack>
      <hr />
    </>
  );
};

export default Chat;
