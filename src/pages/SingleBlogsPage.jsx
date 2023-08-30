import { useParams } from "react-router-dom";
import blogs from "../assets/blogs.json";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
} from "@chakra-ui/react";

import b1 from "../Images/b1.webp";
import b2 from "../Images/b2.webp";
import b3 from "../Images/b3.png";
import b10 from "../Images/b10.png";
import b5 from "../Images/b5.webp";
import b6 from "../Images/b6.webp";
import b7 from "../Images/b7.png";
import b9 from "../Images/b9.png";
export default function SingleBlogsPage() {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === id);
  const { title, desc } = blog;

  const images = [b1, b2, b3, b10, b5, b6, b7, b1, b9];

  return (
    <Box>
      <Card w={{ base: "90%", md: "70%" }} m={"auto"}>
        <CardHeader>
          <Flex gap={"10px"} direction={"column"} alignItems={"center"}>
            <Image
              src={images[id - 1]}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              width={"80%"}
              h={"auto"}
              marginBlock={"50px"}
            />
            <Heading size="xl" textAlign={"center"}>
              {title}
            </Heading>
          </Flex>
          {/* <Flex justifyContent={"end"} gap={"10px"}>
            <Text py="2" opacity={"50%"}>
              by : {createdBy} || {newDate}
            </Text>
          </Flex> */}
        </CardHeader>
        <hr></hr>
        <CardBody fontSize={"30px"} textAlign={"center"}>
          {desc}
        </CardBody>
      </Card>
    </Box>
  );
}
