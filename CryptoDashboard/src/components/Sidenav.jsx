import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi"; 

const Sidenavx = () => {
  const navLinks = [
    {
      icon: BiSolidDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transactions",
      link: "/transactions",
    },
  ];
  return (
    <Stack justify="space-between" boxShadow="lg" w="16rem" h="100vh"

    display={{
      base:"none",
      lg:"flex"
    }}
    >
     <Box>
     <Heading pt="3.5rem" textAlign="center" fontSize="20px">
        @DOSOMECODING
      </Heading>
      <Box mt="6" mx="3">
        {navLinks.map((nav, key) => (
          <HStack
          key={nav.text}
          borderRadius="10px"
          py="3"
          px="4"
          _hover={{
            bg: "#F3F3F7",
            color: "#171717",
          }}
          color="#797E82">
            <Icon as={nav.icon} />
            <Text fontWeight="medium" fontSize="14px">
              {nav.text}
            </Text>
          </HStack>
        ))}
      </Box>
      </Box>
     <Box mt="6" mx="3" mb="6 ">
     <HStack
          borderRadius="10px"
          py="3"
          px="4"
          _hover={{
            bg: "#F3F3F7",
            color: "#171717",
          }}
          color="#797E82">
            <Icon as={BiSupport}/>
            <Text fontWeight="medium" fontSize="14px">
        Support
            </Text>
          </HStack> 
     </Box>
    </Stack>
  );
};

export default Sidenavx;
