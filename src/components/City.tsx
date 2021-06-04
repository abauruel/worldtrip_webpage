import { Flex, Box, VStack, HStack, Text, Image } from '@chakra-ui/react'

type CityPros = {
  topcity?: {
    picture: string,
    name: string,
    city: string,
    flag: string
  }
}

export function City({ topcity }: CityPros) {
  const { picture, name, city, flag } = topcity
  return (
    <VStack maxHeight={["279"]} maxWidth={["256"]}
      borderColor="highlight.100"
      borderWidth={1}
      spacing="2"
      my="4"
      mx="4"
    >

      <Image src={picture}
        height="173"
        objectFit="cover" />

      <HStack
        align="center" justify="space-around"
        w="100%"
      >
        <VStack spacing="1" my="2">
          <Text fontWeight="600" fontSize={["20"]}>{name}</Text>
          <Text fontSize={["16"]} color="dark.50">{city}</Text>
        </VStack>
        <HStack align="center" justify="center">
          <Image
            src={flag} h="10" w="10" borderRadius="full" objectFit="cover" />
        </HStack>
      </HStack>

    </VStack>
  )
}