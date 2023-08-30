import { Flex, Heading, Image, Text } from "@chakra-ui/react";

import getstarted from "../Images/getstarted.png";
import smallgetstarted from "../Images/smallgetstarted.png";

export default function GetStartedSection() {
  return (
    <Flex
      justifyContent={"center"}
      paddingBlock={"100px"}
      bg={"#EEEBEA"}
      w={"100%"}
    >
      <Flex
        w={{ base: "90%", lg: "80%" }}
        direction={"column"}
        display={{ base: "none", md: "flex" }}
      >
        <Heading fontSize={"40px"} fontWeight={"400"} mb={"50px"}>
          Get Started easily
        </Heading>
        <Text fontSize={"20px"} opacity={"0.7"} mb={"40px"}>
          Whether you want to start with a pre-built template for marketing,
          operations, product, learn more from a demo, or talk to our support
          team, Asana can help with that.
        </Text>
        <Image src={getstarted} />
      </Flex>
      <Flex display={{ base: "flex", md: "none" }}>
        <Image src={smallgetstarted} />
      </Flex>
    </Flex>
  );
}
