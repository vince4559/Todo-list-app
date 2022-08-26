import { Button, Heading, HStack, } from '@chakra-ui/react';

const Header = () => {
  return (
    <HStack justifyContent={'space-between'} p={5}>
    <Heading>Task Tracker</Heading>
    <Button>Add Task</Button>
   </HStack>
  )
};

export default Header;
