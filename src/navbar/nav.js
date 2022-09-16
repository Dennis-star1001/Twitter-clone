import { Avatar, Box, Button, Flex, Text, WrapItem } from "@chakra-ui/react";
import { BsTwitter, BsPerson } from 'react-icons/bs';
import { RiHome7Fill } from 'react-icons/ri';
import { HiOutlineHashtag } from 'react-icons/hi';
import { IoNotificationsOutline, IoBookmarkOutline } from 'react-icons/io5';
import { RiFileList2Line } from 'react-icons/ri';
import { VscMail } from 'react-icons/vsc';
import { TbDotsCircleHorizontal } from 'react-icons/tb';

const Navbar = () => {
    const Navigation = ({ icon, title, link }) => {
        return (
            <Box display='flex' gap='5' alignItems='center'  >{icon}<a href={link} >{title}</a></Box>
        )
    }
    return (
        <Box>
            <Box borderRight='1px solid' borderColor='black' w='24vw' h='100vh'>
                <Flex flexDirection='column' alignItems='' pl='14' pt='5' fontSize='20' gap='5' maxW='72'>
                    <BsTwitter fill="#1DA1F2" size='32' />


                    <Navigation
                        icon={<RiHome7Fill size='28' />}
                        title={'Home'}

                    />
                    <Navigation
                        icon={<HiOutlineHashtag size='28' />}
                        title={'Explore'}

                    />
                    <Navigation
                        icon={<IoNotificationsOutline size='28' />}
                        title={'Notifications'}

                    />
                    <Navigation
                        icon={<VscMail size='28' />}
                        title={'Messages'}

                    /><Navigation
                        icon={<IoBookmarkOutline size='28' />}
                        title={'Bookmarks'}

                    />
                    <Navigation
                        icon={<RiFileList2Line size='28' />}
                        title={'Lists'}

                    />
                    <Navigation
                        icon={<BsPerson size='28' />}
                        title={'Profile'}

                    />
                    <Navigation
                        icon={<TbDotsCircleHorizontal size='28' />}
                        title={'More'}

                    />
                    <Button p='6' bg='#1DA1F2' color='white' borderRadius='24'>Tweet</Button>
                    <WrapItem display='flex' gap='3'>
                        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                        <Flex flexDirection='column'>
                        <Text fontSize='16' fontWeight='bold'>Dennis</Text>
                        <Text fontSize='14'>@dev_ayodeji</Text>
                        </Flex>
                       
                    </WrapItem>
                </Flex>
            </Box>

        </Box>
    );
}
{/* <FontAwesomeIcon icon="fa-brands fa-twitter" /> */ }
export default Navbar;