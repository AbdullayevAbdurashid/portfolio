import React from "react";
import Head from "next/head";
import {
  Button,
  Box,
  VStack,
  Text,
  Heading,
  SimpleGrid,
  chakra,
  Flex,
  Center,
} from "@chakra-ui/react";
import PageTransition from "../components/page-transitions";
import Section from "@/components/section";
import { TelegramLogo, ArrowUpRight, FileArrowDown } from "phosphor-react";
import ProjectCard from "@/components/project-card";
import { getTable } from "@/lib/airtable";
import Link from "@/components/link";
import SubscribeCard from "@/components/subscribe-card";
import VoxelDog from "@/components/voxelModel/model";
import { motion } from "framer-motion";
import { LINKEDIN_URL, TELEGRAM_URL } from "@/data/constants";
const Home = ({ projects }) => (
  <Box>
    <PageTransition>
      <VStack spacing={12}>
        <Section>
          <VStack spacing={4} align="start" fontSize="2xl">
            <chakra.h1
              fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
              textAlign="center"
              color={"blue.500"}
              lineHeight={"110%"}
              fontWeight="extrabold"
            >
              Hi{" "}
              <motion.div
                style={{
                  marginBottom: "-20px",
                  marginRight: "-45px",
                  paddingBottom: "20px",
                  paddingRight: "45px",
                  display: "inline-block",
                }}
                animate={{ rotate: 20 }}
                transition={{
                  repeat: 7,
                  repeatType: "mirror",
                  duration: 0.2,
                  delay: 0.5,
                  ease: "easeInOut",
                  type: "tween",
                }}
              >
                👋🏻
              </motion.div>
              , I'm Abdurashid
            </chakra.h1>

            <Box mb={200}>
              <VoxelDog />
            </Box>
            <VStack>
              <Text color={"primary"} fontWeight="400">
                I'm front-end developer and project manager in
                <Link
                  variant="text"
                  target="_blank"
                  href="https://www.youthinno.uz"
                >
                  &nbsp; Innovation centre.
                </Link>
                &nbsp; Sometimes, i also work on freelance websites like{" "}
                <Link
                  variant="text"
                  target="_blank"
                  isExternal
                  href="https://freelancehunt.com"
                >
                  Freelancehunt
                </Link>
                . I also hang out on{" "}
                <Link variant="text" target="_blank" href={TELEGRAM_URL}>
                  Telegram
                </Link>{" "}
                and{" "}
                <Link variant="text" target="_blank" href={LINKEDIN_URL}>
                  LinkedIn
                </Link>
                , where I learn, think and communicate with others.
              </Text>
            </VStack>
            <Box>
              <Link href="https://twitter.com/wirtzdan" unstyled>
                <Button
                  colorScheme="telegram"
                  rounded="xl"
                  size="lg"
                  leftIcon={<TelegramLogo weight="fill" />}
                  mt={4}
                >
                  Contact me on Telegram
                </Button>
              </Link>
              &nbsp;
              <Link href="https://twitter.com/wirtzdan" unstyled>
                <Button
                  colorScheme="yellow"
                  rounded="xl"
                  size="lg"
                  leftIcon={<FileArrowDown weight="fill" />}
                  mt={4}
                >
                  Open or download resume
                </Button>
              </Link>
            </Box>
          </VStack>
        </Section>
        <Section>
          <Flex>
            <Heading size="lg">Projects</Heading>
            <chakra.a color={"blue"} size="lg" href="" ml={"auto"}>
              view all
            </chakra.a>
          </Flex>

          <SimpleGrid columns={1} spacing={4} mt={8} w="100%">
            {projects.map((projects) => (
              <ProjectCard
                key={projects.id}
                name={projects.fields.name}
                description={projects.fields.description}
                logo={projects.fields.logo}
                link={projects.fields.link}
                type={projects.fields.type}
              />
            ))}
          </SimpleGrid>
        </Section>
        {/* <Section full={false} id="experince">
          <Heading size="lg">Expericence</Heading>
          <Skills />
        </Section> */}
      </VStack>
    </PageTransition>
  </Box>
);

export async function getStaticProps() {
  const projects = await getTable("Projects");

  return {
    props: {
      projects,
    },
    revalidate: 600,
  };
}

export default Home;
