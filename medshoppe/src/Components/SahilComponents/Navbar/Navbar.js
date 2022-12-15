import React from 'react'
import { Box, Center, Flex, Image, Input, InputGroup, InputLeftAddon, InputRightAddon, Show, Text } from '@chakra-ui/react';
import { AiFillCaretDown, AiOutlineSearch } from 'react-icons/ai';
import { TbDiscount2 } from 'react-icons/tb';
import { CgProfile } from 'react-icons/cg';
import { BsCartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Navbardrawer from './Navbar_drawer';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate=useNavigate();
    return (

        <Box w={"100vw"} h={"9rem"} backgroundColor={"#10847e"} pl={"20"}  pos='sticky'  zIndex={"10"} >
            <Flex gap={"6rem"} className="nav1" >
                <Box onClick={()=>navigate("/")} cursor="pointer" boxSize='90px' mt={"4"}>
                    <Image src='https://i.ibb.co/s5mNPnz/1.png' alt='logo' borderRadius={"50%"} />
                </Box>

                <Show breakpoint='(min-width: 1180px)'>
                    <Box>
                        <InputGroup mt={"5"} size="lg">
                            <InputLeftAddon children={["Select Pincode", <AiFillCaretDown />]} />
                            <Input bgColor={"white"} w={"40vw"} placeholder='phone number' />
                            <InputRightAddon children={<AiOutlineSearch h={8} color="gray.500" />} />
                        </InputGroup>
                    </Box>
                </Show>

            </Flex>
            <Show breakpoint='(min-width: 1180px)'>
                <Flex ml={"15rem"} p="0 27px" w={"70vw"} justifyContent="space-between">

                    <Flex gap={"16px"}>
                        <Link to={"/"}><Text fontSize={"lg"} color="white" >Order Medicines</Text></Link>
                        <Link to={"/"}>
                            <Text fontSize={"lg"} color="white" >Healthcare Products</Text>
                        </Link>
                        <Link to={"/"}>
                            <Text fontSize={"lg"} color="white" >Lab tests</Text>
                        </Link>
                        <Link to={"/"}>
                            <Text fontSize={"lg"} color="white" >RTPCR</Text>
                        </Link>
                    </Flex>


                    <Flex gap={"13px"}>
                        <Link to={"/"}>
                            <Center alignItems={"center"}>
                                <TbDiscount2 color="white" fontSize={"20px"} />
                                <Text fontSize={"lg"} color="white" w={"55px"}>Offers </Text>
                            </Center>
                        </Link>

                        <Link to={"/"}>
                            <Center>
                                <CgProfile color="white" fontSize={"20px"} />
                                <Text fontSize={"lg"} color="white" w={"115px"}>Login/Signup</Text>
                            </Center>
                        </Link>
                        <Link to={"/"}>
                            <Center>
                                <BsCartFill color="white" />
                                <Text fontSize={"lg"} color="white" w={"40px"}>  Cart</Text>
                            </Center>
                        </Link>
                    </Flex>
                </Flex>
            </Show>


            <Show breakpoint='(max-width: 1179px)'>
                <Box pos="absolute" top="10" right={"10"}><Navbardrawer /></Box>
            </Show>
        </Box>
    )
}

export default Navbar