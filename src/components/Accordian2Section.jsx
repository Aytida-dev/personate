import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import accordimg from "../Images/accordimg.webp";
import work from "../Images/work.png";

export default function Accordian2Section() {
  return (
    <Flex
      justifyContent={"center"}
      w={"100%"}
      bg={"black"}
      paddingBlock={"200px"}
    >
      <Flex w={{ base: "100%", xl: "70%" }} bg={"black"}>
        <Flex
          direction={"column"}
          w={"50%"}
          pr={"40px"}
          display={{ base: "none", md: "flex" }}
        >
          <Text fontSize={"15px"} fontWeight={"400"} color={"white"}>
            STREAMLINE YOUR WORK AND PROCESSES
          </Text>
          <Text fontSize={"50px"} color={"white"}>
            Prioritize revenue-driving work
          </Text>
          <Text fontSize={"20px"} color={"white"}>
            Asana helps you organize complex work across teams to drive business
            outcomes.
          </Text>

          <Accordion color={"white"} mt={"100px"}>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    color={"white"}
                    fontSize={"25px"}
                  >
                    Automate your workflows
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text textAlign={"left"} w={"80%"} fontSize={"20px"}>
                  Put tasks on autopilot like assigning work, setting due dates,
                  and more.
                </Text>
                <Button
                  variant={"ghost"}
                  color={"blue"}
                  mt={"10px"}
                  fontSize={"19px"}
                  ml={"-20px"}
                >
                  Get Started
                </Button>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    color={"white"}
                    fontSize={"25px"}
                  >
                    Streaming your reports
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text textAlign={"left"} w={"80%"} fontSize={"20px"}>
                  Put tasks on autopilot like assigning work, setting due dates,
                  and more.
                </Text>
                <Button
                  variant={"ghost"}
                  color={"blue"}
                  mt={"10px"}
                  fontSize={"19px"}
                  ml={"-20px"}
                >
                  Get Started
                </Button>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    color={"white"}
                    fontSize={"25px"}
                  >
                    Manage your intakes
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text textAlign={"left"} w={"80%"} fontSize={"20px"}>
                  Put tasks on autopilot like assigning work, setting due dates,
                  and more.
                </Text>
                <Button
                  variant={"ghost"}
                  color={"blue"}
                  mt={"10px"}
                  fontSize={"19px"}
                  ml={"-20px"}
                >
                  Get Started
                </Button>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    color={"white"}
                    fontSize={"25px"}
                  >
                    Connect for work purposes
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text textAlign={"left"} w={"80%"} fontSize={"20px"}>
                  Put tasks on autopilot like assigning work, setting due dates,
                  and more.
                </Text>
                <Button
                  variant={"ghost"}
                  color={"blue"}
                  mt={"10px"}
                  fontSize={"19px"}
                  ml={"-20px"}
                >
                  Get Started
                </Button>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
        <Flex
          w={"50%"}
          alignItems={"center"}
          display={{ base: "none", md: "flex" }}
        >
          <Image src={accordimg} h={"70%"} w={"100%"} />
        </Flex>

        <Flex
          display={{ base: "flex", md: "none" }}
          direction={"column"}
          color={"white"}
        >
          <Image src={work} />
          <Text paddingInline={"70px"} mb={"50px"}>
            From creative production to customer onboarding and everything in
            between, run workflows that work for you.
          </Text>
          <Text paddingInline={"70px"}>Explore workflow builder</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
