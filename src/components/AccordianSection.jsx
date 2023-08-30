import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import amazon from "../Images/amazon.webp";
import png from "../Images/png.webp";
import johnson from "../Images/johnson.webp";
import mckesson from "../Images/mckesson.webp";
import marketing from "../Images/marketing.webp";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function AccordianSection() {
  return (
    <Flex
      direction={"column"}
      alignItems={"center"}
      justifyContent={"space-between"}
      mt={"10px"}
      display={{ base: "none", xl: "flex" }}
    >
      <Flex w={"70%"} alignItems={"center"} justifyContent={"space-between"}>
        <Flex direction={"column"} gap={"20px"}>
          <Text fontSize={"2xl"} fontWeight={"600"}>
            80% of Fortune 100 companies use Asana
          </Text>
          <Text fontSize={"20px"} fontWeight={"200"}>
            See how customers use Asana
          </Text>
        </Flex>
        <Flex justifyContent={"space-between"} w={"60%"}>
          <Image src={amazon} boxSize={"150px"} objectFit={"contain"} />
          <Image src={png} boxSize={"150px"} objectFit={"contain"} />
          <Image src={johnson} boxSize={"150px"} objectFit={"contain"} />
          <Image src={mckesson} boxSize={"150px"} objectFit={"contain"} />
        </Flex>
      </Flex>

      <Box
        w={"70%"}
        border={"1px solid grey"}
        opacity={"0.3"}
        mb={"50px"}
      ></Box>

      <Heading fontSize={"6xl"} fontWeight={"300"} mb={"50px"}>
        See how teams use Asana
      </Heading>
      <Flex justifyContent={"center"} w={"70%"}>
        <Tabs position="relative" variant="unstyled" width={"100%"}>
          <TabList>
            <Tab fontSize={"30px"} width={"20%"}>
              <Text lineHeight={"30px"}>Marketing teams</Text>
            </Tab>
            <Tab fontSize={"30px"} width={"20%"} isDisabled>
              <Text lineHeight={"30px"}>IT teams</Text>
            </Tab>
            <Tab fontSize={"30px"} width={"20%"} isDisabled>
              <Text lineHeight={"30px"}>Operation teams</Text>
            </Tab>
            <Tab fontSize={"30px"} width={"20%"} isDisabled>
              <Text lineHeight={"30px"}>Project management</Text>
            </Tab>
            <Tab fontSize={"30px"} width={"20%"} isDisabled>
              <Text lineHeight={"30px"}>Strategic planning</Text>
            </Tab>
          </TabList>
          <TabIndicator mt="12px" height="5px" bg="black" borderRadius="1px" />
          <TabPanels>
            <TabPanel>
              <Flex w={"100%"} bg={"#EEEBEA"} mt={"50px"}>
                <Flex
                  w={"50%"}
                  alignItems={"start"}
                  direction={"column"}
                  paddingLeft={"100px"}
                  paddingTop={"100px"}
                  gap={"20px"}
                >
                  <Heading
                    fontSize={"45px"}
                    fontWeight={"hairline"}
                    paddingRight={"100px"}
                  >
                    Deliver impactful marketing strategies
                  </Heading>
                  <Box
                    w={"40%"}
                    h={"1px"}
                    border={"1px solid black"}
                    opacity={"0.3"}
                  ></Box>
                  <Flex alignItems={"center"} gap={"10px"}>
                    <AiOutlineCheckCircle />
                    <Text fontSize={"20px"}>
                      Collaborate on cross-team work for campaigns
                    </Text>
                  </Flex>
                  <Flex alignItems={"center"} gap={"10px"}>
                    <AiOutlineCheckCircle />
                    <Text fontSize={"20px"}>
                      Help teams quickly refocus around shifting business needs
                    </Text>
                  </Flex>
                  <Flex alignItems={"center"} gap={"10px"}>
                    <AiOutlineCheckCircle />
                    <Text fontSize={"20px"}>
                      Automate processes for approvals
                    </Text>
                  </Flex>
                  <Button
                    variant={"solid"}
                    bg={"black"}
                    color={"white"}
                    w={"200px"}
                    h={"50px"}
                    fontSize={"20px"}
                    fontWeight={"400"}
                  >
                    Explore marketing
                  </Button>
                </Flex>
                <Flex w={"50%"}>
                  <Image src={marketing} w={"100%"} />
                </Flex>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
  );
}
