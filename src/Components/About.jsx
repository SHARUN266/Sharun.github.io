import { Box, Flex, Text, Image, Heading } from "@chakra-ui/react";
import React from "react";
import Typewriter from "typewriter-effect";

export default function About() {
  return (
    <Box h="80vh"  alignItems={'center'}>
        <Heading className="heading-sec__main" mt="5%">ABOUT ME</Heading>
      <Flex  w="80%" h="60%"   alignItems={'center'} justifyContent={'space-between'} m="auto">
        <Box display={'flex'}  justifyContent={'center'} w="25%" h="80%">
          <Image h="100%" w="100%" borderRadius={'rounded'} src="https://raw.githubusercontent.com/SHARUN266/umage/main/RoundeImage.png?token=GHSAT0AAAAAABVPBKQICWEEAUAOJU6SY4QMYY4ZJVA" alt="sharun" />
        </Box>
        
        <Box  w="50%" textAlign={'justify'} >
          <Box className="about__content-main">
            <Box fontWeight={'bold'} fontSize='2xl'>
            <Typewriter
              options={{
                strings: ["Get to know me!"],
                autoStart: true,
                loop: true,
              }}
            />
            </Box>
            <Box mt="2%"  className="about__content-details" >
              <Text fontSize={'18px'}   >
                Hey! It's
                <strong> Sharun </strong>
                and I'm a <strong> Full Stack developer </strong> 
                 I have completed my full stack development course from
                <strong> Masai School </strong>
                which duration of <strong>30 Weeks</strong> and at Masai School we get hands on experience to learn front-end  technologies  <strong>1200+ hours </strong>
                of coding and <strong>1000+ hours</strong> of Data structure and algorithim.
              </Text>
              <p className="about__content-details-para">
              A physics graduate and a full-stack web developer with a passion for developing scalable web applications and tools that will drastically improve efficiency and performance. Looking forward to an esteemed organization to contribute and to sharpen my skills as a <strong>MERN developer</strong> .
                
              </p>
            </Box>
            {/* <a href="./#contact" className="btn btn--med btn--theme dynamicBgClr"
              >Contact</a
            > */}
          </Box>
          </Box>
        
      </Flex>
    </Box>
  );
}