import { HStack, Icon, Stack, Tag, Text } from '@chakra-ui/react';
import React from 'react'
import { MdInfoOutline } from "react-icons/md";

const PortfolioSection = () => {
  return (
    <HStack bg="white" borderRadius="xl" p ="6">
      <Stack>
        <HStack color="black.80">
          <Text fontSize="14px" >Total Portfolio Value</Text>
          <Icon as={ MdInfoOutline }/>
        </HStack>
      <Text textStyle="h2">₹ 112,312.24</Text>
      </Stack>
      <Stack>
        <HStack color="black.80">
          <Text fontSize="14px" >Wallet Balance</Text>
      
        </HStack>
      <HStack>
      <HStack>
      <Text textStyle="h2">22.39401000</Text><Tag>BTC</Tag>
      </HStack>
      <HStack>
      <Text textStyle="h2">₹ 1,300.00</Text><Tag>INR</Tag>
      </HStack>
      </HStack>
      </Stack>
    </HStack>
  )
}

export default PortfolioSection