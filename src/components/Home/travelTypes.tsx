import { Flex, HStack, Image, VStack, Text, useBreakpointValue, Box, SimpleGrid } from '@chakra-ui/react'



export function TraveTypes() {
  const variant = useBreakpointValue({
    base: "normal", md: "resized"
  })

  const travelsTypes = [
    { imageSrc: './assets/cocktail.svg', description: 'vida noturna' },
    { imageSrc: './assets/surf.svg', description: 'praia' },
    { imageSrc: './assets/building.svg', description: 'moderno' },
    { imageSrc: './assets/museum.svg', description: 'clássico' },
    { imageSrc: './assets/earth.svg', description: 'e mais...' },
  ]
  if (variant === "normal") {
    return (
      <SimpleGrid
        minChildWidth="100px"
        spacing={10}
        justifyContent="center"
        mx={["50"]}
        my={["12", "16", "20"]}
      >
        {travelsTypes.map(travelsType => (
          <HStack
            key={travelsType.description}
            align="center" spacing="2"
          >
            <Box height="2" w="2" borderRadius={'full'} bg="highlight.100" />
            <Text fontWeight="600" fontSize={[18, 24]}>{travelsType.description}</Text>
          </HStack>

        ))}
      </SimpleGrid>
    )
  }
  return (
    <HStack
      justify="space-between"
      mx={["28", "32", "36"]}
      my={["12", "16", "20"]}>
      {travelsTypes.map(travelsType => (
        <VStack spacing="5" key={travelsType.description}>
          <Image src={travelsType.imageSrc} />
          <Text fontWeight="600">{travelsType.description}</Text>
        </VStack>
      ))}
    </HStack>
  )
}