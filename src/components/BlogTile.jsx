import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import b1 from "../Images/b1.webp";
import b2 from "../Images/b2.webp";
import b3 from "../Images/b3.png";
import b10 from "../Images/b10.png";
import b5 from "../Images/b5.webp";
import b6 from "../Images/b6.webp";
import b7 from "../Images/b7.png";
import b9 from "../Images/b9.png";
import { Link } from "react-router-dom";

export default function BlogTile({ title, summary, bottext, id }) {
  const images = [b1, b2, b3, b10, b5, b6, b7, b1, b9];
  return (
    <Card maxW="sm">
      <CardBody
        _hover={{
          boxShadow: "0px 0px 10px 0px rgba(0,0,10,0.1)",
          transition: "0.3s",
          color: "blue",
        }}
      >
        <Link to={`/blog/${id}`}>
          <Image
            src={images[id - 1]}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            h={"200px"}
          />
          <Stack mt="6" spacing="3">
            <Heading size="md" fontWeight={"500"}>
              {title}
            </Heading>
            <Text fontSize={"12px"} opacity={"0.5"} color={"black"}>
              OCT 12 2023
            </Text>
            <Text opacity={"0.6"} color={"black"}>
              {summary}
            </Text>
          </Stack>
        </Link>
      </CardBody>
      <Divider opacity={"0.1"} />
      <CardFooter>
        <Text colorScheme="blue" fontSize={"15px"} color={"#81B8D4"}>
          {bottext}
        </Text>
      </CardFooter>
    </Card>
  );
}
