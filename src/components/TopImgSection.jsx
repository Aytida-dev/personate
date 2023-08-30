import { Flex, Image, Text } from "@chakra-ui/react";
import middle from "../Images/middle.webp";
import lside1 from "../Images/lside1.webp";
import lside2 from "../Images/lside2.webp";
import lside3 from "../Images/lside3.webp";
import lside4 from "../Images/lside4.webp";
import rside1 from "../Images/rside1.webp";
import rside2 from "../Images/rside2.webp";
import rside3 from "../Images/rside3.webp";
import rside4 from "../Images/rside4.webp";
import sm1 from "../Images/sm1.webp";
import sm2 from "../Images/sm2.webp";
import { useEffect, useState } from "react";

export default function TopImgSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [movePosition, setMovePosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    //make moveposition to go from 0 to 5 and then to -5 and then to 0 infinitely
    const interval = setInterval(() => {
      if (movePosition === 5) {
        setMovePosition(-5);
      } else if (movePosition === -5) {
        setMovePosition(0);
      } else {
        setMovePosition(movePosition + 1);
      }
    }, 1000);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const columnMargin = scrollPosition > 0 ? "50px" : "100px";
  const columnTransition = "margin-top 1.5s ease-out";

  return (
    <Flex
      justifyContent="space-between"
      p={4}
      pt={"100px"}
      paddingInline={0}
      overflow="hidden"
      width="100%"
    >
      {/* First column */}
      <Flex
        flex="1"
        overflowX="hidden"
        position="relative"
        borderRadius="10px"
        height={"420px"}
        direction={"column"}
        gap={"20px"}
        style={{
          marginTop: columnMargin,
          transition: columnTransition,
        }}
        boxShadow="0px 0px 1px rgba(0, 0, 0, 0.15)"
        display={{ base: "none", md: "flex" }}
      >
        <Flex gap={"20px"}>
          <Image
            src={lside1}
            width="200px"
            height="200px"
            style={{ objectFit: "cover" }}
            borderRadius={"10px"}
          />
          <Image
            src={lside2}
            width="250px"
            height="200px"
            style={{ objectFit: "cover" }}
            borderRadius={"10px"}
          />
        </Flex>
        <Flex gap={"20px"}>
          <Image
            src={lside3}
            width="250px"
            height="200px"
            style={{ objectFit: "cover" }}
            borderRadius={"10px"}
          />
          <Image
            src={lside4}
            width="200px"
            height="200px"
            style={{ objectFit: "cover" }}
            borderRadius={"10px"}
          />
        </Flex>
      </Flex>

      {/* Middle column */}
      <Flex
        flex="1.5"
        overflow="hidden"
        position="relative"
        bg="white"
        borderRadius="10px"
        width={"1050px"}
        h={"500px"}
        boxShadow="0px 0px 100px rgba(0, 0, 0, 0.35)"
        display={{ base: "none", md: "flex" }}
      >
        <Image
          src={middle}
          width="1050px"
          height="550px"
          style={{ objectFit: "cover" }}
        />
      </Flex>

      {/* Last column */}
      <Flex
        flex="1"
        overflowX="hidden"
        position="relative"
        borderRadius="10px"
        height={"420px"}
        direction={"column"}
        gap={"20px"}
        boxShadow="0px 0px 1px rgba(0, 0, 0, 0.15)"
        style={{
          marginTop: columnMargin,
          transition: columnTransition,
        }}
        display={{ base: "none", md: "flex" }}
      >
        <Flex gap={"20px"} justifyContent={"flex-end"}>
          <Image
            src={rside1}
            width="200px"
            height="200px"
            style={{ objectFit: "cover" }}
            borderRadius={"10px"}
          />
          <Image
            src={rside2}
            width="250px"
            height="200px"
            style={{ objectFit: "cover" }}
            borderRadius={"10px"}
          />
        </Flex>
        <Flex gap={"20px"} justifyContent={"flex-end"}>
          <Image
            src={rside3}
            width="250px"
            height="200px"
            style={{ objectFit: "cover" }}
            borderRadius={"10px"}
          />
          <Image
            src={rside4}
            width="200px%"
            height="200px"
            style={{ objectFit: "cover" }}
            borderRadius={"10px"}
          />
        </Flex>
      </Flex>

      {/* Small screen */}
      <Flex
        display={{ base: "flex", md: "none" }}
        position={"relative"}
        w={"100%"}
        h={"800px"}
      >
        <Image
          src={sm1}
          width="50%"
          height="auto"
          position={"absolute"}
          zIndex={1}
          left={"15%"}
        />
        <Image
          src={sm2}
          width="50%"
          height="auto"
          position={"absolute"}
          left={"40%"}
          top={"100px"}
        />
        <Text
          position={"absolute"}
          bg={"white"}
          zIndex={4}
          w={"40%"}
          textAlign={"center"}
          borderRadius={"10px"}
          height={"30px"}
          pt={"5px"}
          fontWeight={"bold"}
          top={"40px"}
          left={"35%"}
          transition={"left 1s ease-out"}
        >
          Collect creative Feedback
        </Text>
        <Text
          position={"absolute"}
          bg={"white"}
          zIndex={4}
          w={"40%"}
          textAlign={"center"}
          borderRadius={"10px"}
          height={"30px"}
          pt={"5px"}
          fontWeight={"bold"}
          top={"150px"}
          left={"55%"}
        >
          Get budget sign-off
        </Text>
        <Text
          position={"absolute"}
          bg={"white"}
          zIndex={4}
          w={"40%"}
          textAlign={"center"}
          borderRadius={"10px"}
          height={"30px"}
          pt={"5px"}
          fontWeight={"bold"}
          top={"320px"}
          left={"25%"}
        >
          Launch brand campaign
        </Text>
      </Flex>
    </Flex>
  );
}
