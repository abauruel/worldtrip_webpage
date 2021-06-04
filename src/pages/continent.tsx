import { Flex, HStack, Image, Box, Text, VStack, Tooltip, Icon, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { useEffect, useState } from 'react'
import data from '../../data.json'
import { Header } from '../components/Header'
import { RiQuestionLine } from 'react-icons/ri'
import { GetServerSideProps } from 'next'
import { redirect } from 'next/dist/next-server/server/api-utils'
import { City } from '../components/City'
type CountriesTopVisitedProps = {
  picture: string,
  name: string,
  city: string,
  flag: string
}

type ContinentProps = {
  continent: {
    picture: string,
    name: string,
    description: string,
    countries: number,
    slogan: string,
    tongue: number,
    cities: number,
    countriesTopVisited: CountriesTopVisitedProps[]
  }
}


export default function Continent({ continent }: ContinentProps) {
  const router = useRouter()

  useEffect(() => {
    if (Object.values(continent).length == 0) {
      router.push('/')
    }
  }, [])

  if (Object.values(continent).length == 0) {
    return (
      <Flex justify="center" mt="40%">
        <Button isLoading h="100%" w="100%" >

        </Button>
      </Flex>
    )
  }
  return (
    <Flex direction="column"
      w='100vw'
      justify='center'>
      <Header />
      <Box position='relative'>
        <Image src={continent?.picture} h="500" w="100%" objectFit="cover" />
        <Text
          position="absolute"
          bottom="10px"
          py="16"
          px={["20", "36"]}
          color="light.100"
          fontSize={48}
          fontWeight={600}
        >{continent.name}</Text>
      </Box>
      <HStack
        px={["10", "36"]}
        py={["10", "20"]}
        spacing={["2", "4"]}
        flexWrap="wrap"
        justify="space-around"
      >
        <Text
          maxWidth="600px"
          mr={["0", "70"]}
          textAlign="justify"
          fontSize={["14", "24"]}>
          {continent.description}
        </Text>
        <HStack spacing="10" my={["10px !important", "0"]}>
          <VStack spacing="2">
            <Text
              color="highlight.100"
              fontWeight="600"
              fontSize={["24", "48"]}>
              {continent.countries}</Text>
            <Text
              fontSize={["24"]}
              fontWeight="600"
              color="dark.100"
            >países</Text>
          </VStack>
          <VStack >
            <Text color="highlight.100" fontWeight="600" fontSize={["24", "48"]}>
              {continent.tongue}</Text>
            <Text
              color="dark.100"
              fontSize={["24"]} fontWeight="600">línguas</Text>
          </VStack>
          <VStack >
            <Text color="highlight.100" fontWeight="600" fontSize={["24", "48"]}>
              {continent.cities}</Text>
            <HStack spacing="2">
              <Text
                color="dark.100"
                fontSize={["24"]} fontWeight="600">cidades</Text>
              <Tooltip
                placement="right-end"
                hasArrow
                label="Top 100 cidades mais visitadas" aria-label="A tooltip">
                <Icon as={RiQuestionLine} color="dar.200" />
              </Tooltip>
            </HStack>
          </VStack>
        </HStack>
      </HStack>
      <Text px={["10", "36"]} py={["4"]}
        fontSize={["20", "36"]}
        color="dark.100"
      >Cidades +100</Text>
      <Box mx={["10", "36"]}
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        align="center" justify="center">
        {continent.countriesTopVisited?.map(top => (
          <City topcity={top} key={top.name} />
        ))}
      </Box>
    </Flex>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  let continent = {}
  if (req.__NEXT_INIT_QUERY.name) {
    continent = data.continents.find(c => c.name === req.__NEXT_INIT_QUERY.name)
    if (continent === undefined) {
      continent = {}
    }
  }

  return {
    props: { continent }
  }
}