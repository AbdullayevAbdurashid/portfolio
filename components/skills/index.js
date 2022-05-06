import React from "react";
import { skillsList } from "@/data/skills";
import {
  VStack,
  Tag,
  TagRightIcon,
  TagLabel,
  Avatar,
  HStack,
  Text,
  Box,
  background,
} from "@chakra-ui/react";
function Skills() {
  return (
    <div>
      <HStack spacing={4}>
        {skillsList.map((skill, index) => (
          <React.Fragment key={index}>
            <Box
              //   display={`flex`}
              //   alignItems={`center`}
              //   justifyContent={`center`}
              padding={`0.4rem 0.7rem 0.4rem 0.6rem`}
              transition={`all 0.25s ease-in-out`}
              lineHeight={`1.65`}
              borderColor={skill.color}
              borderWidth={1}
              m={2}
              borderRadius="full"
              _hover={{
                background: skill.color,
              }}
            >
              <HStack>
                {" "}
                <Text fontSize={"md"}> {skill.name}</Text>
                <TagRightIcon fontSize={"md"} color={skill.color}>
                  {" "}
                  {skill.icon}
                </TagRightIcon>
              </HStack>
            </Box>
          </React.Fragment>
        ))}
      </HStack>
    </div>
  );
}

export default Skills;
