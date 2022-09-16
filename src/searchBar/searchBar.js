import { Box, Flex, Input } from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
    return ( 
<Box borderLeft='1px solid' borderColor='black' w='27vw' h='100vh'>
<Flex flexDirection='column'  alignItems='center' pl='14' pt='5' fontSize='20' gap='5' maxW='72'>
            <Input w='80' borderRadius='20' bg='#EFF3F4' Icon={<IoSearchOutline/>}
                placeholder='Search...'
               
            />
            </Flex>
        </Box>
     );
}
 
export default SearchBar;