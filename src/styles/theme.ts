import { extendTheme } from '@chakra-ui/react'
export const theme = extendTheme({
  colors: {
    light: {
      '100': '#FFF',
      '200': '#F5F8FA',
      '300': '#DADADA',
    },
    dark: {
      '50': '#999999',
      '100': '#47585B',
      '200': '#000000',
    },
    highlight: {
      '100': '#FFBA08'
    }
  },
  fonts: {
    body: 'Poppins'
  }
})