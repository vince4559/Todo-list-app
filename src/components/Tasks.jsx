
import { SmallCloseIcon } from "@chakra-ui/icons";
import { Box,  HStack, Text,  IconButton,  Stack,  Heading } from "@chakra-ui/react";


const Tasks = ({tasks, deleteTask}) => {
  return (
     <Box p={5} mx={10} >
        {tasks.map(task => 
         <Stack key={task.id} mb={3} borderBottom={'black solid 1px'} >
          <HStack justify={'space-between'} >
          <Heading fontSize={'lg'} >{task.text}</Heading>
          <IconButton  icon={<SmallCloseIcon />} 
            onClick={() => deleteTask(task.id)}
            color="red"  
            colorScheme={'none'}/>
         </HStack>
         <Text>{task.date}</Text>
         </Stack>
        )}
     </Box>
  )
};

export default Tasks;
