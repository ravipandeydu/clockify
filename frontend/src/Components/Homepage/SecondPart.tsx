import { Box, Button, Flex, Text, Image } from '@chakra-ui/react';
import React from 'react'
import { Link } from "react-router-dom";
import "./SecondPart.css"

const SecondPart = () => {
    return (
        <Box>
            <Flex direction={"column"} align={"center"} gap={"25px"}>
                <Text w={["100%", "100%", "70%", "70%"]} fontSize={["2.4em", "2em", "2em", "2.3em"]} textAlign={["center", "center", "center", "center"]} mt="20px" px="25px">
                    The most popular free <span style={{ color: "#03A9F4", }}>time tracker</span> for teams
                </Text>

                <Text w={["100%", "100%", "70%", "50%"]} fontSize={"1.5em"} textAlign="center" px={["20px", "20px", "0px", "0px"]}>
                    Time tracking software used by millions. Clockify is a time tracker and timesheet app that lets you track work hours across projects.Unlimited users, free forever.
                </Text>

                <Link to={`/signup`} style={{ textDecoration: "none" }}>
                    <Button colorScheme={"twitter"}> START TRACKING TIME-IT'S FREE!</Button>
                </Link>
                <a target={"_blank"} href={"https://clockify.me/customers"}>  <Flex marginTop={"5px"} align={"center"}>
                    <Image src='https://clockify.me/assets/images/signed-up-icon.svg' />
                    <Text >146,047 people signed up last month</Text>
                </Flex>
                </a>

                <Image px={["20px", "20px", "20px", "20px"]} py="30px" src="https://clockify.me/assets/images/customers-light-gray-3.svg" alt="" />

     {/* <Box width={"90%"}>        <iframe width="100%" height="754" src="https://www.youtube.com/embed/NMZhFs_b0Aw" title="Clockify Tour" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Box>    */}
            </Flex>


        </Box>
    )
}

export default SecondPart