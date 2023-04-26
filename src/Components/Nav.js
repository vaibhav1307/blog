import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading, Text } from '@chakra-ui/react';

function Nav() {
  return (
    <Box width="200px" flex="1 0 auto" pr="2em">
      <Heading>Nav</Heading>
      <Text mb="1em">
        <Link as={Link} to="/">Homepage</Link>
      </Text>
      <Text mb="1em">
        <Link as={Link} to="/blog">Blog</Link>
      </Text>
    </Box>
  );
}

export default Nav;
