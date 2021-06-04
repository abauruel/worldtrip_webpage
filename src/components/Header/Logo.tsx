import { Image } from '@chakra-ui/react'

import Link from "next/link"
export function Logo() {
  return (
    <Link href="/" passHref >
      <a>
        <Image src='./assets/logo.svg' py='7' />
      </a>
    </Link>
  )
}