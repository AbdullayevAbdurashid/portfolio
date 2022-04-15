import React from "react";
import Section from "./section";
import { items } from "../data/chronology";
import { Chrono } from "react-chrono";
import { Box, SimpleGrid, HStack } from "@chakra-ui/react";
function Chronology() {
  return (
    <HStack>
      <Chrono
        scrollable
        items={items}
        cardPositionHorizontal={"BOTTOM"}
        theme={{
          secondary: "#ECECEC",
        }}
        hideControls
        mode="VERTICAL"
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Chrono>
    </HStack>
  );
}

export default Chronology;
