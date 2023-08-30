import { Flex } from "@chakra-ui/react";
import TopHead from "../components/TopHead";
import TopImgSection from "../components/TopImgSection";
import SmWorkFlow from "../components/SmWorkflow";
import AccordianSection from "../components/AccordianSection";
import Greensection from "../components/GreenSection";
import Accordian2Section from "../components/Accordian2Section";
import GetStartedSection from "../components/GetstartedSection";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <>
      <Flex direction={"column"} bg={"#EEEBEA"}>
        <TopHead />
        <TopImgSection />
      </Flex>
      <SmWorkFlow />
      <AccordianSection />
      <Greensection />
      <Accordian2Section />
      <GetStartedSection />
    </>
  );
}
