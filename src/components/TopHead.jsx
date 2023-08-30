import { Button, Flex, Heading, Text } from "@chakra-ui/react";

export default function TopHead() {
  return (
    <Flex justifyContent={"center"} mt={"70px"} paddingInline={"40px"}>
      <Flex
        direction={"column"}
        w={{ base: "auto", md: "500px" }}
        textAlign={{ base: "left", md: "center" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        h={{ base: "350px", md: "300px" }}
        // bg={"lightblue"}
      >
        <Heading fontWeight={"light"} fontSize={{ base: "44px", md: "52px" }}>
          The best platform for cross-functional work
        </Heading>
        <Text fontSize={"20px"}>
          Want more efficiency in your organization? Asana is easy for all teams
          to use, so you can deliver quality work, faster.
        </Text>
        <Flex justifyContent={"space-around"} width={"100%"}>
          <Button
            variant={"solid"}
            bg={"black"}
            color={"white"}
            width={"150px"}
            h={"49px"}
            borderRadius={"5px"}
            fontSize={"20px"}
            fontWeight={"400"}
            fontStyle={"inherit"}
            _hover={{
              bg: "red.500",
            }}
          >
            Get Started
          </Button>
          <Button
            variant={"outline"}
            width={"200px"}
            h={"49px"}
            borderRadius={"5px"}
            fontSize={"20px"}
            fontWeight={"550"}
            border={"1px solid black"}
            fontStyle={"inherit"}
          >
            See how it works
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
