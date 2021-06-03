import { Box, Flex, Text, VStack, HStack, Image } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Banner } from '../components/Home/banner'
import { TraveTypes } from '../components/Home/travelTypes'

import { Swiper, SwiperSlide } from 'swiper/react'
// import Swiper core and required modules
import SwiperCore, {
  Pagination, Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function Home() {
  const continents = [
    { name: "América", slogan: "", picture: "https://images.unsplash.com/photo-1565366358089-14a5c3086eda?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" },
    { name: "Europa", slogan: "Continente mais antigo.", picture: "https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" },
    { name: "Africa", slogan: "", picture: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" },
    { name: "Asia", slogan: "", picture: "https://images.unsplash.com/photo-1535139262971-c51845709a48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" },
    { name: "Oceania", slogan: "", picture: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" },
    { name: "Antártida", slogan: "", picture: "https://images.unsplash.com/photo-1582758487685-37f5db2f1dff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" },
  ]
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
                  left={["20%", "45%"]}
                  top="40%"
                  transform="translate(-50% -50%)"
                >
                  <Text
                    justifyContent="center"
                    fontWeight="700"
                    fontSize={[36, 48]}
                    color="light.100"
                  >{continent.name}</Text>
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
