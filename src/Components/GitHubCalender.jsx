import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import GitHub from "../Images/imgGitHub.webp";

  const data=[{count:"1200++",text:"hours of coding"},{count:"1000++",text:"hours of DSA"},{count:"10+",text:"Projects"}]

export default function GitHubCalender1() {
  return (
    <Box id="statistics" p="2rem 0rem" h="auto">
      <Heading className="heading-sec__main" mt="5%">
        {" "}
        Statistics{" "}
      </Heading>

      <Flex
        Flex
        w={["100%", "100%", "80%"]}
        m="auto"
        mt="7%"
        gap={'2rem'}
        alignItems="center"
        justifyContent={"space-between"}
        direction={["column", "column", "row"]}
      >
        {
          data.map((elem)=>(
            <Box className="donut instalment1">
          <div class="donut-default"></div>
          <div class="donut-line"></div>
          <div class="donut-text">
            <span> <strong>{elem.count}</strong>{elem.text}</span>
          </div>
          <div class="donut-case"></div>
        </Box>

          ))
        }
        
      </Flex>

      <Flex
        w={["100%", "100%", "90%"]}
        m="auto"
        mt="7%"
        alignItems="center"
        justifyContent={"space-between"}
        direction={"column"}
      >
        <Flex
          w={["100%", "100%", "90%"]}
          m="auto"
          mt="7%"
          alignItems="center"
          justifyContent={"space-between"}
          direction={["column", "column", "row"]}
        >
          <a href="https://github.com/SHARUN266">
            {" "}
            <Image src="http://github-readme-streak-stats.herokuapp.com?user=sharun266&theme=neon-dark" />{" "}
          </a>
          <a href="https://github.com/SHARUN266">
            <Image h="10rem" src={GitHub} alt="sharun266's GitHub stats" />
          </a>

          <p align="center">
            <a href="https://github.com/SHARUN266">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=sharun266&theme=radical"
                alt="sharun266's GitHub stats"
              />
            </a>
          </p>
        </Flex>

        {/* https://github-readme-stats.vercel.app/api/top-langs/?username=sharun266&theme=radical */}
        <Box w={["100%", "100%", "90%"]} m="auto" mt="5%">
          <a href="https://github.com/SHARUN266">
            {" "}
            <Image
              h={["100%", "100%", "9%"]}
              w="100%"
              src="https://github-readme-stats.vercel.app/api?username=SHARUN266&theme=radical&show_icons=true&hide=&count_private=true&hide_border=true&show_icons=true"
            />{" "}
          </a>
        </Box>
      </Flex>
    </Box>
  );
}
