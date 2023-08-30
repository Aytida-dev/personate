import { Flex, Image } from "@chakra-ui/react";
import footer from "../Images/footer.png";
import footerbot from "../Images/footerbot.png";
import smfooter from "../Images/smfooter.png";

export default function Footer() {
  return (
    <Flex bg={"black"} w={"100%"} alignItems={"center"} direction={"column"}>
      <Flex
        w={{ base: "100%", md: "70%" }}
        alignItems={"center"}
        pt={"100px"}
        direction={"column"}
      >
        <Image src={footer} />
      </Flex>
      <Flex
        h={"100px"}
        w={"100%"}
        bg={"#2A2B2C"}
        justifyContent={"center"}
        display={{ base: "none", md: "flex" }}
      >
        <Image src={footerbot} height={"100px"} width={"1200px"} />
      </Flex>
      <Flex
        h={"300px"}
        w={"100%"}
        bg={"#2A2B2C"}
        justifyContent={"center"}
        display={{ base: "flex", md: "none" }}
      >
        <Image src={smfooter} height={"300px"} />
      </Flex>
    </Flex>
  );
}
