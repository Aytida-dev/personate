import { Flex, Image } from "@chakra-ui/react";
import one from "../Images/one.png";
import two from "../Images/two.png";
import three from "../Images/three.png";
import four from "../Images/four.png";

export default function SmWorkFlow() {
  return (
    <Flex
      display={{ base: "flex", md: "none" }}
      position={"relative"}
      direction={"column"}
      alignItems={"center"}
      paddingBlock={"50px"}
    >
      <Flex>
        <Image src={one} />
      </Flex>
      <Flex>
        <Image src={two} />
      </Flex>
      <Flex>
        <Image src={three} />
      </Flex>
      <Flex>
        <Image src={four} />
      </Flex>
    </Flex>
  );
}
