import { Box, SimpleGrid } from "@chakra-ui/react";
import BlogTile from "../components/BlogTile";
import blogs from "../assets/blogs.json";
export default function Blogpage() {
  return (
    <Box>
      <SimpleGrid
        templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
        gap={6}
        padding={6}
        w={{ base: "90%", md: "70%" }}
        margin={"auto"}
      >
        {blogs.map((blog) => (
          <BlogTile
            title={blog.title}
            summary={blog.summary}
            bottext={blog.bottext}
            id={blog.id}
            key={blog.id}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
