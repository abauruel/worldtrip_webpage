
import { Box, Flex, Text, VStack, HStack, Image, Link } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Banner } from '../components/Home/banner'
import { TraveTypes } from '../components/Home/travelTypes'
import data from '../../data.json'

import { Swiper, SwiperSlide } from 'swiper/react'
// import Swiper core and required modules
import SwiperCore, {
  Pagination, Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function Home() {
  const continents = data.continents
  return (
    <Flex
      direction="column"
      w='100vw'
      justify='center'
    >
      <Header />
      <Banner />
      <TraveTypes />
      <Flex justifyContent="center">
        <Box borderBottomWidth={2} w="12" borderColor=""></Box>
      </Flex>
      <VStack justify="center" my="14">
        <Text
          fontSize={["20", "28", "36"]} fontWeight="500" color="dark.100">Vamos nessa ?</Text>
        <Text fontSize={["20", "28", "36"]} color="dark.100">Então escolha seu continente </Text>
      </VStack>
      <HStack mx={["0", "100", "140"]} mb="10" height="450">
        <Swiper

          cssMode={true}
          navigation={true}
          loop={true}
          pagination={{ "clickable": true }}
          className="mySwiper"

        >
          {continents.map(continent => (
            <SwiperSlide key={continent.name}>
              <Image
                pos="relative"
                src={continent.picture} />
              <Box bgColor="rgba(0,0,0,0.5)"
                zIndex="2"
                pos="absolute"
                w="100%"
                h="450">
                <VStack
                  spacing="2"
                  position="absolute"
                  left={["20%", "40%"]}
                  top="40%"
                  transform="translate(-50% -50%)"
                >
                  <Link as="a" href={`/continent?name=${continent.name}`}>

                    <Text
                      justifyContent="center"
                      fontWeight="700"
                      fontSize={[36, 48]}
                      color="light.100"
                    >{continent.name}</Text>

                  </Link>
                  <Text
                    fontWeight="700"
                    fontSize={[18, 24]}
                    color="light.100"
                  >{continent.slogan}</Text>
                </VStack>
              </Box>
            </SwiperSlide>

          ))}

        </Swiper>
      </HStack>
    </Flex>

  )
}
