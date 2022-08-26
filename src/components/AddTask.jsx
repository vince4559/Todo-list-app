import {Box, Button,  FormControl, FormLabel, Input,  VStack, useToast} from "@chakra-ui/react";
import { useState } from "react";


const AddTask = ({addTask}) => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!text){
      toast({
        position:'top',
        title:'Add Task',
        description:'task cannot be empty',
        status:'error',
        duration: 2000,
        isClosable:true,
      })
     return
    }
    addTask({text, date})
    setText('')
    setDate('')
  }
 

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <VStack p={5} mx={10}>
          <FormControl >
            <FormLabel>Task</FormLabel>
            <Input type={'text'} 
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder={'add task'} />
          </FormControl>
          <FormControl >
            <FormLabel>Date & Time</FormLabel>
            <Input type={'text'} 
              value={date}
              onChange={e => setDate(e.target.value)}
              placeholder={'date & time'} />
          </FormControl>
          <Button type="submit" colorScheme={'green'}  w={'full'}>Save Task</Button>
        </VStack>
      </form>
    </Box>
  )
};

export default AddTask;
