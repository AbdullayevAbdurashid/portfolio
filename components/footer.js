import React from "react";
import {
  HStack,
  Button,
  useColorMode,
  Text,
  useColorModeValue,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import {
  GITHUB_URL,
  TWITTER_URL,
  LINKEDIN_URL,
  YOUTUBE_URL,
  EMAIL_URL,
} from "@/data/constants";
import Container from "../components/container";
import NextLink from "next/link";
import { PencilAltIcon, MailIcon } from "@heroicons/react/outline";
import {
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";
import Link from "./link";

const Footer = () => {
  const date = new Date().getFullYear();

  function FooterLink(props) {
    const { href, name, ...rest } = props;

    return (
      <NextLink href={href} passHref>
        <Button
          variant="unstyled"
          {...rest}
          color={useColorModeValue("neutral.800", "neutralD.800")}
          _hover={{ color: useColorModeValue("neutral.1000", "neutralD.1000") }}
        >
          {name}
        </Button>
      </NextLink>
    );
  }

  return (
    <Container>
      <HStack
        justify="space-between"
        w="100%"
        display={{ base: "none", md: "flex" }}
        my={8}
      >
        <FooterLink
          href="mailto:abdulllayevabdurashid@gmail.com"
          name="Contact"
        />
        <Text
          fontSize="sm"
          color={useColorModeValue("neutral.800", "neutralD.800")}
        >
          © {date} Abdullaev Abdurashid{" "}
        </Text>
        <HStack spacing={4}>
          <Link href={TWITTER_URL} isExternal unstyled>
            <IconButton
              size="sm"
              icon={<Icon as={TwitterLogo} weight="fill" />}
              color={useColorModeValue("neutral.800", "neutralD.1000")}
            ></IconButton>
          </Link>
          <Link href={LINKEDIN_URL} target="_blank" isExternal unstyled>
            <IconButton
              size="sm"
              icon={<LinkedinLogo weight="fill" />}
              color={useColorModeValue("neutral.800", "neutralD.1000")}
            ></IconButton>
          </Link>
          <Link href={GITHUB_URL} target="_blank" isExternal unstyled>
            <IconButton
              size="sm"
              icon={<GithubLogo weight="fill" />}
              color={useColorModeValue("neutral.800", "neutralD.1000")}
            ></IconButton>
          </Link>
          <Link href={YOUTUBE_URL} target="_blank" unstyled isExternal>
            <IconButton
              size="sm"
              icon={<YoutubeLogo weight="fill" />}
              color={useColorModeValue("neutral.800", "neutralD.1000")}
            ></IconButton>
          </Link>
        </HStack>
        <FooterLink href="/privacy" name="Privacy" />
      </HStack>
    </Container>
  );
};
export default Footer;
