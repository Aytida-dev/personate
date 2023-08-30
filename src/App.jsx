import { Box, Flex } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import TopHead from "./components/TopHead";
import TopImgSection from "./components/TopImgSection";
import AccordianSection from "./components/AccordianSection";
import Greensection from "./components/GreenSection";
import Accordian2Section from "./components/Accordian2Section";
import GetStartedSection from "./components/GetstartedSection";
import Footer from "./components/Footer";
import SmWorkFlow from "./components/SmWorkflow";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <Box h={"100%"} color={"black"} fontFamily={"gordita"} mt={"60px"}>
      <Navbar />
      <Box>
        <BrowserRouter>
          <AllRoutes />
        </BrowserRouter>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
