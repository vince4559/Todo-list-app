import { Button, Heading, HStack, } from '@chakra-ui/react';


const Header = ({show, setShow}) => {

  return (
    <HStack justifyContent={'space-between'} p={5}>
    <Heading 
      fontSize={['2xl', '3xl', '5xl']}
      textShadow={'2px 2px black'} 
      color='yellowgreen'>
      Task Tracker
    </Heading>
    <Button 
        onClick={() =>setShow(!show)}
       colorScheme={show? 'red' : 'green'}>
      {show? 'Close' : 'Add Task'}
    </Button>
   </HStack>
  )
};

export default Header;
