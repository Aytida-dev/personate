import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function Greensection() {
  return (
    <Flex
      bg={"#285B52"}
      justifyContent={"center"}
      color={"white"}
      display={{ base: "none", lg: "flex" }}
    >
      <Flex direction={"column"} w={"70%"} marginBlock={"100px"} gap={"100px"}>
        <Heading fontSize={"60px"} fontWeight={"400"}>
          Why companies choose Asana
        </Heading>
        <Box
          w={"100%"}
          border={"1px solid white"}
          h={"1px"}
          opacity={"0.5"}
        ></Box>
        <Flex
          gap={"50px"}
          alignItems={"center"}
          fontSize={"30px"}
          //   paddingRight={"200px"}
          //   justifyContent={"space-between"}
        >
          <AiOutlineCheckCircle size={80} style={{ strokeWidth: "1" }} />
          <Text fontSize={"35px"} width={"25%"} fontWeight={"hairline"}>
            The only platform with goals built in
          </Text>
          <Text fontSize={"20px"} w={"40%"}>
            See related tasks, collaborators and progress to quickly achieve
            business goals.
          </Text>
        </Flex>
        <Box
          w={"100%"}
          border={"1px solid white"}
          h={"1px"}
          opacity={"0.5"}
        ></Box>
        <Flex
          gap={"50px"}
          alignItems={"center"}
          fontSize={"30px"}
          //   paddingRight={"200px"}
          //   justifyContent={"space-between"}
        >
          <AiOutlineCheckCircle size={80} style={{ strokeWidth: "1" }} />
          <Text fontSize={"35px"} width={"25%"} fontWeight={"hairline"}>
            Rated best for cross-team collaboration
          </Text>
          <Text fontSize={"20px"} w={"40%"}>
            Asana is rated as a leader in work management by industry experts.
          </Text>
        </Flex>
        <Box
          w={"100%"}
          border={"1px solid white"}
          h={"1px"}
          opacity={"0.5"}
        ></Box>
        <Flex
          gap={"50px"}
          alignItems={"center"}
          fontSize={"30px"}
          //   paddingRight={"200px"}
          //   justifyContent={"space-between"}
        >
          <AiOutlineCheckCircle size={80} style={{ strokeWidth: "1" }} />
          <Text fontSize={"35px"} width={"25%"} fontWeight={"hairline"}>
            Simple adoption, with less downtime
          </Text>
          <Text fontSize={"20px"} w={"40%"}>
            Get tailored support to help your teams easily migrate existing data
            and adopt Asana.
          </Text>
        </Flex>
        <Box
          w={"100%"}
          border={"1px solid white"}
          h={"1px"}
          opacity={"0.5"}
        ></Box>
        <Button
          variant={"solid"}
          bg={"white"}
          w={"200px"}
          h={"50px"}
          fontSize={"20px"}
        >
          See how it works
        </Button>
      </Flex>
    </Flex>
  );
}
