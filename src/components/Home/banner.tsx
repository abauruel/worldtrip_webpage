import { Box, Text, Stack, Image, Flex, HStack } from '@chakra-ui/react'
export function Banner() {
  return (
    <HStack>
      <Flex
        backgroundImage="url('https://s3-alpha-sig.figma.com/img/d12e/45e2/5d13ebd7a9ec01dbd7395b3ab82a0cd1?Expires=1623628800&Signature=FDkthrh58aigoQ~hoxA9KQbs1DkQ6Dzx5rgXdKJTTNQLDQbHpO73IxwHrAEu3ytel59wIjbhtyRSofL3kblVw1kVAYdo7p8MaQSUunv0lounYNwsmeIMBVP2RPCFYrdzAf~S5-o~PO44WwDYoRKWtR2h9qQLk5W70SV6LlX77iFmXcPm1b8uqxsNnuB4WHVKm07~dGGHCLbU-SOeWO8iZKgYqgHHCqaueNSFRhpnq5~hTRNvv4ku~JnnOZpQZFRCcUD-FUnc1dI8dP9DIKNbE-zAUFREcvwm~T1m9PZXXNKAtHVpdPhuJrSFfm5HxZgLF5YTRIe0c9z~iizNjC9VFQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')"
        w='100%'
        bgRepeat="no-repeat"
        backgroundSize="cover"
        flexDirection="row"
      >
        <Box px={["28", "32", "36"]} py='18'>
          <Stack spacing="4">
            <Text
              fontSize={["2xl", "3xl", "4xl"]}
              color='light.200'
              fontWeight='600'
            >5 Continentes,<br />infinitas possibilidades.</Text>
            <Text
              fontSize={["12", "16", "20"]}
              color='light.300'
            >Chegou a hora de tirar do papel a viagem que você<br /> sempre sonhou. </Text>
          </Stack>
        </Box>
        <Box ml="auto" mr='140'>
          <Image src='./assets/airplane.svg'
            transform="rotate(3deg)"
            height="270"
            w="417"
            mb="-10"
          />
        </Box>


      </Flex>
    </HStack>
  )
}