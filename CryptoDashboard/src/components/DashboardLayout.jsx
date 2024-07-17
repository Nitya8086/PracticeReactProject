import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Sidenav from "./Sidenav";
import Topnav from "./Topnav";
import SideDrawer from "./SideDrawer";


const DashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex>
      
        <Sidenav  onOpen={onOpen}/> 
     <SideDrawer isOpen ={isOpen} onClose={onClose}/>
      
      <Box flexGrow={1}>
        <Topnav title={title} onOpen={onOpen} />
        <Container
          px="4"
          maxW="60rem"
          bg="green"
        >
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;