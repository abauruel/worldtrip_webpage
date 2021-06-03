import { HStack } from "@chakra-ui/layout";
import { Logo } from "./Logo";

export function Header() {
  return (
    <HStack justify='center'>
      <Logo />
    </HStack>
  )
}