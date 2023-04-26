import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Flex, 
  Heading, 
  Text, 
  Link, 
  Button
} from '@chakra-ui/react';
import axios from 'axios';

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get('../db/db.xml')
      .then(response => {
        parseString(response.data, (err, result) => {
          const blogs = result.blogs.blog.map(blog => {
            return {
              id: blog.id[0],
              title: blog.title[0],
              author: blog.author[0],
              date: blog.date[0],
              content: blog.content[0],
              summary: blog.summary[0]
            }
          });
          setBlogs(blogs);
        })
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  return (
    <Flex 
      height="100vh" 
      direction="row"
      padding="2em"
      flexWrap="wrap"
      justifyContent="space-between"
    >
      <Box width="200px" flex="1 0 auto" pr="2em">
        <Heading>Nav</Heading>
        <Link href="/">Homepage</Link>
      </Box>
      <Box width="100%" flex="2 0 auto" pl="2em">
        {blogs.map(blog => (
          <Box mb="2em" key={blog.id}>
            <Heading as="h2">{blog.title}</Heading>
            <Text>
              By {blog.author} | {blog.date}
            </Text>
            <Text>{blog.summary}</Text>
            <Button 
              as="a" 
              href={`/blog/${blog.id}`}
            >
              Read More
            </Button>
          </Box>
        ))}
      </Box>
    </Flex>
  );
}

export default Blog;