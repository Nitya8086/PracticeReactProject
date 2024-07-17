import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";

const Topnav = ({title,onOpen}) => {
  return (
    <Box px="4">
      <HStack  maxW="60rem "  h="16" justify="space-between"  mx="auto">
        <Icon  as={FaBars} onClick={onOpen} display={{
          base:"block",
          lg:"none",
          
        }}/>
        <Heading fontWeight="medium" fontSize="28px">{title}</Heading>

        <Menu>
          <MenuButton>
            <Icon as={FaCircleUser} fontSize="24px"/>
          </MenuButton>
          <MenuList>
            <MenuItem>Login</MenuItem>
            <MenuItem>Support</MenuItem>
            
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default Topnav;
